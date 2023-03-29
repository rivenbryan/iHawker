/**
 * React component that displays the landing page.
 *
 * @component
 * @returns {JSX.Element} The React component.
 */
import Navbar from '../../components/Navbar';
import Hero from './Hero';
import Search from './Search';
import Carousell from './Carousell';
import Footer from '../../components/Footer';
import Fade from 'react-reveal/Fade';
import Chatbot from './Chatbot';
import React, { useContext } from "react";
import { HawkerContext } from "../../context/HawkerContext";

export default function LandingPage() {
  const { hawkerCentres, reviews } = useContext(HawkerContext);

  return (
    <>
      <Navbar />
      <Chatbot />
      <Hero />
      <Search />
      <Carousell title="Top Hawker Stalls" data={reviews} idName="reviews" />
      <Carousell title="Top Hawker Centers" data={hawkerCentres} idName="hawkerCentre" />
      <Footer />
    </>
  );
}
