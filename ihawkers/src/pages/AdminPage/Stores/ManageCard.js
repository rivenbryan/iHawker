/**
* HawkersCard component that displays a card for a hawker store.
* @param {Object} props - Component props
* @param {string} props.id - Id of the hawker store
* @param {string} props.img - URL of the hawker store image
* @param {string} props.short_description - Short description of the hawker store
* @param {string} props.name_of_centre - Name of the hawker centre that the hawker store belongs to
* @returns {JSX.Element} - Rendered component
*/

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, ButtonBase } from '@mui/material';
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import ButtonHawkerStore from '../../../components/ButtonHawkerStore';
import { ToastContainer, toast } from 'react-toastify';

export default function HawkersCard({id, img, short_description, name_of_centre}){

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    /**
     * Deletes a hawker store from the database and redirects the user to the Admin Page.
     * @param {Object} e - Event object
     * @param {string} e.target.id - Id of the hawker store
     */
    const handleDelete = (e) => {
        console.log(e.target.id)
        fetch('http://localhost:4000/api/stall/'+e.target.id, {
            method: "delete",
            headers: { 
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "http://localhost:4000"
            }, credentials: "include"
        }).then(async (response) => {
        if (response.ok) {
            // setUser(await response.json())
            //redirect to Landing Page
            window.location.href = "/admin?state=storeDelete"
            console.log("ok")
        } 
        else {
            const errorMessage = await response.json().then(
            err => err.error
            )
            toast.error(errorMessage);
            console.log(errorMessage);
        }
        })
        setOpen(false);
    };
    
    return(
        <Card sx={{ 
            maxWidth: 420, 
            height: 460, 
            display: "flex", 
            flexDirection: "column"}}
        >
       
        <CardMedia
        sx={{ height: 250 }}
        image={img}
        title={name_of_centre}
        />
        <CardContent>
        <Typography noWrap gutterBottom variant="h5" component="div">
            {name_of_centre}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {short_description}
        </Typography>
        </CardContent>
        <CardActions sx={{marginTop: "auto", pb: 1}}>
            <Link style={{textDecoration: 'none', marginRight: 8}} to={"/stall/" + id} >
                <ButtonHawkerStore variant="outlined" title="Check it out!" centreID = {id}/>
            </Link>
            <Button 
                color="error" 
                startIcon={<DeleteIcon />}
                variant="outlined" 
                title="Delete Stall" 
                centreID = {id}
                onClick={handleClickOpen}>
                Delete Stall
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Confirm delete Stall?"}
                </DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-description" width={400}>
                    You are trying to delete the stall:<br/><br/>
                    <b>{name_of_centre}</b>
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button color="error" onClick={handleClose}>Back</Button>
                    <Button 
                        color="error" 
                        onClick={handleDelete} 
                        autoFocus
                        id={id}>
                        Confirm
                    </Button>
                </DialogActions>
            </Dialog>
        </CardActions>
        </Card>
    )
}