import React from 'react'
import { useState } from 'react'
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select, Input } from '@mui/material'
import PlaceDetails from './PlaceDetails'
export default function List() {
    const [hawkers, setHawkers] = useState([])


    const places = [
        { name: 'Tiong Bahru Plaza'},
        { name: 'Yishun Market'},
        { name: 'Red Hill market'},
        { name: 'Tiong Bahru Plaza'},
        { name: 'Yishun Market'},
        { name: 'Red Hill market'},
    ]
  return (
    <>
    <Typography variant="h6">Hawker Centres around you</Typography>
    <Grid container spacing={2}>
        {places?.map( (place, i) => (
            <Grid item key={i} xs={12}>
                <PlaceDetails place={place}/>
            </Grid>
        ))}
    </Grid>
    </>
  )
}
