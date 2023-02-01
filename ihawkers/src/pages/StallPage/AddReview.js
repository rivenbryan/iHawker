import * as React from 'react';
import {useState} from 'react';
import { Button, Container, Typography, FormControl, InputLabel, FormHelperText, Input, Rating, TextField} from '@mui/material';
import { Box } from '@mui/system';


export default function AddReview() {
    const [value, setValue] = React.useState(5);
    const [filename, setFilename] = React.useState("max. 25mb");

    return(
        <Container sx={{marginY: 4}}>
            <Typography variant='h4' sx={{fontWeight: 'bold'}}>Leave a review</Typography>
            
            <Box textAlign="center" maxWidth={600} margin="0 auto">

            <FormControl sx={{minWidth: 600, m: 2}}>
                <InputLabel htmlFor="my-input">Dish bought</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" />
                <FormHelperText id="my-helper-text">What did you purchase from the stall?</FormHelperText>
            </FormControl>

            <FormControl sx={{minWidth: 600, m: 2}}>
                <InputLabel htmlFor="my-input">Date visited</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" />
                <FormHelperText id="my-helper-text">When did you visit the stall?</FormHelperText>
            </FormControl>
            
            <FormControl sx={{minWidth: 600, m: 2}}>
            <Typography variant='body1' color="#919191" textAlign="center" >Rating</Typography>
            <Box textAlign="center">
            <Rating name="simple-controlled"
                size="large"
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}/>
            </Box>
            </FormControl>

            <FormControl sx={{minWidth: 600, m: 2}}>
            <TextField
                id="filled-read-only-input"
                label="Photo Upload"
                defaultValue={filename}
                InputProps={{
                readOnly: true,
                }}
                variant="filled"
            />
            <Button variant="contained" component="label">
            Upload File
            <input type="file" accept=".jpg" hidden onChange/>
            </Button>
            </FormControl>
            
            <FormControl sx={{minWidth: 600, m: 2}}>
            <TextField
                id="standard-multiline-flexible"
                label="Review Message (max. 255 characters)"
                multiline
                maxRows={4}
                variant="standard"
            />
            </FormControl>
            
            <Box sx={{minWidth: 600, m: 2}}>
                <Button variant="contained" sx={{width: 330}} >Submit Review</Button>
            </Box>

            </Box>
        </Container>
    )
}