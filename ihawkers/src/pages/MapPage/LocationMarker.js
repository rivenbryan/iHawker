import { Box } from '@mui/material'
import React from 'react'
import AddLocationIcon from '@mui/icons-material/AddLocation';

export default function LocationMarker({lat, lng, onClick}) {
  return (
    <Box component="div" onClick={onClick}>
        <AddLocationIcon/>
    </Box>
  )
}
