/**
 * A component for displaying recent comments of a hawker store.
 * @param {Object[]} reviews - An array of objects representing the reviews of the hawker store.
 * @param {string} reviews[].name - The name of the reviewer.
 * @param {string} reviews[].food - The food item reviewed.
 * @param {string} reviews[].date_of_review - The date of the review.
 * @param {string} reviews[].date_of_visit - The date of the visit to the hawker store.
 * @param {number} reviews[].rating - The rating given by the reviewer.
 * @param {string} reviews[].comment - The review comment.
 * @param {string} reviews[].reviewImg.url - The URL of the image attached to the review.
 * @returns {JSX.Element} - The JSX Markup for the component
 */

import React from 'react';
import { Container, Typography, Stack} from '@mui/material';
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
                        reviewImg = {item.reviewImg.url}
                    />
                    )}

                </Stack>
            ) : (
                <Typography variant='body1' color="gray" align='left' sx={{marginTop: 2, fontWeight: 'medium'}}>
                No reviews for this stall yet...
                </Typography> 
            )}
        </Container>
    )
}