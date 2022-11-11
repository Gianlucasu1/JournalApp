import { Google } from '@mui/icons-material'
import { Link as RoutLink } from 'react-router-dom'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import React from 'react'
import { AuthLayout } from '../layout/AuthLayout'

export const LoginPage = () => {
  return (
    <AuthLayout title='Login'>
      <form>

        <Grid container>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder='correo@google.com'
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contrasena"
              type="password"
              placeholder='Contrasena'
              fullWidth
            />
          </Grid>

          <Grid
            alignItems="center"
            justifyContent="center"
            container spacing={2}
            sx={{ mb: 2, mt: 2 }}
          >
            <Grid item xs={12} md={6}>
              <Button variant='contained' fullWidth>
                Login
              </Button>
            </Grid>

            <Grid item xs={12} md={6}>
              <Button variant='contained' fullWidth>
                <Google />
                <Typography sx={{ ml: 1 }} >Google</Typography>
              </Button>
            </Grid>

          </Grid>

          <Grid container direction='row' justifyContent='end'>

            <Link component={RoutLink} color="inherit" to='/register'>
              Crear una cuenta
            </Link>

          </Grid>

        </Grid>

      </form>

    </AuthLayout>


  )
}
