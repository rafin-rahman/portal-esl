import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundColor: '#f5f6fa',
        },
      },
    },
    palette: {
      orange: {
        main: '#F1B753',
      },
    },
  },
})

export default theme
