import React, {useState} from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import GoogleMap from './GoogleMap'
import List from './List'
import { Grid, Container } from '@mui/material'
import Fade from 'react-reveal/Fade';

/**
 * MapPage component that displays a map and a list of nearby hawker centres.
 * @function MapPage
 * @returns {JSX.Element}
 */
export default function MapPage() {
  const [hawker, setHawker] = useState("")
  return (
    <>
      <Navbar />
      <Container sx={{paddingTop: 5, height: "81vh", paddingBottom: 50}}>
        <Grid container spacing={2}>
          <Grid item md={4}>
            <List hawker={hawker}/>
          </Grid>
          <Grid item md={8}>
            <Fade>
              <GoogleMap setHawker={setHawker}/>
            </Fade>
          </Grid>
        </Grid>
      </Container>
      <Footer/>

    </>

  )
}
