import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material'
import { MenuOutlined,LogoutOutlined} from '@mui/icons-material'
import { useDispatch } from 'react-redux'
import { startLogout } from '../../store/auth/thunks';

export const NavBar = ({drawerWidth=240}) => {

    const dispatch = useDispatch();
    const onLogout = ()=>{
        dispatch(startLogout())
       
    }

  return (
    <AppBar 
        
        position='fixed'
        sx={{
            width: {sm: `calc(99.9% - ${drawerWidth}px)` },
            ml: {sm: `${drawerWidth}px`}
        }}

    >
        <Toolbar >
            <IconButton
            color='inherit'
            edge="start"
            sx={{mr:2,display:{sm:'none' ,backgroundColor:'MidnightBlue'}}}
            >
                <MenuOutlined/>
            </IconButton>

            <Grid container direction='row' justifyContent='space-between' alignItems='center' >
                <Typography variant='h6' noWrap component='div'>Journal</Typography>

                <IconButton color='error'
                onClick={onLogout}>
                    <LogoutOutlined/>
                </IconButton>

            </Grid>
        </Toolbar>

    </AppBar>
    )
}
