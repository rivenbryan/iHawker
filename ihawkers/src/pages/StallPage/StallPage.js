import React, { useContext, useState, useEffect } from 'react'
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
  const { hawkerCentres } = useContext(HawkerContext);
  const [hawkerLocation, sethawkerLocation] = useState("");
  var imgPlaceholder = "https://i.imgur.com/JOf48jt.jpeg"

  useEffect(() => {
    if (hawkerCentres && oneHawkerStore) {
      const oneCentre = hawkerCentres.find(
        centre => centre._id === oneHawkerStore.hawker_centre_belong
      )
      sethawkerLocation(oneCentre.location_of_centre);
    }
  }, [hawkerCentres, oneHawkerStore]);

  
  return (
    <>
        <Navbar/>
        {oneHawkerStore && hawkerStores && (
          <>
          <StallDesc 
            oneHawkerStore = { oneHawkerStore } 
            hawkerLocation = { hawkerLocation }
          />
          <StallMenu
            oneHawkerStore = { oneHawkerStore } 
            imgPlaceholder = { imgPlaceholder } 
          />
          <ViewReviews reviews = {oneHawkerStore.reviews}/>
          <AddReview storeID = {oneHawkerStore._id}/>
          </>
        )}
        
        <Footer/>
    </>
  )
}
