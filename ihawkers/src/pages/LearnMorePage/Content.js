import React from "react";
import { Container, Typography, Grid, Stack, Box } from "@mui/material";
import CabinIcon from "@mui/icons-material/Cabin";
import SecurityIcon from "@mui/icons-material/Security";
import PublicIcon from "@mui/icons-material/Public";
export default function Content() {
  return (
    <Container sx={{ marginTop: 5 }}>
      <Grid container spacing={10}>
        <Grid item xs="6">
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            About iHawker
          </Typography>
          <Typography variant="subtitle1">
            Bringing together well-loved local food under one roof, hawker
            centres are a unique aspect of Singaporean culture. Located all over
            the island, these time-tested institutions serve as important places
            for community bonding.
          </Typography>
          <Typography sx={{ paddingTop: 2 }} variant="subtitle1">
            We believe in this 3 values
          </Typography>

          <Stack direction="row" sx={{paddingTop: 3}}>
            <Box>
              <CabinIcon />
              <Typography>Preserve Hawker Heritage</Typography>
            </Box>
            <Box>
              <SecurityIcon />
              <Typography>Protect Hawker's Legacy</Typography>
            </Box>
            <Box>
              <PublicIcon />
              <Typography>Publicize Hawker Culture</Typography>
            </Box>
          </Stack>
        </Grid>
        <Grid item xs="6">
          <Box component="img" src="/img/info/logozxc.jpg">

          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
