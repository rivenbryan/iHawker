import React from 'react'
import { Container,Stack, Typography,Box, Button, Rating ,Link, Grid} from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Divider from '@mui/material/Divider';

export default function StallDesc(props) {
    console.log("stalldesc")
    console.log(props)
  return (
    <Box sx={{ width: "100%", margin: "0 auto" }}>
    <Box 
        sx={{ height: "50vh",
            width: "99vw",
            ml: -1,
            objectFit: "cover",
            background: `linear-gradient(
                to bottom,
                rgba(0,0,0,0),
                #FFF 89%
                ),
                url(${props.imgPlaceholder})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
        }}></Box>
    


    <Container maxWidth="lg" sx={{marginTop: -25}}>
        
            <Stack direction="row" spacing={15} sx={{display: 'flex', alignItems: 'center'}}>
                
                
                <Box component="img" 
                alt="Store front img"
                src={props.imgPlaceholder}
                sx={{ height: "500px",
                    width: "400px",
                    objectFit: "cover",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat"
                }}>
                </Box>

                
                <Box sx={{marginTop: 10, alignItems: 'center'}}>
                    <Typography variant="h2" sx={{fontWeight: 'bold'}}>
                        { props.oneHawkerStore.stall_name }
                    </Typography>

                    <Grid container direction="row" marginTop={2}>
                        <Rating name="read-only" value={props.oneHawkerStore.avg_rating} precision={0.5} readOnly />
                        <Typography variant="h6" sx={{ marginLeft: 2, fontWeight: 'bold'}}>
                            {props.oneHawkerStore.avg_rating} stars 
                        </Typography>
                    </Grid>

                    <Grid container direction="row" marginTop={-0.5}>
                        <LocationOnIcon color='primary'/>
                        <Link href="#" variant="body1" color="secondary" marginLeft={2}>
                            {props.hawkerLocation}
                        </Link>
                    </Grid>
                   
                    <Typography variant="body1" sx={{ marginTop: 4, marginBottom: 4, fontWeight: 'medium'}}>
                        { props.oneHawkerStore.description }
                    </Typography>
                    <Divider variant="string" width="50%" sx={{background: "#000"}}></Divider>
                    <Button variant="contained" sx={{marginTop: 4}}>idk button for what</Button>
                </Box>
                
            </Stack>
        {/* </Box> */}
    </Container></Box>
  )
}
