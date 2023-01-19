import React from "react";
import Navbar from "./components/Navbar";
import Theme from "./Theme";
import Hero from "./pages/LandingPage/Hero";
import Search from "./pages/LandingPage/Search";
import {ThemeProvider } from '@mui/material/styles';
export default function App() {
  return (
    <ThemeProvider theme={Theme}>
        <Navbar />
        <Hero/>
        <Search/>
    </ThemeProvider>
  );
}
