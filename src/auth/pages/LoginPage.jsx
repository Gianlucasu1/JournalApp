import { useDispatch } from 'react-redux'
import { Google } from '@mui/icons-material'
import { Link as RoutLink } from 'react-router-dom'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import React from 'react'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'
import { checkingAuthentication, startGoogleSignIn } from '../../store/auth/thunks'


export const LoginPage = () => {

  const dispatch = useDispatch();

  const {email, password, onInputChange} = useForm({
    email:'gianluca@google.com',
    password: '12345'
  });


  const onSubmit = ( event ) => {
    event.preventDefault();
    console.log({email,password});
    dispatch( checkingAuthentication() );
  }

  const onGoogleSignIn = ( event ) => {
    event.preventDefault();
    dispatch( startGoogleSignIn() );
  }

  return (
    <AuthLayout title='Login'>
      <form onSubmit={onSubmit}>

        <Grid container>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder='correo@google.com'
              fullWidth
              name='email'
              value={email}
              onChange={(event)=> onInputChange(event) }
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contrasena"
              type="password"
              placeholder='Contrasena'
              fullWidth
              name='password'
              value={password}
              onChange={ (event) => onInputChange(event) }
            />
          </Grid>

          <Grid
            alignItems="center"
            justifyContent="center"
            container spacing={2}
            sx={{ mb: 2, mt: 2 }}
          >
            <Grid item xs={12} md={6}>
              <Button type='submit' variant='contained' fullWidth>
                Login
              </Button>
            </Grid>

            <Grid item xs={12} md={6}>
              <Button onClick={ onGoogleSignIn } variant='contained' fullWidth>
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
