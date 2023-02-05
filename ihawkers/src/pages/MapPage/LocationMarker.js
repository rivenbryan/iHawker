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
