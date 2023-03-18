import * as React from 'react';
import { Button, Container, Typography, Rating, TextField} from '@mui/material';
import { ToastContainer, toast } from "react-toastify";
import { Box } from '@mui/system';
import { useAuth } from '../../context/userAuthContext';


export default function AddReview({storeID}) {
    
    const { getUser } = useAuth();
    const user = getUser();
    const [food, setFood] = React.useState("");
    const [date_of_visit, setDateOfVisit] = React.useState("");
    const [rating, setRating] = React.useState(5);
    const [comment, setComment] = React.useState("");
    const [reviewImg, setImage] = React.useState([]);

    const handleChange = (event) => {
        if (event.target.id === "food"){
            setFood(event.target.value)
        }else if (event.target.id === "date_of_visit"){
            setDateOfVisit(event.target.value)
        }else if (event.target.id === "comment"){
            setComment(event.target.value)
        }
    };

    //handle and convert it in base 64
    const handleImage = (e) => {
        const file = e.target.files[0];
        setFileToBase(file);
        console.log(file);
    }

    const setFileToBase = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImage(reader.result);
        }
    }
    
    async function addReview(event){
          event.preventDefault();
        if (reviewImg.length === 0){
            console.log("here")
            toast.error("Please upload an image.");
        }else {
            const body = {
                food,
                date_of_visit,
                rating,
                comment,
                reviewImg
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
                    setImage([]);
                    //redirect to search page
                    window.location.href = "/search?state=reviewSuccess"
                    
                } 
                else {
                    const errorMessage = await response.json().then(
                        err => err.error
                    )
                    //toast.error(errorMessage);
                }
            })
        }
      
        
    }

    return(
        <>
        <ToastContainer position="bottom-right" newestOnTop />
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

                <Box sx={{ width: "100%", justifyContent: "left"}}>
                    <img 
                        style={{width:"inherit", marginBottom: 20}} 
                        src={reviewImg} 
                        alt="" />
                    <Button variant='contained' component="label" sx={{mb:2}}>
                        Upload Image
                        <input 
                            hidden
                            accept="image/*"
                            onChange={handleImage} 
                            type="file" 
                            id="formupload" 
                            name="image" 
                            className="form-control" />
                    </Button>
                </Box>
                
                <TextField
                    sx={{ width: "100%", mb: 2, mt: 2}}
                    id="date_of_visit"
                    type="date"
                    label="Date of visit"
                    helperText="When did you visit the stall?"
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
                    inputProps={{maxLength: 255}}
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
        </>
    )
}