import React, { useContext } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import StallDesc from './StallDesc'
import StallMenu from './StallMenu'
import ViewReviews from './ViewRecentReview'
import AddReview from './AddReview'
import { HawkerContext } from '../../context/HawkerContext'

export default function StallPage() {

  const { oneHawkerStall } = useContext(HawkerContext);
  const { hawkerStores } = useContext(HawkerContext);

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
