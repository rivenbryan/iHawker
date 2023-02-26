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
export default function ForgetPasswordPage() {
  const [errorMessage, setErrorMessage] = useState(null)
  const handleSubmit = (e) => {e.preventDefault()
    const form = e.currentTarget
    const senderEmail = form.elements.email.value;
    const senderDomain = senderEmail.split('@')[1]; // extract sender domain
    const authorizedDomain = 'e.ntu.edu.sg'; // replace with your authorized domain

  if (senderDomain !== authorizedDomain) {
    setErrorMessage(`Only emails from ${authorizedDomain} domain are authorized.`); // update state variable
    return; // exit function
  }
    fetch('http://localhost:4000/api/auth/send-email', {
      method: "POST",
      body: JSON.stringify({"email": form.elements.email.value}),
      headers: { 'Content-Type': 'application/json' }
    }).then(async (response) => {
      if (response.ok) {
        //redirect to Page to say Check Email
        window.location.href = "/?authState=send-email"
      } else {
        // handle error response
        const errorResponse = await response.json()
        const errorMessage = errorResponse.error
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
          onSubmit= {handleSubmit}
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
                // value={{}}
              />
            </Grid>
            
          {errorMessage ? <Box>{errorMessage}</Box> : null}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Submit
          </Button>
          </Grid>
        </Box>
      </Container>
    </Container>
  )
}
