import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from "react-router-dom";
import { Google } from '@mui/icons-material'
import { Link as RoutLink, useNavigate } from 'react-router-dom'
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material'
import React, { useMemo } from 'react'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'
import {startLoginWithEmailPassword, startGoogleSignIn } from '../../store/auth/thunks'

const formData = {
  email: '@google.com',
  password: ''
}

export const LoginPage = () => {
  const dispatch = useDispatch();
  const { status, errorMessage } = useSelector(state => state.auth)
  const { email, password, onInputChange } = useForm(formData);
  const isAuthenticating = useMemo(() => status === 'checking', [status])

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(startLoginWithEmailPassword({ email, password }));
  }

  const onGoogleSignIn = (event) => {
    event.preventDefault();
    dispatch(startGoogleSignIn());
  }

  return (
    <AuthLayout title='Login'>
      <form className='animate__animated animate__fadeIn animate__faster' onSubmit={onSubmit}>

        <Grid container>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder='correo@google.com'
              fullWidth
              name='email'
              value={email}
              onChange={(event) => onInputChange(event)}
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
              onChange={(event) => onInputChange(event)}
            />
          </Grid>

          <Grid
            item
            xs={12}
            display={!!errorMessage ? '' : 'none'}
            sx={{ mt: 2 }}
          >
            <Alert severity='error'>{errorMessage}</Alert>
          </Grid>

          <Grid
            alignItems="center"
            justifyContent="center"
            container spacing={2}
            sx={{ mb: 2, mt: 2 }}
          >
            <Grid item xs={12} md={6}>
              <Button type='submit' disabled={isAuthenticating} variant='contained' fullWidth>
                Login
              </Button>
            </Grid>

            <Grid item xs={12} md={6}>
              <Button disabled={isAuthenticating} onClick={onGoogleSignIn} variant='contained' fullWidth>
                <Google />
                <Typography sx={{ ml: 1 }} >Google</Typography>
              </Button>
            </Grid>

          </Grid>

          <Grid container direction='row' justifyContent='end'>

            <Link component={RoutLink} color="inherit" to='/auth/register'>
              Crear una cuenta
            </Link>

          </Grid>

        </Grid>

      </form>

    </AuthLayout>


  )
}
