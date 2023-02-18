import React, { useContext } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import StallDesc from './StallDesc'
import StallMenu from './StallMenu'
import ViewReviews from './ViewRecentReview'
import AddReview from './AddReview'
import { HawkerContext } from '../../context/HawkerContext'

export default function StallPage() {

  const { oneHawkerStore } = useContext(HawkerContext);
  const { hawkerStores } = useContext(HawkerContext);
  var imgPlaceholder = "https://i.imgur.com/JOf48jt.jpeg"

  return (
    <>
        <Navbar/>
        {oneHawkerStore && hawkerStores && (
          <>
          <StallDesc 
            oneHawkerStore = { oneHawkerStore } 
            imgPlaceholder = { imgPlaceholder } 
            // oneHawkerCentre = {}
          />
          <StallMenu
            oneHawkerStore = { oneHawkerStore } 
            imgPlaceholder = { imgPlaceholder } 
          />
          <ViewReviews/>
          <AddReview/>
          </>
        )}
        
        <Footer/>
    </>
  )
}
