import { Box, TextField, Button, Divider, Typography, MenuItem} from '@mui/material';

import { HawkerContext } from '../../../context/HawkerContext';
import { ToastContainer, toast } from "react-toastify";
import React, { Fragment, useContext } from 'react';
import { useAuth } from '../../../context/userAuthContext';

export default function AddStoreForm() {
    const { getUser } = useAuth();
    const user = getUser();
    const { hawkerCentres } = useContext(HawkerContext);
    const arrOfHawkerCentres = hawkerCentres.map(hawkerCentre => ({ name: hawkerCentre.name_of_centre, id: hawkerCentre._id }));
    // console.log(arrOfHawkerCentres)
    const [stall_name, setStoreName] = React.useState('');
    const [hawker_centre_belong, setLocatedin] = React.useState('');
    const [description, setStoreDesc] = React.useState('');
    const stall_belong = user._id;
    const [topseller, setTopSeller] = React.useState([
        { name_of_food: "", price: parseFloat(""), tsImg: [] }
    ]);
    const [menu_item, setMenuItems] = React.useState([
        ""
    ]);

    const [image, setImage] = React.useState([]);
    const [tsImg, setTsImg] = React.useState([]);

    const handleChange = (event) => {

        if (event.target.id === 'storeName') {
            setStoreName(event.target.value)
        } else if (event.target.name === 'locatedin') {
            setLocatedin(event.target.value)
        } else if (event.target.id === 'description') {
            setStoreDesc(event.target.value)
        }

    }
    //handle and convert it in base 64
    const handleImage = (e) => {
        const file = e.target.files[0];
        setFileToBase(file);
        // console.log(file);
    }

    const setFileToBase = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImage(reader.result);
        }

    }

    const handleAddTopSeller = () => {
        const values = [...topseller];
        values.push({
            name_of_food: "",
            price: parseFloat(""),
            tsImg: []
        });
        setTopSeller(values);
    };

    const handleTopInputChange = (index, event) => {
        const values = [...topseller];
        const updatedValue = event.target.id;
        if (updatedValue === "price") {
            values[index][updatedValue] = parseFloat(event.target.value);
        }else if (updatedValue === "tsImg"){
            const reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.onloadend = () => {
                values[index][updatedValue] = reader.result;
            }
            
        }else {
            values[index][updatedValue] = event.target.value;
        }
        setTopSeller(values);
    };

    const handleAddOtherMenu = () => {
        const values = [...menu_item];
        values.push(
            ""
        );
        setMenuItems(values);
    }
    const handleOtherInputChange = (index, event) => {
        const values = [...menu_item];
        const updatedValue = event.target.id;
        // values[index][updatedValue] = event.target.value;
        values[index] = event.target.value;
        setMenuItems(values);
    };

    async function addStore(event) {
        const body = {
            stall_name,
            hawker_centre_belong,
            description,
            topseller,
            menu_item,
            stall_belong,
            image,
        };
        event.preventDefault();
        console.log(body);

        fetch('http://localhost:4000/api/stall', {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': "http://localhost:4000"
            },
            credentials: "include"
        }).then(async (response) => {
            if (response.ok) {
                // setUser(await response.json())
                //redirect to home page
                window.location.href = "/admin?state=success"
            }
            else {
                const errorMessage = await response.json().then(
                    err => err.error
                )
                console.log("error")
                window.location.href = "/addStore"
                toast.error(errorMessage);
            }
        })
    }
    return (
        <>
            <ToastContainer position="bottom-right" newestOnTop />
            <Box
                sx={{
                    width: "50%",
                    display: "flex",
                    justifyContent: "center",
                    margin: "0 auto",
                    marginTop: 4
                }}
            >
                <form style={{ width: "400px" }} onSubmit={addStore}>
                    {/* Input for Store Name */}
                    <TextField
                        style={{ width: "400px", marginBottom: 20 }}
                        type="text"
                        label="Store Name"
                        placeholder='E.g. Tian Tian Chicken Rice'
                        variant="outlined"
                        autoFocus
                        autoComplete='false'
                        required
                        id="storeName"
                        value={stall_name}
                        onChange={handleChange}
                    />

                    {/* Input for Store Location */}
                    <TextField
                        style={{ width: "400px", marginBottom: 20 }}
                        select
                        label="Located in:"
                        helperText="Select which Hawker Centre is the store located in."
                        required
                        name="locatedin"
                        value={hawker_centre_belong}
                        onChange={handleChange}
                    >
                        {arrOfHawkerCentres.map((option) => (
                            <MenuItem key={option.id} value={option.id}>
                                {option.name}
                            </MenuItem>
                        ))}
                    </TextField>

                    {/* Input for Store Description */}
                    <TextField
                        style={{ width: "400px", marginBottom: 20 }}
                        type="text"
                        label="Store Description"
                        placeholder='E.g. Tian Tian sells the best chicken rice in the west. Tian Tian was founded in 1900 and has won numerous awards since then. We pride ourselves in the pack a punch chilli'
                        variant="outlined"
                        required
                        multiline
                        id="description"
                        value={description}
                        onChange={handleChange}
                    />

                    {/* <div className="form-outline mb-4">
                        <input onChange={handleImage} type="file" id="formupload" name="image" className="form-control" />
                        <label className="form-label" htmlFor="form4Example2">Image</label>
                    </div> */}
                    {/* Store Image Upload */}
                    <Box sx={{ width: "400px"}}>
                        <img style={{width:"inherit", marginBottom: 20}} className="img-fluid" src={image} alt="" />
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
                    
                    {/* Top Seller Section */}
                    <Divider variant='' sx={{ '&::before': { borderColor: "#757575" }, '&::after': { borderColor: "#757575" } }}>
                        <Typography variant="body1"> Add Top Seller(s)</Typography>
                    </Divider>

                    {topseller.map((field, index) => (
                        <Fragment>
                            <Typography variant="body1">
                                Top Seller #{index + 1}:
                            </Typography>
                            <TextField
                                required
                                style={{ width: "400px", marginTop: 20 }}
                                type="text"
                                label="Top Seller Item Name"
                                placeholder="Signature Chicken Rice"
                                variant="outlined"
                                id="name_of_food"
                                value={field.topSellerName}
                                onChange={(event) => handleTopInputChange(index, event)}
                            />

                            <TextField
                                required
                                style={{ width: "400px", marginTop: 20, marginBottom: 20 }}
                                type="number"
                                inputProps={{step: "0.01"}}
                                label="Top Seller Item Price"
                                variant="outlined"
                                id="price"
                                placeholder='4.50'
                                value={field.topSellerPrice}
                                onChange={
                                    (event) => handleTopInputChange(index, event)
                                }
                            />
                            <Box sx={{ width: "400px"}}>
                                <img style={{width:"inherit", marginBottom: 20}} src={field.tsImg} alt="" />
                                <Button variant='contained' component="label" sx={{mb:2}}>
                                    Upload Image
                                    <input 
                                        hidden
                                        accept="image/*"
                                        onChange={(event) => handleTopInputChange(index, event)} 
                                        type="file" 
                                        id="tsImg" 
                                        name="image" 
                                    />
                                </Button>
                            </Box>
                        </Fragment>
                    ))}
                    <br />
                    {topseller.length > 2 ? (
                        <Button variant='contained'
                            disabled
                            sx={{ width: "400px" }}>
                            Max. 3 Top Sellers
                        </Button>
                    ) : (
                        <Button variant='contained'
                            sx={{ width: "400px" }}
                            onClick={() => handleAddTopSeller()}>
                            Add more Top Sellers
                        </Button>
                    )
                    }

                    {/* Other Menu Items Section */}
                    <Divider variant='' sx={{ mt: "20px", '&::before': { borderColor: "#757575" }, '&::after': { borderColor: "#757575" } }}>
                        <Typography variant="body1"> Other Menu Items</Typography>
                    </Divider>
                    {menu_item.map((field, index) => (
                        <Fragment>
                            <Typography variant="body1" sx={{ mb: "20px" }}>
                                Other Menu Item #{index + 1}:
                            </Typography>
                            <TextField
                                style={{ width: "400px", marginBottom: "20px" }}
                                required
                                type="text"
                                label="Menu Item:"
                                placeholder="Chicken Soup"
                                variant="outlined"
                                id="menuItemName"
                                value={field}
                                onChange={(event) => handleOtherInputChange(index, event)}
                            />
                        </Fragment>
                    ))}
                    {menu_item.length > 8 ? (
                        <Button variant='contained'
                            disabled
                            sx={{ width: "400px" }}>
                            Max. 9 Menu Items
                        </Button>
                    ) : (
                        <Button variant='contained'
                            sx={{ width: "400px" }}
                            onClick={() => handleAddOtherMenu()}>
                            Add more Menu Items
                        </Button>
                    )
                    }

                    <Divider variant='' sx={{ mt: 2, '&::before': { borderColor: "#757575" }, '&::after': { borderColor: "#757575" } }}>
                        <Typography variant="body1"> End of form</Typography>
                    </Divider>

                    <Button
                        type='submit'
                        fullWidth
                        variant='contained'
                        sx={{ mt: 2, mb: 2 }}
                    >
                        Submit
                    </Button>
                </form>

            </Box>
        </>
    )
}