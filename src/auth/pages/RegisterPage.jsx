import { Google } from '@mui/icons-material'
import { Link as RoutLink } from 'react-router-dom'
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material'
import React, { useMemo, useState } from 'react'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'
import { useDispatch, useSelector } from 'react-redux'
import { startCreatingUserWithEmailPassword } from '../../store/auth'

const formValidations = {
  email: [(value) => value.includes("@"), 'El correo debe tener una arroba'],
  password: [(value) => value.length >= 6, 'El password debe tener mas de 6 caracteres'],
  displayName: [(value) => value.length >= 1, 'El nombre es obligatorio'],
}

const formData = {
  displayName: '',
  email: '',
  password: ''
}




export const RegisterPage = () => {

  const { status, errorMessage } = useSelector(state => state.auth);
  const isCheckingAuthentication = useMemo(() => status === 'checking', [status]);

  const dispatch = useDispatch();

  const [formSubmitted, setFormSubmitted] = useState(false)  

  const { email, password, onInputChange, displayName, formState, isFormValid, emailValid, passwordValid, displayNameValid } = useForm(formData, formValidations);


  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);

    if (!isFormValid) return;
    dispatch(startCreatingUserWithEmailPassword(formState))
    console.log(formState);

  }


  return (
    <AuthLayout title='Crear Cuenta'>
      <form className='animate__animated animate__fadeIn animate__faster' onSubmit={onSubmit}>

        <Grid container>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              name='displayName'
              value={displayName}
              onChange={onInputChange}
              label="Nombre Completo"
              type="text"
              placeholder='Gianluca Casu'
              fullWidth
              error={!!displayNameValid && formSubmitted}
              helperText={displayNameValid}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              name='email'
              value={email}
              onChange={onInputChange}
              label="Email"
              type="email"
              placeholder='email@google.com'
              fullWidth
              error={!!emailValid && formSubmitted}
              helperText={emailValid}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              name='password'
              value={password}
              onChange={onInputChange}
              label="password"
              type="password"
              placeholder='password'
              fullWidth
              error={!!passwordValid && formSubmitted}
              helperText={passwordValid}
            />
          </Grid>

          <Grid
            alignItems="center"
            justifyContent="center"
            container spacing={2}
            sx={{ mb: 2, mt: 2 }}
          >
            <Grid 
              item 
              xs={12} 
              display={!!errorMessage ? '' : 'none'}
            >
              <Alert severity='error'>{errorMessage}</Alert>
            </Grid>

            <Grid item xs={12} md={12}>
              <Button disabled={isCheckingAuthentication} variant='contained' type='submit' fullWidth>
                Login
              </Button>
            </Grid>


          </Grid>

          <Grid container direction='row' justifyContent='end'>
            <Typography sx={{ mr: 1 }}>Ya tienes cuenta?</Typography>
            <Link component={RoutLink} color='inherit' to='/login/'>
              Ingresar
            </Link>

          </Grid>

        </Grid>

      </form>

    </AuthLayout>


  )
}
