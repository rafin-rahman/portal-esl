import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import colorPalette from '../../utils/colors'
import crown from '../../assets/logo/crown-orange.png'

import Container from '@material-ui/core/container'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select'
import FormControl from '@material-ui/core/formControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import MenuItem from '@material-ui/core/MenuItem'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles((theme) => ({
  avatar: {
    margin: theme.spacing(2),
    backgroundColor: theme.palette.secondary.main,
  },
  paper: {
    marginTop: theme.spacing(8),
    padding: '40px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: colorPalette.light.bgCard,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

const Register = (props) => {
  const classes = useStyles()
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    password: '',
    passwordTwo: '',
    branch: '',
  })
  const { name, surname, email, password, passwordTwo, branch } = formData
  const onChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  const onSubmit = async (e) => {
    e.preventDefault()
    if (password !== passwordTwo) {
      console.log('Password not matching')
    } else {
      console.log('User registered')
    }
  }
  return (
    <Container components="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={10}>
        <img src={crown} alt="" height={50} />

        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <form className={classes.form} onSubmit={(e) => onSubmit(e)}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                value={name}
                onChange={(e) => onChange(e)}
                name="name"
                autoComplete="name"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                value={surname}
                onChange={(e) => onChange(e)}
                name="surname"
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={email}
                onChange={(e) => onChange(e)}
                name="email"
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={password}
                onChange={(e) => onChange(e)}
                name="password"
                variant="outlined"
                required
                fullWidth
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                value={passwordTwo}
                onChange={(e) => onChange(e)}
                name="passwordTwo"
                variant="outlined"
                required
                fullWidth
                label="Type Password again"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl className={classes.formControl}>
                <Select
                  value={branch}
                  onChange={(e) => onChange(e)}
                  name="branch"
                  displayEmpty
                  className={classes.selectEmpty}
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  <MenuItem value={'London'}>London</MenuItem>
                  <MenuItem value={'Birmingham'}>Birmingham</MenuItem>
                  <MenuItem value={'Manchester'}>Manchester</MenuItem>
                </Select>
                <FormHelperText>Office</FormHelperText>
              </FormControl>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.submit}
            style={{ backgroundColor: colorPalette.light.buttonSelected }}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link to="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  )
}

Register.propTypes = {}

export default Register
