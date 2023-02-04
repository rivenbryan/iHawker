import React, {useEffect, useState} from "react";
import Theme from "./Theme";
import {Route, Routes} from 'react-router-dom'
import {ThemeProvider } from '@mui/material/styles';

// Pages
import LandingPage from "./pages/LandingPage/LandingPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import Register from "./pages/RegisterPage/RegisterPage";
import StallPage from "./pages/StallPage/StallPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import MapPage from "./pages/MapPage/MapPage";


// Context
import { HawkerContext } from "./context/HawkerContext";


export default function App() {

  const [hawkerCentres, setHawkerCentres] = useState(null)
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

      <ThemeProvider theme={Theme}>
        { hawkerCentres &&
        <HawkerContext.Provider value={{hawkerCentres}}>
          <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/stall" element={<StallPage/>}/>
            <Route path="/map" element={<MapPage/>}/>
            <Route path="/search" element={<SearchPage/>}/>
          </Routes>   
        </HawkerContext.Provider>
        }
      </ThemeProvider>
  );
}
