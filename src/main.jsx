import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { JournalApp } from './JournalApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <JournalApp />
  </BrowserRouter>
)
