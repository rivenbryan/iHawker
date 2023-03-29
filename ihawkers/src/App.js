/**
 * The main component of the app.
 * @return {JSX.Element} The JSX element that represents the main component of the app.
 */

import React, { useEffect, useState } from "react";
import Theme from "./Theme";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
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
import ForgetPasswordPage from "./pages/ForgetPasswordPage/ForgetPasswordPage";
import ForgetPasswordAfterEmail from "./pages/ForgetPasswordPage/ForgetPasswordAfterEmail";
// Context
import { HawkerContext } from "./context/HawkerContext";
import AdminPage from "./pages/AdminPage/AdminPage";
import AddStore from "./pages/AdminPage/AddStores/AddStore";

export default function App() {
  // hawkerCentres state is used for getting ALL hawkercentre from the database //
  const [hawkerCentres, setHawkerCentres] = useState(null);
  // hawkerStoers state is used for getting ALL hawkerstores from the database //
  const [hawkerStores, setHawkerStores] = useState(null);

  // oneHawkerCentre is used for getting ONE hawker centre details from the database //
  // The fetch call is handled in ButtonHawkerCentre.js //
  const [oneHawkerCentre, setOneHawkerCentre] = useState();
  const [oneHawkerStore, setOneHawkerStore] = useState();

  const [reviews, setReviews] = useState();
  useEffect(() => {
    /**
     * Fetches the hawker centers from the database and sets the state with the response.
     * @returns {void} Nothing is returned.
     */

    const fetchhawkerCentres = async () => {
      const response = await fetch("http://localhost:4000/api/hawkercentre/");
      const json = await response.json();
      if (response.ok) {
        setHawkerCentres(json);
      }
    };

     /**
     * Fetches the hawker stores from the database and sets the state with the response.
     * @returns {void} Nothing is returned.
     */
    const fetchStores = async () => {
      const response = await fetch("http://localhost:4000/api/stall/");
      const json = await response.json();
      if (response.ok) {
        setHawkerStores(json);
      }
    };

    /**
     * Fetches the reviews from the database and sets the state with the response.
     * @returns {void} Nothing is returned.
     */
    const fetchReviews = async () => {
      const response = await fetch("http://localhost:4000/api/stall/review/getreviews");
      const json = await response.json();
      if (response.ok){
        setReviews(json)
      }
    }

    fetchhawkerCentres();
    fetchStores();
    fetchReviews();
  }, []);

  return (
    <AuthProvider>
      <ThemeProvider theme={Theme}>
        {hawkerCentres && hawkerStores && (
          <HawkerContext.Provider
            value={{ hawkerCentres, setOneHawkerCentre, oneHawkerCentre, hawkerStores, setOneHawkerStore, oneHawkerStore, reviews}}
          >
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/info" element={<LearnMorePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<Register />} />
              <Route path="/stall/:stallID" element={<StallPage />} />
              <Route path="/map" element={<MapPage />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/hawkerCentre/:hawkerID" element={<HawkerPage />} />
              <Route path="/forgetPassword" element={<ForgetPasswordPage />} />
              <Route path="/forgetPasswordEmail" element={<ForgetPasswordAfterEmail/>} />
              <Route path="/admin" element={<AdminPage />} />
              <Route path="/addStore" element={<AddStore/>} />
            </Routes>
          </HawkerContext.Provider>
        )}
      </ThemeProvider>
    </AuthProvider>
  );
}
