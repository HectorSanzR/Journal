
import { TableBody } from '@mui/material';
import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSavin: true,
        messageSaved: '',
        notes: [],
        activeNote:null
        // active:{
        //     id:
        //     title:
        //     TableBodydate
        //     imageUrls
        // }
    },
    reducers: {
        addNewEmptyNote:(state,action)=>{

        },
        setActiveNote:(state,action)=>{

        },
        setNotes:(state,action)=>{

        },
        setSaving:(state,action)=>{

        },
        updateNote:(state,action)=>{

        },
        deleteNoteById:(state,action)=>{

        },
    }
});
export const { 
                addNewEmptyNote,
                setActiveNote,
                setNotes,
                setSaving,
                updateNote,
                deleteNoteById 
            
            } = journalSlice.actions;