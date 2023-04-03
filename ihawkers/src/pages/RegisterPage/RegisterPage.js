/**
 * @typedef {Object} SignupBody
 * @property {string} name - The user's first name
 * @property {string} email - The user's email address
 * @property {string} password - The user's password
 * @property {boolean} isHawker - Whether the user is a hawker or not
 */


import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Navbar from '../../components/Navbar';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useAuth } from '../../context/userAuthContext';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";
import ErrorComponent from '../../components/ErrorComponent';
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        iHawker
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

/**
 * Renders a registration form for users to sign up for an account
 * @returns {JSX.Element}
 */

export default function Register() {
  const {setUser} = useAuth()
  const [name, setName] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [details, setDetails] = React.useState('')
  const [errorMessage, setErrorMessage] = React.useState(null)
  const [flag, setFlag] = React.useState(false)

   /**
   * Registers a new user by making a POST request to the server
   * @param {Event} event - The form submission event
   * @returns {Promise<void>}
   */

  async function registerUser(event) {
    event.preventDefault();
    console.log(name, password, email, details)
    setErrorMessage("");
    setFlag(false);
    if (!name || !email || !password || (details == "")) {
      setFlag(true)
      setErrorMessage("All Fields must be filled")
      return
    }
    const body = {
      name,
      email,
      password,
      isHawker: details == "Hawker"
    }
    fetch('http://localhost:4000/api/auth/signup', {
      method: "POST",
      body: JSON.stringify(body),
      headers: { 
        'Content-Type': 'application/json' ,
        'Access-Control-Allow-Origin': "http://localhost:4000"
    },
    credentials: "include"
    }).then(async (response) => {
      if (response.ok) {
        setUser(await response.json())
        //redirect to Landing Page
        window.location.href = "/?authState=registered"
      } 
      else {
        const errorMessage = await response.json().then(
          err => err.error
        )
        toast.error(errorMessage);
      }
    })

  }

    /**
   * Handles changes to the input fields
   * @param {Event} e - The input change event
   * @returns {void}
   */

  const handleChange = (e) => {

    if (e.target.id === 'name') {
      setName(e.target.value)
    } else if (e.target.id === 'password') {
      setPassword(e.target.value)

    } else if (e.target.id === 'email') {
      setEmail(e.target.value)
    } 
  }

  const handleDetails = (e) => {
    setDetails(e.target.value)
  }

  return (
    <Container component="main">
      <Navbar />
      <ToastContainer position="bottom-right" newestOnTop />
      <Container
        maxWidth="xs"
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={registerUser} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"

                required
                fullWidth
                id="name"
                label="First Name"
                autoFocus
                value={name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                value={password}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Details * </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={details}
                  label="Hawker"
                  onChange={handleDetails}
                >
                  <MenuItem value={"Hawker"}>Hawker</MenuItem>
                  <MenuItem value={"Customer"}>Customer</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          {flag ? <ErrorComponent text={errorMessage}/> : null}
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Copyright sx={{ mt: 5 }} />
    </Container>
  );
}