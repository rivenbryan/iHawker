/**
 * React component that renders a search page with a search bar, a button to switch between hawker centres and stalls, and a grid of result cards.
 *
 * @returns {JSX.Element} SearchPage component.
 */

import React, { useState, useContext } from "react";
import Navbar from "../../components/Navbar";
import Searchbar from "./Searchbar";
import Content from "./Content";
import ErrorComponent from "../../components/ErrorComponent";
import { Container, Box, Button, Stack } from "@mui/material";
import { HawkerContext } from "../../context/HawkerContext";
import Footer from "../../components/Footer";
export default function SearchPage() {
  const { hawkerCentres } = useContext(HawkerContext);
  const { hawkerStores } = useContext(HawkerContext);
  const [hawkerList, sethawkerList] = useState(hawkerCentres);
  const [storeList, setStoreList] = useState(hawkerStores);
  const [disabled, isDisabled] = useState(true);
  const [isHawkerCentre, setIsHawkerCentre] = useState(true);
  const [searchFilter, setSearchFilter] = useState("");
  const [errorMessage, setErrorMessage] = useState();

  /**
   * Filter the list of hawker centres or hawker stalls based on the search query.
   * @param {Object} event - Event object.
   */
  const filterBySearch = (event) => {
    // Access input value
    const query = event.target.value;
    // Update searchFilter
    setSearchFilter(query);
    if (isHawkerCentre) {
      var updatedList = [...hawkerCentres];
      updatedList = updatedList.filter((item) => {
        return (
          item.name_of_centre.toLowerCase().indexOf(query.toLowerCase()) !== -1
        );
      });
      sethawkerList(updatedList);
    } else {
      var updatedList = [...hawkerStores];
      updatedList = updatedList.filter((item) => {
        return (
          item.stall_name.toLowerCase().indexOf(query.toLowerCase()) !== -1
        );
      });
      setStoreList(updatedList);
    }
    if (updatedList.length == 0) {
      setErrorMessage("No entry found! Please try different values!");
    } else {
      setErrorMessage();
    }
  };

  /**
   * Switches the disabled state and the list state between hawker centres and hawker stalls.
   */
  const switchButtonState = () => {
    isDisabled((prevValue) => !prevValue);
    setIsHawkerCentre((prevValue) => !prevValue);

    // Reset values //
    setSearchFilter("");
    sethawkerList(hawkerCentres);
    setStoreList(hawkerStores);
    setErrorMessage();
  };

  return (
    <>
      <Navbar />
      <Container>
        <Box sx={{ mt: 15, mb: 5 }}>
          <Searchbar
            value={searchFilter}
            filterBySearch={filterBySearch}
            size="medium"
          />
        </Box>
        <Stack direction="row" justifyContent="center" spacing={10}>
          <Button
            variant="contained"
            disabled={disabled}
            onClick={switchButtonState}
          >
            HAWKER CENTRE
          </Button>
          <Button
            variant="contained"
            disabled={!disabled}
            onClick={switchButtonState}
          >
            HAWKER STALL
          </Button>
        </Stack>
        {errorMessage && <ErrorComponent text="No options available. Try another option!"/>}
        {isHawkerCentre ? (
          <Content list={hawkerList} name={"hawkerList"} />
        ) : (
          <Content list={storeList} name={"storeList"} />
        )}
      </Container>
      <Footer />
    </>
  );
}
