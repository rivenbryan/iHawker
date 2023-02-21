import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Stack } from "@mui/system";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/userAuthContext";

const Navbar = () => {

  const {getUser, clearUser} = useAuth()
  //For logging Out
  const handleLogout = () => {
    clearUser()
    window.location.href = "/?authState=logout"
  }

  //For Notifications
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const authState = queryParams.get('authState')
  let notification
  switch(authState) {
    case "login":
      notification = "Successfully logged in"
      break
    case "logout":
      notification = "Successfully logged out"
      break
    case "registered":
      notification = "Successfully Registered"
      break
    }

  const user = getUser()
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
            {notification ? <Box>
              {notification}
            </Box> : null}
            <Button component={Link} to="/" color="inherit">Home</Button>
            {/* <Button component={Link} to="/Stall" color="inherit">Profile</Button> */}
            <Button component={Link} to="/search" color="inherit">Search</Button>
            <Button component={Link} to="/map" color="inherit">Map</Button>
            {user ? <Button onClick={handleLogout}  color="inherit">Log Out</Button> : <Button component={Link} to="/Login" color="inherit">Log In</Button>}
          </Stack>
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default Navbar;
