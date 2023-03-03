import React, { useContext } from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Container, Typography, Box, Rating, Stack} from "@mui/material";

import { Link } from "react-router-dom";
import ButtonHawkerCentre from "../../components/ButtonHawkerCentre";
import ButtonHawkerStore from "../../components/ButtonHawkerStore";
export default function Carousell({ title, data, idName }) {
  return (
    <>
      <Container sx={{ paddingTop: 5 }}>
        <Typography variant="h4" sx={{ fontWeight: 'medium', marginBottom: 1 }}>{title}</Typography>
        {idName === 'hawkerCentre' ?
          <Carousel>
            {data && data.slice(0, 5).map((centre) => (
              <Paper key={centre.id} elevation={5} sx={{ padding: 2 }}>
                <img src={centre.img} alt={centre.name_of_centre} style={{ width: "100%", height: 500 }} />
                <Typography sx={{ paddingBottom: 1 }} variant="h5">{centre.name_of_centre}</Typography>
                <Box sx={{ width: "75%", mb: 3 }}>
                  <Typography sx={{ paddingBottom: 1 }} variant="subtitle2">{centre.short_description}</Typography>
                  <Typography variant="subtitle2">Location: {centre.location_of_centre}</Typography>
                </Box>
                <Link style={{ textDecoration: 'none' }} to={"/hawkerCentre/" + centre._id} >
                  <ButtonHawkerCentre variant="outlined" title="Check it out!" centreID={centre._id} />
                </Link>
              </Paper>
            ))}
          </Carousel> : 
          
          <Carousel>
            {data && data.map((review) => (
              <Paper key={review._id} elevation={5} sx={{ padding: 2 }}>
                <img src={review.image.url} alt={review._id} style={{ width: "100%",height: 500  }} />
                <Typography sx={{ paddingBottom: 1 }} variant="h5">{review.stall_name}</Typography>
                <Box sx={{ width: "75%", mb: 3 }}>
                  <Typography sx={{ paddingBottom: 1 }} variant="subtitle2">{review.description}</Typography>
                  <Stack direction="row" spacing={1}>
                  <Typography variant="subtitle2" sx={{fontWeight: 'bold'}}> {review.avg_rating} stars </Typography>
                    <Rating name="read-only" value={review.avg_rating} precision={0.5} readOnly />
                  </Stack>
                 
                </Box>
                <Link style={{ textDecoration: 'none' }} to={"/stall/" + review._id} >
                  <ButtonHawkerStore variant="outlined" title="Check it out!" centreID={review._id} />
                </Link>
              </Paper>
            ))}
          </Carousel>}

      </Container>
    </>
  );
}
