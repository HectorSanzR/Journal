
import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        messageSaved: '',
        notes: [],
        active:null
        // active:{
        //     id:
        //     title:
        //     TableBodydate
        //     
        // }
    },
    reducers: {
        savingNewNote:(state)=>{
            state.isSaving = true;
        },
        addNewEmptyNote:(state,action)=>{
            state.notes.push(action.payload);
            state.isSaving = false;

        },
        setActiveNote:(state,action)=>{
            state.active = action.payload;
            state.messageSaved='';

        },
        setNotes:(state,action)=>{
            state.notes = action.payload;
            state.isSaving = false;
        },
        setSaving:(state,action)=>{
            state.isSaving = true
            state.messageSaved='';
        },
        updateNote:(state,action)=>{ //payload: nota
            state.isSaving = false;
            state.notes = state.notes.map(note=>{

                if (note.id === action.payload.id){
                    return action.payload;
                }

                return note;
            });
            state.messageSaved = `${action.payload.title}, Actualizado Correctamente`
        },
        setPhotosToActiveNote:(state,action)=>{
            if(!state.active.imageUrls)return;
            state.active.imageUrls = [...state.active.imageUrls, ...action.payload];
            state.isSaving = false;
        },
        deleteNoteById:(state,action)=>{
            state.active=null;
            state.notes= state.notes.filter(note=>note.id !== action.payload);


          

        },
        clearNoteLogout:(state)=>{
            state.isSaving ='false';
            state.messageSaved='';
            state.notes= [];
            state.active=null;
        }
    }
});
export const { 
                addNewEmptyNote,
                clearNoteLogout,
                deleteNoteById,
                savingNewNote,
                setActiveNote,
                setNotes,
                setPhotosToActiveNote,
                setSaving,
                updateNote,
            
} = journalSlice.actions;
