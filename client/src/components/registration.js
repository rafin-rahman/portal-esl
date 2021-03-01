import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import crown from '../../src/assets/logo/crown.png'
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
}))

const Registration = (props) => {
  const classes = useStyles()
  return (
    <div>
      <AppBar position="static" style={{ backgroundColor: '#24262E' }}>
        <Toolbar>
          <img src={crown} width={'30px'} style={{ marginRight: '20px' }} />
          <Typography variant="h6" className={classes.title}>
            Elizabeth School - REGISTER
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

Registration.propTypes = {}

export default Registration
