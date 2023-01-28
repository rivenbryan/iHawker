import { Container } from '@mui/material'
import React from 'react'
import LocationMarker from './LocationMarker'
import GoogleMapReact from 'google-map-react';
export default function GoogleMap({}) {
  const coordinates = { lat:0, lng:0}
  return (
    <Container style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDwUWvu7V2Bxvh2ilexzV13XXpLstfIRow" }}
          defaultCenter={coordinates}
          center={coordinates}
          defaultZoom={14}
          options={""}
          onChange={""}
          onChildClick={""}
      >
      </GoogleMapReact>

    </Container>
    
  )
}
