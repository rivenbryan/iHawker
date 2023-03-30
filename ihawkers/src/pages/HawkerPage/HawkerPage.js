/** 
* React component that displays a Hawker Centre's description and its stalls.
* @returns {JSX.Element} HawkerPage component
*/

import React, { useState, useEffect } from 'react'
import { useContext } from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import { HawkerContext } from '../../context/HawkerContext'
import HawkerDesc from './HawkerDesc'
import HawkerStalls from './HawkerStalls'


export default function HawkerPage() {
  const {oneHawkerCentre} = useContext(HawkerContext);
  const { hawkerStores } = useContext(HawkerContext);
  const [ filteredStoreList, setFilteredStoreList ] = useState([]);
  /**
  * Filters the list of hawker stores to only include stores belonging to the displayed hawker centre.
  */
  useEffect(() => {
    if (oneHawkerCentre && hawkerStores) {
      const filteredList = hawkerStores.filter(
        store => store.hawker_centre_belong === oneHawkerCentre._id);
      setFilteredStoreList(filteredList);
    }
  }, [oneHawkerCentre, hawkerStores]);
  console.log("filtering store list")
  console.log(filteredStoreList)
  return (
    <>
    <Navbar/>
    {oneHawkerCentre && hawkerStores && (
    <>
      <HawkerDesc oneHawkerCentre={oneHawkerCentre}/>
      <HawkerStalls hawkerStores = {filteredStoreList}/>
    </>
    )}
    <Footer/>
   </>
  )
}
