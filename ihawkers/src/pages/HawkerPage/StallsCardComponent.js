import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ButtonHawkerStore from '../../components/ButtonHawkerStore';
import { Link } from 'react-router-dom';

export default function StallsCardComponent({id, img, description, name_of_centre}) {

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
        <Link style={{textDecoration: 'none'}} to={"/stall/" + id} >
                <ButtonHawkerStore variant="outlined" title="Check it out!" centreID = {id}/>
        </Link>
        </CardActions>
  </Card>
  );
}