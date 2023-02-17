import Navbar from '../../components/Navbar'
import Hero from './Hero'
import Search from './Search'
import Carousell from './Carousell'
import Footer from '../../components/Footer'
import React from "react";
import Fade from 'react-reveal/Fade';
import ReviewCarousell from './ReviewCarousell'
import Chatbot from './Chatbot'
export default function LandingPage() {
  return (
    <>
      <Chatbot/>
      <Navbar />
      <Fade bottom>
        <Hero />
        <Search />
        <ReviewCarousell />
        <Carousell />
      </Fade>
      <Footer />
    </>
  )
}
