/**
* Component for displaying topsellers and other menu items.
* @param {object} props - The props object containing the image, name_of_food, and price of the menu item.
* @param {string} props.img - The image source of the menu item.
* @param {string} props.name_of_food - The name of the menu item.
* @param {number} props.price - The price of the menu item.
* @returns {JSX.Element} - The JSX code for rendering the menu item box with image, name, and price.
*/

import { Box, Typography } from '@mui/material';
import * as React from 'react';

export default function StallMenuBox({img, name_of_food, price}){
    return(
    <Box margin={"0 auto"} maxWidth={"80%"}>
        <Box
            component="img"
            sx={{ maxWidth: "100%", boxShadow: 5, flexGrow: 1 }}
            alt="Topseller Img"
            src= {img}
            marginBottom = {1}
        />
        <Typography variant="body1" noWrap align= "center" sx={{fontWeight: 'bold'}}>
            {name_of_food}
        </Typography>
        <Typography variant="subtitle1" align= "center">
            ${price}
        </Typography>
    </Box>

    )
};