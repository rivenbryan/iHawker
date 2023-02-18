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
