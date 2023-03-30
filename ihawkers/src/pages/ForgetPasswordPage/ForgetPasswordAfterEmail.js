import React, { useState } from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Navbar from '../../components/Navbar';
import { useLocation } from "react-router-dom";
import ErrorComponent from '../../components/ErrorComponent';

/**
 * A component that displays a form to reset password
 *
 * @component
 * @return {JSX.Element}
 */


export default function ForgetPasswordAfterEmail() {
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const token = queryParams.get('token')
  const [flag, setFlag] = useState(false)
  const [error, setError] = useState(null)

  /**
  * Handle form submit to reset password
  *
  * @param {React.FormEvent<HTMLFormElement>} e - The form submission event
  */
  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.currentTarget
    setFlag(false)
    setError(null)
    if (!form.elements.password.value || !form.elements.confirmPassword.value) {
      setFlag(true)
      setError("All fields must be filled")
      return
    }
    if (form.elements.password.value != form.elements.confirmPassword.value) {
      setFlag(true)
      setError("Password do not match! Please try again")
      return
    }
    fetch('http://localhost:4000/api/auth/reset-password', {
      method: "POST",
      body: JSON.stringify({
        "newPassword": form.elements.confirmPassword.value,
        token
      }),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:4000"
      },
      credentials: "include"
    }).then(async (response) => {
      if (response.ok) {
        //redirect to Landing Page
        window.location.href = "/?authState=reset-password"
      }
      else {
        const errorMessage = await response.json()
        console.log(errorMessage)
        setFlag(true)
        setError(errorMessage)
      }
    })
  }

  return (

    <>
      <Container component="main">
        <Navbar />
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
            Reset Password
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField
                  autoComplete="given-name"
                  required
                  fullWidth
                  type="password"
                  id="password"
                  label="Password"
                  autoFocus
                // value={{}}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  autoComplete="given-name"
                  required
                  fullWidth
                  type="password"
                  id="confirmPassword"
                  label="Confirm Password"
                  autoFocus
                // value={{}}
                />
              </Grid>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Reset
              </Button>
            </Grid>
          </Box>
          {flag ? <ErrorComponent text={error} /> : null}
        </Container>
      </Container>
    </>
  )
}
