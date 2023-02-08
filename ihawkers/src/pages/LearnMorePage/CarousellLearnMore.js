import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Box, Container } from "@mui/material";

export default function CarousellLearnMore() {
  var items = [
    {
      img: "car4.jpg",
    }
  ];

  return (
    <Box sx={{ paddingTop: 5 }}>
      <Container maxWidth="xl">
        <Box
          sx={{ width: "100%" }}
          component="img"
          alt="Company Logo"
          src={process.env.PUBLIC_URL + "/img/info/" + items[0].img}
        ></Box>
      </Container>
    </Box>
  );
}
