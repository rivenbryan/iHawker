import React from 'react';
import {Box, Divider, Typography} from '@mui/material'

export default function AdminPageHeader() {
    return(
        <>
        <Box sx={{
            width: "99vw",
            height: 150,
            ml: -1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",   
            background: `linear-gradient(
                to bottom,
                rgba(0,0,0,0),
                #FFF 89%
                ),
                #FFA96A`,
        }}>
        <Typography variant="h3" align="center">
            Manage Stores</Typography>

        </Box>
        
        <Divider variant='' color="gray" sx={{
            marginLeft:"25%", mr:"25%"
        }}/>
        </>
    )
}