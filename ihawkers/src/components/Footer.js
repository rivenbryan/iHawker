/**
 * A React component representing the footer of the iHawker application.
 * @returns {JSX.Element} - A Material-UI Box containing the footer content.
 */
import React from 'react';
import { Button, Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';
import { Link } from "react-router-dom";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
    return (
        <Box sx={{ 
          position: "absolute", 
          backgroundColor: "#000000", 
          height: "auto", 
          color: "white",
          marginTop: "3vh",
          marginLeft: "-8px",
          display: "flex",
          width: "100%",
          }}>
              <Box   
                margin={"0 auto"}
                display="inherit"
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
    );
}

export default Footer;
