import React, { useContext, useEffect, useState } from 'react';
import { HawkerContext } from '../../context/HawkerContext';
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import AdminPageHeader from "./AdminPageHeader";
import HawkerChoose from "./Stores/MangeChoose";
import { useAuth } from '../../context/userAuthContext';

export default function AdminPage() {
    const { getUser } = useAuth();
    const { user } = getUser();
    const { hawkerCentres } = useContext(HawkerContext);
    const { hawkerStores } = useContext(HawkerContext);

    const [ filteredStoreList, setFilteredStoreList ] = useState([]);
    useEffect(() => {
      if (hawkerStores) {
        const filteredList = hawkerStores.filter(
          stores => stores.stall_belong === user.id);
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