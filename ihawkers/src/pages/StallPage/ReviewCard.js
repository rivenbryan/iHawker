import React from 'react';
import { Rating, Paper, Stack, Divider, Avatar, Box, Typography } from '@mui/material';
import FaceImg from './img/face.jpg'
import FoodImg from './img/claypotlaksa.jpg'

export default function ReviewCard({name, food, date_of_review, date_of_visit, rating, comment}) {
    return(
        <Paper variant="outlined" sx={{boxShadow: 4, borderRadius: 5, borderColor: "#ffc23d", borderWidth: 2}}>
            <Stack
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
                divider={<Divider orientation='vertical' color="#babfc4" sx={{height: "100px", alignContent: "center"}}/>}
                spacing={2}>
                <Box sx={{
                    display: "flex",
                    m: 3,
                    alignContent: "center",
                    flexDirection: "row"}}>
                    <Avatar alt="Face"
                        src={FaceImg} 
                        sx={{ width: 100, height: 100}}/>
                    <Box margin={"auto 0"} marginLeft={4}>
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
                        src={FoodImg}
                    />
                    <Box margin={"auto 0"} marginLeft={4}>
                    <Typography variant='subtitle1' sx={{fontWeight: "light"}}>Bought:</Typography>
                    <Typography variant='body1' noWrap color="black" sx={{fontWeight: "medium"}}>{food}</Typography>
                    <Rating name="read-only" value={rating} precision={0.5} size="small" readOnly />
                    <Typography variant='subtitle1' sx={{fontSize: "small", fontWeight: "light"}}>Visited {date_of_visit}</Typography>
                    </Box>
                </Box>
                <Box maxHeight={150} maxWidth={500}>
                    <Typography variant='body1'>
                    {comment}  
                    </Typography>
                </Box>
            </Stack>
        </Paper>
    )
}