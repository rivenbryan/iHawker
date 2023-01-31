import React from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import GoogleMap from './GoogleMap'
import List from './List'
import { Grid, Container } from '@mui/material'
export default function MapPage() {
  return (
    <>
      <Navbar />
      <Container sx={{paddingTop: 5}}>
        <Grid container spacing={2}>
          <Grid item md={4}>
            <List/>
          </Grid>
          <Grid item md={8}>
            <GoogleMap />
          </Grid>
        </Grid>
      </Container>
      <Footer/>

    </>

  )
}
