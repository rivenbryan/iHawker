/**
 * React component that renders a Hawker centre card with an image, name, description, and a button to navigate to a hawker centre page.
 *
 * @param {Object} props - Props object.
 * @param {string} props.id - ID of the hawker centre.
 * @param {string} props.img - URL of the hawker centre img.
 * @param {string} props.short_description - Short description of the hawker centre.
 * @param {string} props.name_of_centre - Name of the hawker centre.
 * @returns {JSX.Element} Card component.
 */

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ButtonHawkerCentre from '../../components/ButtonHawkerCentre';
import { Link } from 'react-router-dom';

export default function CardComponent({id, img, short_description, name_of_centre}) {
  return (
    <Card sx={{ maxWidth: 345, height: 460, display: "flex", flexDirection: "column"}}>
        <CardMedia
        sx={{ height: 250 }}
        image={img}
        title= "Hawker Centre Image"
        />
        <CardContent>
        <Typography gutterBottom noWrap variant="h5" component="div">
            {name_of_centre}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {short_description}
        </Typography>
        </CardContent>
        <CardActions sx={{marginTop: "auto", pb: 1}}>
          <Link style={{textDecoration: 'none'}} to={"/hawkerCentre/" + id} >
                  <ButtonHawkerCentre variant="outlined" title="Check it out!" centreID = {id}/>
          </Link>
        </CardActions>
  </Card>
  );
}