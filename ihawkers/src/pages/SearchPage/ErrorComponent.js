import React from 'react'
import { Box, Typography } from '@mui/material'
export default function ErrorComponent() {
  return (
    <Box sx={{paddingBottom: 45}}>
        <Typography sx={{paddingTop: 10, fontWeight: 'bold'}} align="center" variant="h6">No options available. Try another option!</Typography>
    </Box>
  )
}
