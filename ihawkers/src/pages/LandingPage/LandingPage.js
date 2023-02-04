import Navbar from '../../components/Navbar'
import Hero from './Hero'
import Search from './Search'
import Carousell from './Carousell'
import Footer from '../../components/Footer'
import React from "react";
export default function LandingPage() {
  

  return (
    <>
        <Navbar />
        <Hero/>
        <Search/>
        <Carousell/>
        <Footer/>
    </>
  )
}
