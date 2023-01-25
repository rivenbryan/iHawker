import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Container, Typography } from "@mui/material";

export default function Carousell() {
  var items = [
    {
      id: 1,
      name: "Tiong Bahru Plaza",
      description: "Tiong Bahru Plaza is a shopping mall located in Tiong Bahru Estate, in Bukit Merah, Singapore, near Tiong Bahru Road",
      img: '/img/carousell/tiongBahru.jpg'
    },
    {
      id: 2,
      name: "Bukit Batok Street 11 Food",
      description: "Bukit Batok West Avenue 6 Blk 134. 134 Bukit Batok West Avenue 6. About the Hawker Centre. Sharifardiana. 81%. One more plate, please!",
      img: '/img/carousell/tiongBahru.jpg'
    },
    {
      id: 3,
        name: "Yishun Park Hawker Centre",
        description: "International cuisine is served from more than 40 stands at this informal open-air food court.",
        img: '/img/carousell/yishunPark.png'
    }
  ];

  return (
    <>
      <Container sx={{ paddingTop: 5 }}>
        <Typography variant="h4" sx={{fontWeight: 'medium', marginBottom: 1}}>Top Hawker Centers</Typography>
        <Carousel>
          {items.map((item) => (
            <Paper key={item.id} elevation={5} sx={{padding: 2}}>
              <img src={item.img} alt={item.title} style={{width: "100%", height: 500}}/>
              <Typography sx={{paddingBottom: 1}}variant="h5">{item.name}</Typography>
              <Typography sx={{paddingBottom: 1}} variant="subtitle2">{item.description}</Typography>
              <Button variant="contained">Check it out!</Button>
            </Paper>
          ))}
        </Carousel>
      </Container>
    </>
  );
}
