/**
 * A React component representing the navigation bar of the iHawker application.
 * @returns {JSX.Element} - A Material-UI AppBar containing the navigation buttons.
 */
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { Divider, Container } from "@mui/material";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Stack } from "@mui/system";
import { Link, useLocation } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";
import { useAuth } from "../context/userAuthContext";

const Navbar = () => {
  const {getUser, clearUser} = useAuth()
   /**
   * Handles a click on the 'Log Out' button by sending a POST request to the authentication API endpoint
   * to log the user out and clearing the user authentication state.
   * @returns {void}
   */
  const handleLogout = () => {
    fetch("http://localhost:4000/api/auth/logout", {
      method: "POST",
      headers: { 
        "Content-Type": "application/json" ,
        "Access-Control-Allow-Origin": "http://localhost:4000"
    },
      credentials: "include"
    }).then(() => {
      clearUser()
      window.location.href = "/?authState=logout"
    })
  }

  //For Notifications
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const authState = queryParams.get('authState')
  const state = queryParams.get('state')
  let notification
  switch(state){
    case "storeDelete":
      notification = "Store deleted successfully!"
      break
    case "reviewSuccess":
      notification = "Reviewed successfully!"
      break
    case "storeSuccess":
      notification = "Store added successfully!"
      break
  }
  switch(authState) {
    case "login":
      notification = "Successfully logged in!"
      break
    case "logout":
      notification = "Successfully logged out!"
      break
    case "registered":
      notification = "Successfully Registered!"
      break
    case "reset-password":
      notification = "Successfully Resetted Password!"
      break
    }
  if (notification && !toast.notificationDisplayed) {
    toast.success(notification)
    toast.notificationDisplayed = true
  }
  
  const user = getUser()
  console.log(user)
  //backgroundColor: "transparent", boxShadow: 0
  return (
    <Container >
      <ToastContainer position="bottom-right" newestOnTop />
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
            {/* <Button component={Link} to="/Stall" color="inherit">Profile</Button> */}
            <Button component={Link} to="/search" color="inherit">Search</Button>
            <Button component={Link} to="/map" color="inherit">Map</Button>
            <Divider sx={{borderLeft: 1, borderColor: "#A6A6A6"}}/>
            {user && user.isHawker ? <Button component={Link} to="/admin" color="inherit">Admin</Button>:<></>}
            {user ? <Button onClick={handleLogout}  color="inherit">Log Out</Button> : <Button component={Link} to="/Login" color="inherit">Log In</Button>}
          </Stack>
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default Navbar;
