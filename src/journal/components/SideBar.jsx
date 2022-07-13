

import { Drawer,Box, Toolbar, Typography, Divider, List, ListItem, ListItemButton, ListItemIcon, Grid, ListItemText } from '@mui/material'
import {useSelector} from 'react-redux'
import { SideBarItem } from './SideBarItem'

export const SideBar = ({drawerWidth}) => {
    const {displayName} = useSelector(state=>state.auth)
    const {notes} = useSelector(state=>state.journal)
  return (
    <Box        
        component='nav'
        sx={{width: {sm:drawerWidth},felxShirink:{sm:0}}}
    >
        <Drawer 
            
            variant='permanent'//temporary
            open 
            sx={{
                 
                display:{xs:'block'},
                '& .MuiDrawer-paper':{boxSizing: 'border-box',width: drawerWidth}
            }}

        >
            <Toolbar sx={{backgroundColor:'#94ccf0',}} >
                <Typography variant = 'h6' noWrap component='div'>
                    {displayName}
                </Typography>
            </Toolbar>
            <Divider/>
                <List
                
                
                 >
                    {
                        notes.map(note=>(
                            <SideBarItem   key={note.id} {...note}/>
                        ))
                    }
                </List>

        </Drawer>
    </Box>
    )
}
