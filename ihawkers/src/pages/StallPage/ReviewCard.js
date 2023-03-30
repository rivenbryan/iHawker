/**
* A component that displays a card that provides details of a review
* @component
* @param {Object} props - The component's props
* @param {string} props.name - The name of the user who wrote the review
* @param {string} props.food - The name of the dish reviewed
* @param {string} props.date_of_review - The date the review was written
* @param {string} props.date_of_visit - The date the user visited the hawker stall
* @param {number} props.rating - The rating given by the user
* @param {string} props.comment - The comment written by the user
* @param {string} props.reviewImg - The image uploaded by the user
* @return {JSX.Element} - Returns the JSX code for the ReviewCard component
*/

import React from 'react';
import { Rating, Paper, Stack, Divider, Avatar, Box, Typography } from '@mui/material';

export default function ReviewCard({name, food, date_of_review, date_of_visit, rating, comment, reviewImg}) {
    return(
        <Paper variant="outlined" sx={{mt: 4, boxShadow: 4, borderRadius: 5, borderColor: "#ffc23d", borderWidth: 2}}>
            <Stack
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
                divider={<Divider orientation='vertical' color="#babfc4" sx={{height: "100px", alignContent: "center"}}/>}
                spacing={2}>
                <Box width={200} sx={{
                    display: "flex",
                    m: 3,
                    alignContent: "center",
                    flexDirection: "row"}}>
                    <Avatar alt="Face"
                        src= "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                        sx={{ width: 100, height: 100}}/>
                    <Box margin={"auto "} marginLeft={4}>
                    <Typography variant='body1' color="black" sx={{fontWeight: "medium"}}>{name}</Typography>
                    {/* <Typography variant='subtitle1' sx={{fontWeight: "light"}}>1,337 reviews</Typography> */}
                    </Box>
                </Box>
                <Box sx={{
                    display: "flex",
                    m: 2,
                    alignContent: "center",
                    flexDirection: "row"}}>
                    <Box
                        component="img"
                        sx={{ width: 120, height: 120, objectFit: "cover"}}
                        alt="Claypot Laksa"
                        src={reviewImg}
                    />
                    <Box margin={"auto 0"} marginLeft={4}>
                    <Typography variant='subtitle1' sx={{fontWeight: "light"}}>Bought:</Typography>
                    <Typography variant='body1' noWrap color="black" sx={{fontWeight: "medium"}}>{food}</Typography>
                    <Rating name="read-only" value={rating} precision={0.5} size="small" readOnly />
                    <Typography variant='subtitle1' sx={{fontSize: "small", fontWeight: "light"}}>Visited {date_of_visit}</Typography>
                    </Box>
                </Box>
                <Box maxHeight={150} width={500}>
                    <Typography variant='body1' width={480}>
                    {comment}  
                    </Typography>
                </Box>
            </Stack>
        </Paper>
    )
}