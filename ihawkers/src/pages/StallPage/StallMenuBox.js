import { Box, Typography } from '@mui/material';
import * as React from 'react';

export default function StallMenuBox({img, name_of_food, price}){
    return(
    <Box margin={"0 auto"} maxWidth={"80%"}>
        <Box
            component="img"
            sx={{ maxWidth: "100%", boxShadow: 5, flexGrow: 1 }}
            alt="Claypot Laksa"
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