import React from "react";
import Theme from "./Theme";
import LandingPage from "./pages/LandingPage/LandingPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import Register from "./pages/RegisterPage/RegisterPage";
import StallPage from "./pages/StallPage/StallPage";
import {Route, Routes} from 'react-router-dom'
import {ThemeProvider } from '@mui/material/styles';
import MapPage from "./pages/MapPage/MapPage";

export default function App() {
  return (

      <ThemeProvider theme={Theme}>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/stall" element={<StallPage/>}/>
          <Route path="/map" element={<MapPage/>}/>
        </Routes>   
      </ThemeProvider>
  );
}
