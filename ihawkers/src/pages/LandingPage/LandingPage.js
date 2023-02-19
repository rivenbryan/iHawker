import Navbar from '../../components/Navbar'
import Hero from './Hero'
import Search from './Search'
import Carousell from './Carousell'
import Footer from '../../components/Footer'
import React from "react";
import Fade from 'react-reveal/Fade';
export default function LandingPage() {
  

  return (
    <>
        <Navbar />
        <Fade bottom>
          <Hero/>
          <Search/>
          <Carousell/>
        </Fade>
        <Footer/>
    </>
  )
}
