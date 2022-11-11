import { StarOutline } from '@mui/icons-material'
import { Grid, Typography } from '@mui/material'
import React from 'react'

export const NothingSelectedView = () => {
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: 'calc( 100vh - 110px )', backgroundColor: 'primary.main' }}
        >
            <Grid item xs={12}>
                <Grid container direction='column' alignItems='center'>
                    <StarOutline sx={{ fontSize: 100, color: 'white' }} />
                    <Typography color='white' variant='h5'>Selecciona o crea una entrada</Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}
