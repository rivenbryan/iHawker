import React from 'react'
import { Container, Typography,Box, Grid, Divider} from '@mui/material'
import StallsCardComponent from './StallsCardComponent'

export default function HawkerStalls({ oneHawkerStallList }) {
    return(
        <Container sx={{marginTop: 4}}>
            <Typography variant='h4' sx={{fontWeight: 'bold'}}>
                Our Stalls
            </Typography>  
            
            <Box>
                <Grid sx={{pt: 5}}container spacing={5}>
                    {oneHawkerStallList && oneHawkerStallList.map((item) =>
                <Grid item xs={4}>
                    <StallsCardComponent id={item._id}img={item.img} short_description={item.short_description} name_of_centre={item.name_of_centre} />
                </Grid>
                )}

                </Grid>
            </Box>
        </Container>

      
    )
}