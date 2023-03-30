/**
 * Component for rendering a card containing information about a hawker stall.
 * @param {Object} props - The props object.
 * @param {string} props.id - The ID of the hawker stall.
 * @param {string} props.img - The image URL of the hawker stall.
 * @param {string} props.description - The description of the hawker stall.
 * @param {string} props.name_of_centre - The name of the hawker centre the stall belongs to.
 * @param {number} props.avg_rating - The average rating of the hawker stall.
 * @returns {JSX.Element} - The StallsCardComponent JSX element.
 */

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ButtonHawkerStore from '../../components/ButtonHawkerStore';
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';

export default function StallsCardComponent({id, img, description, name_of_centre, avg_rating}) {

  return (
    <Card sx={{ maxWidth: 345, height: 460, display: "flex", flexDirection: "column" }}>
        <CardMedia
        sx={{ height: 250 }}
        image={img}
        title={name_of_centre}
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {name_of_centre}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {description}
        </Typography>
        </CardContent>
        <CardActions sx={{marginTop: "auto", pb: 1}}>
          <Grid container justifyContent="space-between" alignItems="flex-end">
            <Link style={{textDecoration: 'none'}} to={"/stall/" + id} >
              <ButtonHawkerStore variant="outlined" title="Check it out!" centreID = {id}/>
            </Link>
            { avg_rating > 0 ? (
              <Typography variant='h6' align="right" color="text.secondary" paddingRight={1} fontSize={18}>
              <Typography variant='p' color="text.primary" fontSize={25}>{avg_rating}</Typography>
              /5 stars
              </Typography>
            ) : (
              <Typography variant='h6' align="right" color="text.secondary" paddingRight={1} fontSize={18}>
              -/5 stars
              </Typography>
            )}
            
          </Grid>
    
        </CardActions>
  </Card>
  );
}