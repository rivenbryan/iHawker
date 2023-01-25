import React from 'react'
import { Typography, Box } from "@mui/material"
import OutdoorGrillIcon from '@mui/icons-material/OutdoorGrill';
import SetMealIcon from '@mui/icons-material/SetMeal';
export default function SearchCategory() {

    var catItems = [
        {
            name: "BBQ", 
            icon: <OutdoorGrillIcon/>
        },
        {
            name: "Seafood",
            icon: <SetMealIcon/>
        },
        {
            name: "Chinese", 
            icon: <OutdoorGrillIcon/>
        },
        {
            name: "Malay",
            icon: <SetMealIcon/>
        },
        {
            name: "Drinks", 
            icon: <OutdoorGrillIcon/>
        },
        {
            name: "Western",
            icon: <SetMealIcon/>
        },
        {
            name: "Chinese", 
            icon: <OutdoorGrillIcon/>
        },
        {
            name: "Malay",
            icon: <SetMealIcon/>
        },
        {
            name: "Drinks", 
            icon: <OutdoorGrillIcon/>
        },
        {
            name: "Western",
            icon: <SetMealIcon/>
        },
        {
            name: "Western",
            icon: <SetMealIcon/>
        },
       
    ]

  return (
    <>
    <Typography variant="h5" sx={{fontWeight: 'medium', marginBottom: 2, marginTop: 3}}>Top Categories</Typography>
    <Box sx={{display: "flex", columnGap: 5}}>
        {catItems.map( (item) => 
        <Box>
            {item.icon}
            <Typography variant="h7" sx={{fontWeight: 'light'}}>{item.name}</Typography>
        </Box>
        )}
    </Box>
    </>

  )
}
