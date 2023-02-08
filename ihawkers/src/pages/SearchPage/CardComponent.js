import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ButtonHawkerCentre from '../../components/ButtonHawkerCentre';
import { Link } from 'react-router-dom';
export default function CardComponent({id, img, short_description, name_of_centre}) {

  return (
    <Card sx={{ maxWidth: 345 }}>
        <CardMedia
        sx={{ height: 250 }}
        image={img}
        title="green iguana"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {name_of_centre}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {short_description}
        </Typography>
        </CardContent>
        <CardActions>
        <Button  variant="outlined" sx={{ paddingRight: 3, marginRight: 3}}>Share</Button>
        <Link style={{textDecoration: 'none'}} to={"/hawkerCentre/" + id} >
                <ButtonHawkerCentre variant="outlined" title="Check it out!" centreID = {id}/>
        </Link>
        </CardActions>
  </Card>
  );
}