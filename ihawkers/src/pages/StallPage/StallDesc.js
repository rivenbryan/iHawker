/**
 * A component that displays the details of a hawker store, including its name, rating, location, image, and description.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.oneHawkerStore - The details of the hawker store to display.
 * @param {string} props.hawkerLocation - The location of the hawker store.
 * @param {number} props.hawkerLat - The latitude of the hawker store location.
 * @param {number} props.hawkerLong - The longitude of the hawker store location.
 * @returns {JSX.Element} The JSX element that displays the hawker store details.
 */

import React from 'react'
import { Container,Stack, Typography,Box, Button, Rating ,Link, Grid} from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Divider from '@mui/material/Divider';

export default function StallDesc({oneHawkerStore, hawkerLocation, hawkerLat, hawkerLong}) {
    return (
    <Box sx={{ width: "100%", margin: "0 auto" }}>
        <Box 
        sx={{ height: "50vh",
            width: "98.93vw",
            ml: -1,
            objectFit: "cover",
            background: `linear-gradient(
                to bottom,
                rgba(0,0,0,0),
                #FFF 89%
                ),
                url(${oneHawkerStore.image.url})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
        }}/>
    
        <Container maxWidth="lg" sx={{marginTop: -25}}>
            <Stack direction="row" spacing={15} sx={{display: 'flex', alignItems: 'center'}}>
                <Box component="img" 
                alt="Store front img"
                src={oneHawkerStore.image.url}
                sx={{ height: "500px",
                    width: "400px",
                    objectFit: "cover",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat"
                }}/>

                <Box sx={{marginTop: 10, alignItems: 'center'}}>
                    <Typography variant="h2" sx={{fontWeight: 'bold'}}>
                        { oneHawkerStore.stall_name }
                    </Typography>

                    <Grid container direction="row" marginTop={2}>
                        <Rating name="read-only" value={oneHawkerStore.avg_rating} precision={0.5} readOnly />
                        { oneHawkerStore.reviews.length > 0 ? (
                            <Typography variant="h6" sx={{ marginLeft: 2, fontWeight: 'bold'}}>
                                {oneHawkerStore.avg_rating} stars 
                            </Typography>
                        ) : (
                            <Typography variant="body1" sx={{ ml: 2, mb: 1, fontWeight: 'normal'}}>
                                No Reviews
                            </Typography>                            
                        )} 
                    </Grid>

                    <Grid container direction="row" marginTop={-0.5}>
                        <LocationOnIcon color='primary'/>
                        <Link href={"https://maps.google.com/?q="+hawkerLat+","+hawkerLong} variant="body1" color="secondary" marginLeft={2}>
                            {hawkerLocation}
                        </Link>
                    </Grid>
                   
                    <Typography variant="body1" sx={{ marginTop: 4, marginBottom: 4, fontWeight: 'medium'}}>
                        { oneHawkerStore.description }
                    </Typography>
                    <Divider variant="string" width="50%" sx={{background: "#000"}}/>
                </Box> 
            </Stack>
        </Container>
    </Box>
  )
}
