import React from 'react';
import { Container, Typography,Box, Stack, Button} from '@mui/material';
import ReviewCard from './ReviewCard';

export default function ViewReviews({reviews}) {
    return(
        <Container sx={{marginTop: 4}}>
            <Typography variant='h4' sx={{fontWeight: 'bold'}}>View Recent Comments</Typography>
            { reviews.length > 0 ? (
                <Stack marginTop={4} marginBottom={4}>

                    {reviews && reviews.map((item) =>
                    <ReviewCard
                        name = {item.name}
                        food = {item.food}
                        date_of_review = {item.date_of_review}
                        date_of_visit = {item.date_of_visit}
                        rating = {item.rating}
                        comment = {item.comment}
                    />
                    )}

                </Stack>

            ) : (
                <Typography variant='body1' color="gray" align='left' sx={{marginTop: 2, fontWeight: 'medium'}}>
                No reviews for this store yet...
                </Typography> 
            )}

            <Box textAlign="center" sx={{marginTop: 4}}>
                <Button variant="contained" sx={{width: 330}} >View More</Button>
            </Box>
        </Container>
    )
}