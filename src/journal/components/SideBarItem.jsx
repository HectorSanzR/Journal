
import {useDispatch} from 'react-redux'
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText,Divider } from '@mui/material'
import { TurnedInNot} from '@mui/icons-material'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

import { useMemo } from 'react'
import { setActiveNote } from '../../store/journal/journalSlices'

export const SideBarItem = ({title,body,id,date,imageUrls=[]}) => {
    const dispatch = useDispatch()

    const onClickNote = ()=>{
        dispatch(setActiveNote({title,body,id,date,imageUrls}))
    }
    const newTitle = useMemo(()=>{
        return title.length > 17
            ? title.substring(0,16) +'...'
            : title        
    },[title]);


  return (
        <ListItem sx={{backgroundColor: '#a9c7dd',  '&:hover': {
            backgroundColor: '#94ccf0',
            opacity: [0.9, 0.8, 0.7],
          }, borderRadius: 2 }} key={id} disablePadding>
            <ListItemButton onClick={onClickNote}>
                <ListItemIcon >
                    <AutoAwesomeIcon  color='white'  />
                </ListItemIcon>
                <Divider/>
            
                    <Grid  container color='white'  >
                        <ListItemText primary={ newTitle }/>
                        <ListItemText secondary={body}/>
                    </Grid>
           
            
        </ListItemButton>
        </ListItem>
  )
}
