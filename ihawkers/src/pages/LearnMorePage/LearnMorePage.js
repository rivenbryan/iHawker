/**
* LearnMore page component that displays information about iHawker and its values
* @return {JSX.Element} Returns the LearnMore page component
*/
import React from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import CarousellLearnMore from './CarousellLearnMore'
import Content from './Content'
export default function LearnMore() {


  return (
    <>
    <Navbar/>
    <CarousellLearnMore/>
    <Content/>
    <Footer/>
    </>
  )
}
