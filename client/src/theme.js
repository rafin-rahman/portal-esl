import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundColor: '#2E333E',
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#764abc',
    },
  },
})

export default theme
