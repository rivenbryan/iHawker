/**
* @typedef {Object} HawkerStore
* @property {string} _id - The ID of the hawker store.
* @property {Object} image - The image of the hawker store.
* @property {string} image.url - The URL of the hawker store image.
* @property {string} description - The description of the hawker store.
* @property {string} stall_name - The name of the hawker store.
* @property {HawkerStore[]} HawkerStores - An array of hawker stores details to display.
* @param {Props} props - The props object of the viewHawkers component.
* @returns {JSX.Element} - The viewHawkers component.
*/

import React from 'react';
import { Card, Box, Grid, Typography, CardActionArea, CardContent } from '@mui/material';
import ManageCard from './ManageCard';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';

export default function viewHawkers({HawkerStores}) {
    return(
        <Box  sx={{margin: "0 auto", width:"90%", paddingBottom: 6}}>
        <Grid sx={{ paddingTop: 5}} container spacing={5} justifyContent="center">
            <Grid item xs = {4}>
                <Card sx={{maxWidth: 420, 
                    border: "dashed", 
                    borderWidth: 4,
                    borderColor: "#515057",
                }} >
                    <CardActionArea component={Link} to={"/addstore"}>
                        <CardContent 
                            sx={{p: 0, 
                                height:453,
                                display: 'flex', 
                                flexDirection: 'column',
                                alignItems: 'center', 
                                justifyContent:'center',
                            }}
                        >
                            <AddIcon sx={{color:"#515057",fontSize: 60}}/>
                            <Typography variant='body1' 
                                sx={{fontSize: 25,
                                    color:"#515057",
                                }}
                            >
                                Add new stall
                            </Typography>

                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
        {HawkerStores.length > 0
          ? HawkerStores &&
            HawkerStores.map((item) => (
              <Grid item xs={4}>
                <ManageCard
                  type="test"
                  id={item._id}
                  img={item.image.url}
                  short_description={item.description}
                  name_of_centre={item.stall_name}
                />
              </Grid>
            ))
          : (
            <Grid item xs={4} display="flex" justifyItems ="center" alignItems={"center"}>
            <Typography variant='body1' sx={{margin: "auto 0"}}>
                No hawker stalls under your management.
            </Typography>
            </Grid>
            )
        }
      </Grid>
      </Box>
    )
}