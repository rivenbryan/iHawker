import React from 'react';
import { Container, Typography,Box, Grid, Divider} from '@mui/material';
import ClaypotLaksaImg from './img/claypotlaksa.jpg'

export default function StallMenu() {
    return(
        <Container sx={{marginTop: 4}}>
            <Typography variant='h4' sx={{fontWeight: 'bold'}}>
                Menu Top Sellers
            </Typography>
            <Box
                margin={"0 auto"}
                maxWidth="50vw">
                <Grid container spacing={0} justifyContent="center" alignItems="center" paddingY={4}>
                    <Grid item xs={4} >
                    <Box margin={"0 auto"} maxWidth={"80%"}>
                        <Box
                            component="img"
                            sx={{ maxWidth: "100%", boxShadow: 5, flexGrow: 1 }}
                            alt="Claypot Laksa"
                            src= {ClaypotLaksaImg}
                            marginBottom = {1}
                        />
                        <Typography variant="body1" align= "center" sx={{fontWeight: 'bold'}}>
                            Claypot Laksa 1
                        </Typography>
                        <Typography variant="subtitle1" align= "center">
                            $4.5
                        </Typography>
                    </Box>
                    </Grid>

                    <Grid item xs={4} >
                    <Box margin={"0 auto"} maxWidth={"80%"}>
                        <Box
                            component="img"
                            sx={{ maxWidth: "100%", boxShadow: 5, flexGrow: 1 }}
                            alt="Claypot Laksa"
                            src= {ClaypotLaksaImg}
                            marginBottom = {1}
                        />
                        <Typography variant="body1" align= "center" sx={{fontWeight: 'bold'}}>
                            Claypot Laksa 2
                        </Typography>
                        <Typography variant="subtitle1" align= "center">
                            $4.5
                        </Typography>
                    </Box>
                    </Grid>

                    <Grid item xs={4} >
                    <Box margin={"0 auto"} maxWidth={"80%"}>
                        <Box
                            component="img"
                            sx={{ maxWidth: "100%", boxShadow: 5, flexGrow: 1 }}
                            alt="Claypot Laksa"
                            src= {ClaypotLaksaImg}
                            marginBottom = {1}
                        />
                        <Typography variant="body1" sx={{fontWeight: 'bold', textAlign: 'center'}}>
                            Claypot Laksa 3
                        </Typography>
                        <Typography variant="subtitle1" sx={{textAlign: 'center'}}>
                            $4.5
                        </Typography>
                    </Box>
                    </Grid>
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
                    <Grid item xs={4}>
                        <Typography variant='body1' align= "center">Placeholder 1</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant='body1' align= "center">Placeholder 2</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant='body1' align= "center">Placeholder 3</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant='body1' align= "center">Placeholder 4</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant='body1' align= "center">Placeholder 5</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant='body1' align= "center">Placeholder 6</Typography>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}
