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
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";
import ErrorComponent from '../../components/ErrorComponent';
/**
*A component to render a form for resetting password.
* @returns {JSX.Element} JSX.Element representing the ForgetPasswordPage component.
*/

export default function ForgetPasswordPage() {
  const [errorMessage, setErrorMessage] = useState(null)
  const [flag, setFlag] = useState(false)
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const state = queryParams.get('state')
  let notification
  switch (state) {
    case "true":
      notification = "Email has been sent. Please check your email to reset password"
      break
  }
  toast.success(notification);
  /**

  *Handles form submission for sending an email to reset password.
  *@param {Object} e - The form submission event.
*/
  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const senderEmail = form.elements.email.value;
    const senderDomain = senderEmail.split('@')[1]; // extract sender domain
    const authorizedDomain = 'e.ntu.edu.sg'; // replace with your authorized domain

    if (senderDomain !== authorizedDomain) {
      setFlag(true)
      setErrorMessage("Invalid Email. Please type in an email format."); // update state variable
      return; // exit function
    }
    fetch('http://localhost:4000/api/auth/send-email', {
      method: "POST",
      body: JSON.stringify({ "email": form.elements.email.value }),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:4000"
      },
      credentials: "include"
    }).then(async (response) => {
      if (response.ok) {
        //redirect to Page to say Check Email
        window.location.href = "/forgetPassword/?state=true"
      } else {
        // handle error response
        const errorResponse = await response.json()
        const errorMessage = errorResponse.error
        setFlag(true)
        setErrorMessage(errorMessage)
      }
    }).catch((error) => {
      console.error(error)
    })
  }

  return (
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
          Forget Password
        </Typography>
        <Box component="form" noValidate
          onSubmit={handleSubmit}
          sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <TextField
                autoComplete="given-name"
                required
                fullWidth
                id="email"
                label="Email Address"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={12}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
            >
              Submit
            </Button>
            </Grid>
          </Grid>
          {flag ? <ErrorComponent text={errorMessage} /> : null}
        </Box>
      </Container>
    </Container>
  )
}
