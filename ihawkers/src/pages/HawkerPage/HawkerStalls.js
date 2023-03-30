/**
* HawkerStalls component displays a list of hawker stalls in a given hawker centre.
* @param {Array} hawkerStores - An array of hawker stalls belonging to a particular hawker centre
* @returns A React component that displays the hawker stalls in a grid format
*/

import React from 'react'
import { Container, Typography,Box, Grid} from '@mui/material'
import StallsCardComponent from './StallsCardComponent'

export default function HawkerStalls({ hawkerStores }) {
    return(
        <Container sx={{marginTop: 4}}>
            <Typography variant='h4' sx={{fontWeight: 'bold'}}>
                Our Stalls 
            </Typography>  
            { hawkerStores.length > 0 ? (
                <Box>
                    <Grid sx={{pt: 5}}container spacing={5}>
                        {hawkerStores && hawkerStores.map((item) =>
                    <Grid item xs={4}>
                        <StallsCardComponent 
                            id={item._id} 
                            img={item.image.url} 
                            description={item.description} 
                            name_of_centre={item.stall_name} 
                            avg_rating={item.avg_rating}
                        />
                    </Grid>
                    )}

                    </Grid>
                </Box>
            ) : (
                <Typography variant='body1' color="gray" align='left' sx={{marginTop: 2, fontWeight: 'medium'}}>
                No hawker stalls here currently leh...
                </Typography> 
            )}
            
        </Container>

      
    )
}