import React, { useContext, useEffect, useState } from 'react';
import { HawkerContext } from '../../context/HawkerContext';
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import AdminPageHeader from "./AdminPageHeader";
import HawkerChoose from "./Stores/MangeChoose";

export default function AdminPage() {
    const { hawkerCentres } = useContext(HawkerContext);
    const { hawkerStores } = useContext(HawkerContext);

    const [ filteredStoreList, setFilteredStoreList ] = useState([]);
    useEffect(() => {
      if (hawkerStores) {
        const filteredList = hawkerStores.filter(
          stores => stores.stall_belong === "63e84f77230d072070623600");
        setFilteredStoreList(filteredList);
      }
    }, hawkerStores);
    // console.log( hawkerCentres );
    return(
        <>
        <Navbar />
        <AdminPageHeader/>
        <HawkerChoose HawkerStores={ filteredStoreList }/>
        <Footer />
        </>
    )
}