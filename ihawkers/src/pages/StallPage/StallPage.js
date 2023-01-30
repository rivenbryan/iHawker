import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import StallDesc from './StallDesc'
import StallMenu from './StallMenu'

export default function StallPage() {
  return (
    <>
        <Navbar />
        <StallDesc/>
        <StallMenu/>
        <Footer/>
    </>
  )
}
