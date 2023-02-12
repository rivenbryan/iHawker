import React, {useEffect, useState} from "react";
import Theme from "./Theme";
import {Route, Routes} from 'react-router-dom'
import {ThemeProvider } from '@mui/material/styles';
import { AuthProvider } from "./context/userAuthContext";

// Pages
import LandingPage from "./pages/LandingPage/LandingPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import Register from "./pages/RegisterPage/RegisterPage";
import StallPage from "./pages/StallPage/StallPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import MapPage from "./pages/MapPage/MapPage";
import HawkerPage from "./pages/HawkerPage/HawkerPage";
import LearnMorePage from "./pages/LearnMorePage/LearnMorePage";

// Context
import { HawkerContext } from "./context/HawkerContext";


export default function App() {
  // hawkerCentres state is used for getting ALL hawkercentre from the database //
  const [hawkerCentres, setHawkerCentres] = useState(null)

  // oneHawkerCentre is used for getting ONE hawker centre details from the database //
  // The fetch call is handled in ButtonHawkerCentre.js //
  const [oneHawkerCentre, setOneHawkerCentre] = useState()
  useEffect( ()=> {
    const fetchhawkerCentres = async () => {
      const response = await fetch('http://localhost:4000/api/hawkercentre/')
      const json = await response.json()
      if(response.ok){
        setHawkerCentres(json)
      }
    } 
    fetchhawkerCentres()
  },[])

  return (
      <AuthProvider>
        <ThemeProvider theme={Theme}>
          { hawkerCentres &&
          <HawkerContext.Provider value={{hawkerCentres, setOneHawkerCentre, oneHawkerCentre}}>
            <Routes>
              <Route path="/" element={<LandingPage/>}/>
              <Route path="/info" element={<LearnMorePage/>}/>
              <Route path="/login" element={<LoginPage/>}/>
              <Route path="/register" element={<Register/>}/>
              <Route path="/stall" element={<StallPage/>}/>
              <Route path="/map" element={<MapPage/>}/>
              <Route path="/search" element={<SearchPage/>}/>
              <Route path="/hawkerCentre/:hawkerID" element={<HawkerPage />} />
            </Routes>   
          </HawkerContext.Provider>
          }
        </ThemeProvider>
      </AuthProvider>

  );
}
