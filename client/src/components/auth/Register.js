import React from 'react'
import crown from '../../../src/assets/logo/crown.png'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Box from '@material-ui/core/Box'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

import login_img from '../../../src/assets/illustrations/login.svg'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: '#9D9EA2',
    backgroundColor: '#3A3C45',
  },
  grid: { width: '100%', margin: '0px' },
}))

const Register = (props) => {
  const classes = useStyles()
  return (
    <>
      <AppBar position="static" style={{ backgroundColor: '#24262E' }}>
        <Toolbar>
          <img src={crown} width={'30px'} style={{ marginRight: '20px' }} />
          <Typography variant="h6" className={classes.title}>
            Elizabeth School - REGISTER
          </Typography>
        </Toolbar>
      </AppBar>

      <Box>
        <Grid container spacing={2} className={classes.grid}>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              <img src={login_img} height={100} />
            </Paper>
          </Grid>
          <Grid item xs={9}>
            <Paper className={classes.paper}>
              <form></form>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

Register.propTypes = {}

export default Register
