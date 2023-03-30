/**
 * A header component for the admin page to manage stalls.
 * 
 * @return {JSX.Element} Header component for the admin page.
 */

import React from 'react';
import {Box, Divider, Typography} from '@mui/material'

export default function AdminPageHeader() {
    return(
        <>
        <Box sx={{
            width: "98.93vw",
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
            Manage Stalls</Typography>

        </Box>
        
        <Divider variant='' color="gray" sx={{
            marginLeft:"25%", mr:"25%"
        }}/>
        </>
    )
}