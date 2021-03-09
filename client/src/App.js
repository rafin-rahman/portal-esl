import React from 'react'
import './App.css'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Register from './components/auth/Register'
import theme from './theme'

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Register></Register>
      </ThemeProvider>
    </>
  )
}

export default App
