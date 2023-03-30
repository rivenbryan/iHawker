/**
* StallPage component to display the details of a single hawker store.
* @module StallPage
* @see HawkerContext
* @component
*/

import React, { useContext, useState, useEffect } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import StallDesc from './StallDesc'
import StallMenu from './StallMenu'
import ViewReviews from './ViewRecentReview'
import AddReview from './AddReview'
import { HawkerContext } from '../../context/HawkerContext'
/**
* Represents the StallPage component.
* @function StallPage
* @returns {JSX.Element}
*/
export default function StallPage() {

  const { oneHawkerStore } = useContext(HawkerContext);
  const { hawkerStores } = useContext(HawkerContext);
  const { hawkerCentres } = useContext(HawkerContext);
  const [hawkerLocation, sethawkerLocation] = useState("");
  const [hawkerLat, setHawkerLat] = useState("");
  const [hawkerLong, setHawkerLong] = useState("");
  /**
  * Set the hawker location, latitude and longitude based on the hawker center where the store belongs to.
  * @function useEffect
  * @param {Array} hawkerCentres - Array of all hawker centers.
  * @param {Object} oneHawkerStore - The single hawker store object for which the details are being displayed.
  */
  useEffect(() => {
    if (hawkerCentres && oneHawkerStore) {
      const oneCentre = hawkerCentres.find(
        centre => centre._id === oneHawkerStore.hawker_centre_belong
      )
      sethawkerLocation(oneCentre.location_of_centre);
      setHawkerLat(oneCentre.lat);
      setHawkerLong(oneCentre.long);
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
            hawkerLat = { hawkerLat }
            hawkerLong = { hawkerLong }
          />
          <StallMenu
            oneHawkerStore = { oneHawkerStore } 
          />
          <ViewReviews reviews = {oneHawkerStore.reviews}/>
          <AddReview storeID = {oneHawkerStore._id}/>
          </>
        )}
        
        <Footer/>
    </>
  )
}
