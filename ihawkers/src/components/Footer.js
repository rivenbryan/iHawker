import React from 'react';
import { Button, Container, Toolbar, Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';
import { Link } from "react-router-dom";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
      <Box sx={{ 
        ml: -5,
        mr: -1,
        mb: -1,
        position: "static", 
        backgroundColor: "#000000", 
        height: "8vh", 
        color: "white",
        marginTop: "3vh",
        }}>
          <Box   
            margin={"0 auto"}
            display="flex"
            justifyContent="center"
          >
          <Button component={Link} to="/" color="inherit">
            <Box
              component="img"
              sx={{ maxWidth: 100, }}
              alt="iHawker"
              src={process.env.PUBLIC_URL + "/img/logo/logo.png"}
            />
          </Button>
          
          <Typography 
            variant="h6" 
            sx={{fontSize: 18 ,fontWeight: 'light', marginBottom: 1.5, marginTop: 3}}
          >
            2023
          </Typography>
          
          
          <Stack direction="row" ml={10}>
            <Button component={Link} to="" color="inherit">
              <FacebookRoundedIcon color="#afafaf" fontSize="small"/>
            </Button>
            <Button component={Link} to="" color="inherit">
              <TwitterIcon color="#afafaf" fontSize="small"/>
            </Button>
            <Button component={Link} to="" color="inherit">
              <InstagramIcon color="#afafaf" fontSize="small"/>
            </Button>
          </Stack>
          </Box>
      </Box>
  )
}

export default Footer;