import React from 'react'
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
  const handleSubmit = (e) => {e.preventDefault()
    const form = e.currentTarget
    fetch('http://localhost:4000/api/auth/send-email', {
      method: "POST",
      body: JSON.stringify({"email": form.elements.name.value}),
      headers: { 'Content-Type': 'application/json' }
    }).then(async (response) => {
      if (response.ok) {
        //redirect to Page to say Check Email
        window.location.href = "/"
      }
      else {
        const errorMessage = await response.json().then(
          err => err.error
        )
      }
    })}

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
                id="name"
                label="Email Address"
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
            Submit
          </Button>
          </Grid>
        </Box>
      </Container>
    </Container>
  )
}
