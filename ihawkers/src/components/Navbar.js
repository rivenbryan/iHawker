import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Stack } from "@mui/system";
import { Link } from "react-router-dom";

const Navbar = () => {


  //backgroundColor: "transparent", boxShadow: 0
  return (
    <Container >
      <AppBar position="static" sx={{ backgroundColor: "transparent", boxShadow: 0 }}>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Box
              component="img"
              sx={{ maxWidth: 100, flexGrow: 1 }}
              alt="Company Logo"
              src={process.env.PUBLIC_URL + "/img/logo/logo.png"}
            />
          </Box>
          <Stack direction="row" spacing={2}>
            <Button component={Link} to="/" color="inherit">Home</Button>
            <Button color="inherit">Profile</Button>
            <Button color="inherit">Map</Button>
            <Button component={Link} to="/Login" color="inherit">Log In</Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default Navbar;
