import React from 'react'
import { Container,Stack, Typography,Box, Button, Rating ,Link, Grid} from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import storeFrontImg from './storefront.jpg'

export default function Hero() {
  return (
    <>
    <Box 
                sx={{ height: "50vh",
                    width: "100vw",
                    objectFit: "cover",
                    backgroundImage: `url(${storeFrontImg})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    background: ''
                }}></Box>
    


    <Container maxWidth="lg" sx={{marginTop: 20}}>
        
            <Stack direction="row" spacing={15}>
                
                
                <Box component="img" 
                alt="Store front img"
                src={storeFrontImg}
                sx={{ height: "500px",
                    width: "400px",
                    objectFit: "cover",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat"
                }}>
                </Box>

                
                <Box sx={{marginTop: 10}}>
                    <Typography variant="h2" sx={{fontWeight: 'bold'}}>Depot Road Zhen Shan Mei Claypot Laksa</Typography>
                    <Grid container direction="row" marginTop={2}>
                    <Rating name="read-only" value={4.5} precision={0.5} readOnly />
                    <Typography variant="h6" sx={{ marginLeft: 2, fontWeight: 'bold'}}>4.5/5 stars </Typography>
                    </Grid>
                    <Grid container direction="row" marginTop={-0.5}>
                        <LocationOnIcon color='primary'/>
                        <Link href="#" variant="body1" color="secondary" marginLeft={2}>
                            Alexander Hawker Centre (#01-31)
                        </Link>
                    </Grid>
                    <Typography variant="body1" sx={{ marginTop: 4, fontWeight: 'medium'}}>This stall originated from the Depot Road Zhen Shan Mei Claypot Laksa near CMPB, and word has it that the old couple sold their recipe to its present owners. It is currently helmed by a 30-something Zhang Ji Lin.</Typography>
                    <Button variant="contained" sx={{marginTop: 7}}>Read more</Button>
                </Box>
                
            </Stack>
        {/* </Box> */}
    </Container></>
  )
}
