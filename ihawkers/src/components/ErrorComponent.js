import React from 'react'
import { Box, Typography } from '@mui/material'
export default function ErrorComponent({text}) {
  return (
    <Box sx={{paddingBottom: 45}}>
        <Typography sx={{paddingTop: 5, fontWeight: 'bold'}} align="center" variant="h6">{text}</Typography>
    </Box>
  )
}
