import { TurnedInNot } from '@mui/icons-material'
import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography, Grid } from '@mui/material'
import { width } from '@mui/system'
import React from 'react'

export const Sidebar = ({drawerWidth=240}) => {
  return (
    <Box
        component='nav'
        sx={{ width:{sm:drawerWidth}, flexShrink:{sm: 0} }}
    >
        <Drawer
            variant='permanent'
            open
            sx={{
                display:{xs:'none', sm:'block'},
                '& .MuiDrawer-paper' : { boxSizing: 'border-box', width:drawerWidth }
            }}
        >

        <Toolbar>
            <Typography variant='h6' noWrap component='div'>
                Gianluca Casu
            </Typography>
        </Toolbar>

        <Divider/>

        <List>

            { ['enero', 'febrero', 'marzo', 'abril', 'mayo'].map( (item) => {
                return ( 
                    <ListItem key={item}>
                        <ListItemButton>
                            <ListItemIcon>
                                <TurnedInNot/>
                            </ListItemIcon>
                            <Grid container>                                
                                <ListItemText primary={item}></ListItemText>
                                <ListItemText secondary={ 'Exercitation cillum  irure split aremoti' }/>
                            </Grid>
                        </ListItemButton>                
                    </ListItem>
                )
            } ) }

        </List>    

        </Drawer>
    </Box>
  )
}
