import { Container } from '@mui/material'
import React, { useState, useContext} from 'react'
import LocationMarker from './LocationMarker'
import GoogleMapReact from 'google-map-react';
import GetCurrentLocation from './GetCurrentLocation';
import { HawkerContext } from '../../context/HawkerContext'
// 1. Get current location (done)
// 2. Create markers for each hawker centres
// 3. Calculate distance between them

export default function GoogleMap({setHawker}) {
  const {hawkerCentres} = useContext(HawkerContext)
  const [center, setCenter] = useState({
    lat:  1.342792,
    lng: 103.682346
  })


  const defaultProps = {
    center: {
      lat:  1.342792,
      lng: 103.682346
    },
    zoom: 15
  };

  return (
    <Container style={{ height: '60vh', width: '100%' }}>
      <GetCurrentLocation setCenter={setCenter}/>
      <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBGOVtZHM9WFeAe19bk18zWsFxGRRpRkQI" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          center={center}
      >
        {hawkerCentres.map( (hawkerCentre)=>(
            <LocationMarker onClick={()=> setHawker(hawkerCentre)} lat={hawkerCentre.lat} lng={hawkerCentre.long}/>
        ))}
       
      </GoogleMapReact>
   
    </Container>
    
  )
}
