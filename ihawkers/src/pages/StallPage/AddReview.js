import * as React from 'react';
import { Button, Container, Typography, Rating, TextField} from '@mui/material';

import { Box } from '@mui/system';
import { useAuth } from '../../context/userAuthContext';


export default function AddReview({storeID}) {
    
    const { getUser } = useAuth();
    const user = getUser();
    const [filename, setFilename] = React.useState("max. 25mb");
    const [name, setName] = React.useState("");
    const [food, setFood] = React.useState("");
    const [date_of_review, setDateOfReview] = React.useState("");
    const [date_of_visit, setDateOfVisit] = React.useState("");
    const [rating, setRating] = React.useState(5);
    const [comment, setComment] = React.useState("");

    const handleChange = (event) => {
        if (event.target.id === "food"){
            setFood(event.target.value)
        }else if (event.target.id === "date_of_visit"){
            setDateOfVisit(event.target.value)
        }else if (event.target.id === "comment"){
            setComment(event.target.value)
        }
    };

    const handleAddReview = (event) => {
        event.preventDefault();
      
        setName(user.name);
        setDateOfReview(new Date().toJSON().slice(0, 10));
        console.log(date_of_review)
        console.log(name)
    };
    
    async function addReview(event){
        event.preventDefault();
        const body = {
            food,
            date_of_visit,
            rating,
            comment
          }
        console.log(body)
        
        fetch('http://localhost:4000/api/stall/'+storeID+'/review', {
            method: "POST",
            body: JSON.stringify(body),
            headers: { 
                'Content-Type': 'application/json' ,
                'Access-Control-Allow-Origin': "http://localhost:4000"
            },
            credentials: "include"
        }).then(async (response) => {
            if (response.ok) {
                setFood("");
                setDateOfVisit("");
                setRating(5);
                setComment("");
                window.location.reload(false);
                //redirect to home page
                // window.location.href = "/search"
                
            } 
            else {
                const errorMessage = await response.json().then(
                    err => err.error
                )
                //toast.error(errorMessage);
            }
        })
    }

    return(
        <Container sx={{marginY: 4}}>
            <Typography variant='h4' sx={{fontWeight: 'bold'}}>Leave a review</Typography>
            {user && user.isHawker === false ? (
            <Box sx= {{textAlign:"center" ,width: 600, margin:"0 auto"}}>
            <form onSubmit={addReview}>
                <TextField
                    sx={{ width: "100%", mb: 2, mt: 2}}
                    id="food"
                    type="text"
                    label="Dish bought"
                    helperText="What did you purchase from the stall?"
                    placeholder='Signature Lor Mee'
                    variant="outlined"
                    autoComplete='false'
                    required
                    value={food}
                    onChange={handleChange}
                />
                
                <TextField
                    sx={{ width: "100%", mb: 2, mt: 2}}
                    id="date_of_visit"
                    type="date"
                    label="Date of visit"
                    helperText="When did you visit the store?"
                    placeholder='02-02-2022'
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                      }}
                    autoComplete='false'
                    required
                    value={date_of_visit}
                    onChange={handleChange}
                />

                <Box textAlign="left" marginBottom={2}>
                    <Typography variant='body1' color="#919191" textAlign="left" marginBottom={1}>
                        Rating:
                    </Typography>
                    <Rating name="simple-controlled"
                        size="large"
                        value={rating}
                        onChange={(event, newValue) => {
                            setRating(newValue);
                        }}/>
                </Box>
                
                <TextField
                    sx={{ width: "100%", mb: 2}}
                    type="text"
                    id="comment"
                    label="Comment"
                    placeholder='Food was great! Service was even better, I loved the youthful spirit of the owner!!'
                    helperText="How did you feel about it? (max. 255 characters)"
                    multiline
                    autoComplete='false'
                    maxRows={4}
                    required
                    variant="outlined"
                    onChange={handleChange}
                />

                <Button 
                    sx={{width: 330}}
                    type='submit'
                    variant="contained" >
                        Submit Review
                </Button>

            </form>

            </Box>
            ) : (
                <Typography variant='body1' color="gray" align='left' sx={{marginTop: 2, fontWeight: 'medium'}}>
                Only logged in customers may leave reviews.
                </Typography> 
            )}
        </Container>
    )
}