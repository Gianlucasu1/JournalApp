import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import React from 'react'
import { purpleTheme, alternativeTheme } from './index'

export const AppTheme = ( { children } ) => {
  return (
    <ThemeProvider theme={purpleTheme}>
        <CssBaseline />
        {children}
    </ThemeProvider>
  )
}
