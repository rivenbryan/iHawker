import React, { useEffect, useState } from 'react'
import { Typography, Link} from '@mui/material';

export default function BestFood() {
  const [reviews, setReviews] = useState("");
  useEffect( () => {
    const fetchReviews = async () => {
      const response = await fetch("http://localhost:4000/api/stall/review/getreviews");
      const json = await response.json();
      if (response.ok){
        setReviews(json[Math.floor(Math.random() * json.length)])
      }
    }

    fetchReviews();
  }, [])
  
  return (
   <Typography variant="subtitle2"> {reviews.stall_name}</Typography>       
  )
}
