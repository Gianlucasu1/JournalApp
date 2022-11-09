import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { JournalRoutes } from '../journal/routes/JournalRoutes'

export const AppRouter = () => {
  return (
    <Routes>
        <Route path='/journal' element={<JournalRoutes />} /> 
        <Route path='/*' element={<AuthRoutes />} /> 
    </Routes>
  )
}
