/**
 * React component that displays a single image in a carousel for the "Learn More" section.
 *
 * @component
 * @returns {JSX.Element} The React component.
 */
import React from "react";
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
