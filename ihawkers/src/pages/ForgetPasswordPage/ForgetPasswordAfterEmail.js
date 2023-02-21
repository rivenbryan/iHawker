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
export default function ForgetPasswordAfterEmail() {
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
        <Box component="form" noValidate onSubmit={{}} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <TextField
                autoComplete="given-name"

                required
                fullWidth
                id="name"
                label="Password"
                autoFocus
                // value={{}}
                onChange={{}}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                autoComplete="given-name"

                required
                fullWidth
                id="name"
                label="Confirm Password"
                autoFocus
                // value={{}}
                onChange={{}}
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
      </Container>
    </Container>
    </>
  )
}
