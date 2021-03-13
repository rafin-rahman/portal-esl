import React from 'react'
import './App.css'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import theme from './theme'
import Register from './components/auth/Register'
import Login from './components/auth/Login'

// Redux
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Route exact path="/" component={Login} />
          <Switch>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </ThemeProvider>
      </Router>
    </Provider>
  )
}

export default App
