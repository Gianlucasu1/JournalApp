import { SaveOutlined } from '@mui/icons-material'
import { Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import { ImageGallery } from '../components/ImageGallery'

export const NoteView = () => {
  return (
    <Grid container direction='row' justifyContent='space-between' sx={{mb:1}} alignItems='center'>

        <Grid item>
            <Typography fontSize={39} fontWeight='light'>28 Agosto 2023</Typography>
        </Grid>
        <Grid item>
            <Button color='primary' sx={{p:2}}>
                <SaveOutlined sx={{ fontSize:30, mr:1}}/>
                Guardar
            </Button>
        </Grid>

        <Grid container>
            <TextField
                type='text'
                variant='filled'
                fullWidth
                placeholder='Ingrese un titulo'
                label='titulo'
                sx={{ border: 'none', mb:1}}
            />

            <TextField
                type='text'
                variant='filled'
                fullWidth
                multiline
                placeholder='Que sucedio hoy?'
                sx={{ border: 'none', mb:1}}
                minRows={5}        
            />

        </Grid>

        <ImageGallery/>

    </Grid>
  )
}
