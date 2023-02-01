import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import StallDesc from './StallDesc'
import StallMenu from './StallMenu'
import ViewReviews from './ViewRecentReview'
import AddReview from './AddReview'

export default function StallPage() {
  return (
    <>
        <Navbar/>
        <StallDesc/>
        <StallMenu/>
        <ViewReviews/>
        <AddReview/>
        <Footer/>
    </>
  )
}
