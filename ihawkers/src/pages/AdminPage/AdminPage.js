import React, { useContext } from 'react';
import { HawkerContext } from '../../context/HawkerContext';
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import AdminPageHeader from "./AdminPageHeader";
import HawkerChoose from "./Stores/MangeChoose";

export default function AdminPage() {
    const { hawkerCentres } = useContext(HawkerContext);
    const { hawkerStores } = useContext(HawkerContext);
    // console.log( hawkerCentres );
    return(
        <>
        <Navbar />
        <AdminPageHeader/>
        <HawkerChoose HawkerStores={ hawkerStores }/>
        <Footer />
        </>
    )
}