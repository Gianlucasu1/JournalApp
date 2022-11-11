import { Google } from '@mui/icons-material'
import { Link as RoutLink } from 'react-router-dom'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import React from 'react'
import { AuthLayout } from '../layout/AuthLayout'

export const RegisterPage = () => {
  return (
    <AuthLayout title='Crear Cuenta'>
      <form>

        <Grid container>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Nombre Completo"
              type="text"
              placeholder='Gianluca Casu'
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Email"
              type="email"
              placeholder='email@google.com'
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="confirmar password"
              type="password"
              placeholder='password'
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="confirmar password"
              type="password"
              placeholder='password'
              fullWidth
            />
          </Grid>

          <Grid
            alignItems="center"
            justifyContent="center"
            container spacing={2}
            sx={{ mb: 2, mt: 2 }}
          >
            <Grid item xs={12} md={12}>
              <Button variant='contained' fullWidth>
                Login
              </Button>
            </Grid>

           
          </Grid>

          <Grid container direction='row' justifyContent='end'>
            <Typography sx={{mr:1}}>Ya tienes cuenta?</Typography>
            <Link component={ RoutLink } color='inherit' to='/login/'>
              Ingresar
            </Link>

          </Grid>

        </Grid>

      </form>

    </AuthLayout>


  )
}
