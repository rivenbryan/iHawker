import { Container } from '@mui/material'
import React, { useState } from 'react'
import LocationMarker from './LocationMarker'
import GoogleMapReact from 'google-map-react';
import GetCurrentLocation from './GetCurrentLocation';
// 1. Get current location
// 2. Create markers for each hawker centres
// 3. Calculate distance between them

export default function GoogleMap() {
  const [center, setCenter] = useState({lat: 0, lng: 0})
  const defaultProps = {
    center: {
      lat: 1.33291,
      lng: 103.84715
    },
    zoom: 15
  };

  return (
    <Container style={{ height: '100vh', width: '100%' }}>
      <GetCurrentLocation setCenter={setCenter}/>
      <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDwUWvu7V2Bxvh2ilexzV13XXpLstfIRow" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          center={center}
      >
        <LocationMarker lat = '1.44608' lng="103.82983 "/>
      </GoogleMapReact>

    </Container>
    
  )
}
