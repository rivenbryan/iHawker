/**
 * React component that displays the hero section of the landing page.
 *
 * @component
 * @returns {JSX.Element} The React component.
 */
import React from 'react';
import { Container, Stack, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <Container maxWidth="lg" sx={{ marginTop: 20 }}>
      <Stack direction="row" spacing={15}>
        <Box sx={{ marginTop: 10 }}>
          <Typography color="primary" variant="h4" sx={{ fontWeight: 'medium' }}>SG Hawker Food</Typography>
          <Typography variant="h2" sx={{ fontWeight: 'bold' }}>iHawkers</Typography>
          <Typography variant="h3" sx={{ fontWeight: 'bold' }}>For Singapore</Typography>
          <Button component={Link} to="/info" variant="contained" sx={{ marginTop: 1 }}>Learn more</Button>
        </Box>
        <Box component="img"
          alt="Company Logo"
          src={process.env.PUBLIC_URL + "/img/hero/hero.jpg"}>
        </Box>
      </Stack>
    </Container>
  );
}
