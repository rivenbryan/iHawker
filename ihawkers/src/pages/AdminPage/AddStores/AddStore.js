/**
* Renders the Add Store page, which includes the navbar, the AddStoreHeader component,
* the AddStoreForm component, and the Footer component.
* @returns {JSX.Element} The Add Store page
*/

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