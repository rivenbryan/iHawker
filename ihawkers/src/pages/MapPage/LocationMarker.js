/** 
* A component representing a marker on a map that signifies a hawker centre location.
* @param {number} lat - The latitude of the marker location.
* @param {number} lng - The longitude of the marker location.
* @param {function} onClick - The function to be called when the marker is clicked.
* @return {JSX.Element} - The LocationMarker component.
*/

import { Box } from '@mui/material'
import React from 'react'
import RestaurantMenuTwoToneIcon from '@mui/icons-material/RestaurantMenuTwoTone';

export default function LocationMarker({lat, lng, onClick}) {

  return (
    <Box component="div" onClick={onClick} >
        <RestaurantMenuTwoToneIcon color="error" fontSize="small" />
    </Box>
  )
}
