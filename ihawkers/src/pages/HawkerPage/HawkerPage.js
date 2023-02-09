import React from 'react'
import { useContext } from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import { HawkerContext } from '../../context/HawkerContext'
import HawkerDesc from './HawkerDesc'
import HawkerStalls from './HawkerStalls'


export default function HawkerPage() {
  const {oneHawkerCentre} = useContext(HawkerContext) 
  console.log(oneHawkerCentre)
  return (
   <>
   <Navbar/>
   <HawkerDesc oneHawkerCentre={oneHawkerCentre}/>
   <HawkerStalls/>
   <Footer/>
   </>
  )
}
