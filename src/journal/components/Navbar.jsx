import { LogoutOutlined, MenuOutlined } from '@mui/icons-material'
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { checkingCredentials, logout, startLogout } from '../../store/auth';

export const Navbar = ({ drawerWidth }) => {
   

    const dispatch = useDispatch();

    const logOutFromAppExit = (event) => {
       
        event.preventDefault();
        dispatch(startLogout());
        

    }
    return (
        <AppBar
            position='fixed'
            sx={{
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px`, minHeight: 80  }
            }}
        >
            <Toolbar>
                <IconButton
                    color='inherit'
                    edge='start'
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >
                    <MenuOutlined />
                </IconButton>

                <Grid container direction='row' justifyContent='space-between'>

                    <Typography alignSelf='center'>Journal App</Typography>
                    <IconButton onClick={logOutFromAppExit} color='error'>
                        <LogoutOutlined />
                    </IconButton>

                </Grid>

            </Toolbar>
        </AppBar>
    )
}
