/** 
* Component for displaying details of a hawker center
* @param {Object} oneHawkerCentre - object containing details of the hawker center
* @param {string} oneHawkerCentre.name_of_centre - name of the hawker center
* @param {string} oneHawkerCentre.img - image url for the hawker center
* @param {string} oneHawkerCentre.location_of_centre - location of the hawker center
* @param {string} oneHawkerCentre.short_description - short description of the hawker center
* @param {string} oneHawkerCentre.long_description - long description of the hawker center
* @param {string} oneHawkerCentre.lat - latitude of the hawker center for Google Maps integration
* @param {string} oneHawkerCentre.long - longitude of the hawker center for Google Maps integration
* @returns {JSX.Element} - Hawker center details component
*/

import React from 'react'
import { Container,Stack, Typography,Box, Button, Modal ,Link, Grid, Fade } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import Divider from '@mui/material/Divider'


export default function HawkerDesc({ oneHawkerCentre }) {
    const [open, setOpen] = React.useState(false);
    /**
    * Function to handle opening of modal
    */
    const handleOpen = () => setOpen(true);
    /**
    * Function to handle closing of modal
    */
    const handleClose = () => setOpen(false);
    return (
    <>
        <Box 
        sx={{ height: "50vh", marginLeft: -1,
            width: "98.93vw",
            objectFit: "cover",
            background: `linear-gradient(to bottom,rgba(0,0,0,0),#FFF 89%),url(${oneHawkerCentre.img})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
        }}/>
    
        <Container maxWidth="lg" sx={{marginTop: -25}}>
        
            <Stack direction="row" spacing={15}>
                
                <Box component="img" 
                alt="Stall front img"
                src= {oneHawkerCentre.img}
                sx={{ height: "450px",
                    width: "400px",
                    objectFit: "cover",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat"
                }}>
                </Box>

                
                <Box sx={{  margin: 0,
                    height: 450,
                    display: "flex",
                    flexDirection: "column", 
                    justifyContent: "center"
                }}>
                    
                    <Typography variant="h2" sx={{fontWeight: 'bold'}}>{oneHawkerCentre.name_of_centre}</Typography>
                    <Grid container direction="row" marginTop={2}>
                        <LocationOnIcon color='primary'/>
                        <Link href={"https://maps.google.com/?q="+oneHawkerCentre.lat+","+oneHawkerCentre.long} variant="body1" color="secondary" marginLeft={2}>
                            {oneHawkerCentre.location_of_centre}
                        </Link>
                    </Grid>
                   
                    <Typography variant="body1" sx={{ marginTop: 4, marginBottom: 4, fontWeight: 'medium'}}>{oneHawkerCentre.short_description}</Typography>
                    <Divider variant="string" width="50%" sx={{background: "#000"}}></Divider>
                    <Button variant="contained" onClick={handleOpen} sx={{marginTop: 4, width: 180}}>Read more</Button>
                    <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    >
                        <Fade in={open}>
                        <Box
                        sx={{position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 400,
                        bgcolor: 'background.paper',
                        border: '2px solid #ffc137',
                        borderRadius: 3, 
                        boxShadow: 24,
                        p: 4,}}>
                           <Typography variant="body1" sx={{ marginTop: 4, marginBottom: 4, fontWeight: 'medium'}}>
                            {oneHawkerCentre.long_description}
                            </Typography>   
                        </Box>  
                        </Fade>
                    </Modal>
                </Box>
                
            </Stack>
    </Container>
    </>
  )
}
