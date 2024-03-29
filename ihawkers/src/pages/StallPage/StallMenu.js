/**
* A component that displays the menu of a hawker stall, including top sellers and other menu items.
* @param {Object} props - The props object containing oneHawkerStore, which is an object containing information about the hawker stall.
* @returns {JSX.Element} - A JSX element representing the StallMenu component.
*/

import React from 'react';
import { Container, Typography,Box, Grid, Divider} from '@mui/material';
import StallMenuBox from './StallMenuBox';

export default function StallMenu(props) {
    return(
        <Container sx={{marginTop: 4}}>
            <Typography variant='h4' sx={{fontWeight: 'bold'}}>
                Menu Top Sellers
            </Typography>
            <Box
                margin={"0 auto"}
                maxWidth="50vw">
                <Grid container spacing={5} justifyContent="center" alignItems="center" paddingY={4}>
                    {props.oneHawkerStore && props.oneHawkerStore.topseller.map((item) =>
                    <Grid item xs={4} >
                        <StallMenuBox
                            img = {item.tsImg}
                            name_of_food = {item.name_of_food}
                            price = {item.price}
                        />
                    </Grid>
                    )} 
                </Grid>

                <Typography variant='body1' align="center" sx={{fontWeight: 'bold'}}>Other Menu Items</Typography>
                <Divider sx={{marginTop: 2}}/>
                <Grid container 
                    spacing={3} 
                    direction="row"
                    alignItems="center"
                    justify="center"
                    marginTop={1}
                    >

                    {props.oneHawkerStore && props.oneHawkerStore.menu_item.map((item) =>
                    <Grid item xs={4}>
                        <Typography variant='body1' align= "center">
                            {item}
                        </Typography>
                    </Grid>
                    )} 
                </Grid>
            </Box>
        </Container>
    )
}
