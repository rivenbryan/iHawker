import React from "react";
import Navbar from "./components/Navbar";
import Theme from "./Theme";
import Hero from "./components/Hero";
import {ThemeProvider } from '@mui/material/styles';
export default function App() {
  return (
    <ThemeProvider theme={Theme}>
        <Navbar />
        <Hero/>
    </ThemeProvider>
  );
}
