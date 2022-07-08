

import { Drawer,Box, Toolbar, Typography, Divider, List, ListItem, ListItemButton, ListItemIcon, Grid, ListItemText } from '@mui/material'
import {TurnedInNot} from '@mui/icons-material'
import {useSelector} from 'react-redux'

export const SideBar = ({drawerWidth}) => {
    const {displayName} = useSelector(state=>state.auth)
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
            <Toolbar>
                <Typography variant = 'h6' noWrap component='div'>
                    {displayName}
                </Typography>
            </Toolbar>
            <Divider/>
                <List>
                    {
                        ['Enero','Febrero','Marzo','Abril','Mayo'].map(text=>(
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <TurnedInNot/>
                                    </ListItemIcon>
                                    <Grid container>
                                        <ListItemText primary={ text }/>
                                        <ListItemText secondary={'Aliqua nostrud labore '}/>
                                    </Grid>
                                    
                                </ListItemButton>
                            </ListItem>
                        ))
                    }
                </List>

        </Drawer>
    </Box>
    )
}
