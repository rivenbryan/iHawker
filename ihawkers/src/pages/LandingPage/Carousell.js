import React, {useContext} from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Container, Typography, Box } from "@mui/material";
import { HawkerContext } from "../../context/HawkerContext";
import { Link } from "react-router-dom";
import ButtonHawkerCentre from "../../components/ButtonHawkerCentre";
export default function Carousell() {
  const {hawkerCentres} = useContext(HawkerContext)

  return (
    <>
      <Container sx={{ paddingTop: 5 }}>
        <Typography variant="h4" sx={{fontWeight: 'medium', marginBottom: 1}}>Top Hawker Centers</Typography>
        <Carousel>
          {hawkerCentres && hawkerCentres.slice(0,5).map( (centre)=> (
             <Paper key={centre.id} elevation={5} sx={{padding: 2}}>
             <img src={centre.img} alt={centre.name_of_centre} style={{width: "100%", height: 500}}/>
             <Typography sx={{paddingBottom: 1}}variant="h5">{centre.name_of_centre}</Typography>
             <Box sx={{width: "75%", mb: 3}}>
                <Typography sx={{paddingBottom: 1}} variant="subtitle2">{centre.short_description}</Typography>
                <Typography variant="subtitle2">Location: {centre.location_of_centre}</Typography>
             </Box>
             <Link style={{textDecoration: 'none'}} to={"/hawkerCentre/" + centre._id} >
                <ButtonHawkerCentre variant="outlined" title="Check it out!" centreID = {centre._id}/>
             </Link>
             
           </Paper>
          ))}
        </Carousel>
      </Container>
    </>
  );
}
