import React from 'react';
import { Container, Typography,Box, Divider, Paper, Stack, Avatar, Button} from '@mui/material';
import FaceImg from './img/face.jpg'
import FoodImg from './img/claypotlaksa.jpg'

export default function ViewReviews() {
    return(
        <Container sx={{marginTop: 4}}>
            <Typography variant='h4' sx={{fontWeight: 'bold'}}>View Recent Comments</Typography>
            <Stack marginTop={4}>
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
                        <Typography variant='body1' color="black" sx={{fontWeight: "medium"}}>Ashid Comerfst</Typography>
                        <Typography variant='subtitle1' sx={{fontWeight: "light"}}>1,337 reviews</Typography>
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
                        <Typography variant='body1' color="black" sx={{fontWeight: "medium"}}>Claypot Laksa</Typography>
                        <Typography variant='subtitle1' sx={{fontSize: "small", fontWeight: "light"}}>Visited 18/02/2023</Typography>
                        </Box>
                    </Box>
                    <Box maxHeight={150} maxWidth={500}>
                        <Typography variant='body1'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut commodo mi, vulputate posuere quam. Praesent eleifend magna non magna mattis congue. Sed sem mauris, volutpat non est laoreet, faucibus dictum purus. Vvolutpat non est laoreet, faucibus.   
                        </Typography>
                    </Box>
                </Stack>
                </Paper>
            </Stack>

            <Stack marginTop={4}>
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
                        <Typography variant='body1' color="black" sx={{fontWeight: "medium"}}>Ashid Comerfst</Typography>
                        <Typography variant='subtitle1' sx={{fontWeight: "light"}}>1,337 reviews</Typography>
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
                        <Typography variant='body1' color="black" sx={{fontWeight: "medium"}}>Claypot Laksa</Typography>
                        <Typography variant='subtitle1' sx={{fontSize: "small", fontWeight: "light"}}>Visited 18/02/2023</Typography>
                        </Box>
                    </Box>
                    <Box maxHeight={150} maxWidth={500}>
                        <Typography variant='body1'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut commodo mi, vulputate posuere quam. Praesent eleifend magna non magna mattis congue. Sed sem mauris, volutpat non est laoreet, faucibus dictum purus. Vvolutpat non est laoreet, faucibus.   
                        </Typography>
                    </Box>
                </Stack>
                </Paper>
            </Stack>

            <Stack marginTop={4}>
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
                        <Typography variant='body1' color="black" sx={{fontWeight: "medium"}}>Ashid Comerfst</Typography>
                        <Typography variant='subtitle1' sx={{fontWeight: "light"}}>1,337 reviews</Typography>
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
                        <Typography variant='body1' color="black" sx={{fontWeight: "medium"}}>Claypot Laksa</Typography>
                        <Typography variant='subtitle1' sx={{fontSize: "small", fontWeight: "light"}}>Visited 18/02/2023</Typography>
                        </Box>
                    </Box>
                    <Box maxHeight={150} maxWidth={500}>
                        <Typography variant='body1'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut commodo mi, vulputate posuere quam. Praesent eleifend magna non magna mattis congue. Sed sem mauris, volutpat non est laoreet, faucibus dictum purus. Vvolutpat non est laoreet, faucibus.   
                        </Typography>
                    </Box>
                </Stack>
                </Paper>
            </Stack>

            <Stack marginTop={4}>
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
                        <Typography variant='body1' color="black" sx={{fontWeight: "medium"}}>Ashid Comerfst</Typography>
                        <Typography variant='subtitle1' sx={{fontWeight: "light"}}>1,337 reviews</Typography>
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
                        <Typography variant='body1' color="black" sx={{fontWeight: "medium"}}>Claypot Laksa</Typography>
                        <Typography variant='subtitle1' sx={{fontSize: "small", fontWeight: "light"}}>Visited 18/02/2023</Typography>
                        </Box>
                    </Box>
                    <Box maxHeight={150} maxWidth={500}>
                        <Typography variant='body1'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut commodo mi, vulputate posuere quam. Praesent eleifend magna non magna mattis congue. Sed sem mauris, volutpat non est laoreet, faucibus dictum purus. Vvolutpat non est laoreet, faucibus.   
                        </Typography>
                    </Box>
                </Stack>
                </Paper>
            </Stack>

            <Stack marginTop={4}>
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
                        <Typography variant='body1' color="black" sx={{fontWeight: "medium"}}>Ashid Comerfst</Typography>
                        <Typography variant='subtitle1' sx={{fontWeight: "light"}}>1,337 reviews</Typography>
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
                        <Typography variant='body1' color="black" sx={{fontWeight: "medium"}}>Claypot Laksa</Typography>
                        <Typography variant='subtitle1' sx={{fontSize: "small", fontWeight: "light"}}>Visited 18/02/2023</Typography>
                        </Box>
                    </Box>
                    <Box maxHeight={150} maxWidth={500}>
                        <Typography variant='body1'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut commodo mi, vulputate posuere quam. Praesent eleifend magna non magna mattis congue. Sed sem mauris, volutpat non est laoreet, faucibus dictum purus. Vvolutpat non est laoreet, faucibus.   
                        </Typography>
                    </Box>
                </Stack>
                </Paper>
            </Stack>
            <Box textAlign="center" sx={{marginTop: 4}}>
                <Button variant="contained" sx={{width: 330}} >View More</Button>
            </Box>
        </Container>
    )
}