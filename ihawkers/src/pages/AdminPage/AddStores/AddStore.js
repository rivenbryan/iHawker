import React from 'react';
import Footer from '../../../components/Footer';
import Navbar from '../../../components/Navbar';
import AddStoreForm from './AddStoreForm';
import AddStoreHeader from './AddStoreHeader';

export default function AddStore() {
    return(
        <>
        <Navbar/>
        <AddStoreHeader/>
        <AddStoreForm />
        <Footer/>
        </>
    )
}