import React from 'react';
import { Container,Stack, Typography,Box, Button, Rating ,Link, Grid} from '@mui/material';
import ClaypotLaksaImg from './img/claypotlaksa.jpg'

export default function StallMenu() {
    return(
        <>
        <Container sx={{marginTop: 4}}>
            <Typography variant='h4' sx={{fontWeight: 'bold'}}>
                Menu Top Sellers
            </Typography>

            <Grid container spacing={4} justifyContent="center" alignItems="center" paddingX={20} paddingY={4}>
                <Grid item xs={4} >
                <Box maxWidth={"80%"}>
                    <Box
                        component="img"
                        sx={{ maxWidth: "100%", boxShadow: 5, flexGrow: 1 }}
                        alt="Claypot Laksa"
                        src= {ClaypotLaksaImg}
                        marginBottom = {1}
                    />
                    <Typography variant="body1" sx={{fontWeight: 'bold', textAlign: 'center'}}>
                        Claypot Laksa 1
                    </Typography>
                    <Typography variant="subtitle1" sx={{textAlign: 'center'}}>
                        $4.5
                    </Typography>
                </Box>
                </Grid>

                <Grid item xs={4} >
                <Box maxWidth={"80%"}>
                    <Box
                        component="img"
                        sx={{ maxWidth: "100%", boxShadow: 5, flexGrow: 1 }}
                        alt="Claypot Laksa"
                        src= {ClaypotLaksaImg}
                        marginBottom = {1}
                    />
                    <Typography variant="body1" sx={{fontWeight: 'bold', textAlign: 'center'}}>
                        Claypot Laksa 2
                    </Typography>
                    <Typography variant="subtitle1" sx={{textAlign: 'center'}}>
                        $4.5
                    </Typography>
                </Box>
                </Grid>

                <Grid item xs={4} >
                <Box maxWidth={"80%"}>
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
        </Container>

        </>
    )
}
