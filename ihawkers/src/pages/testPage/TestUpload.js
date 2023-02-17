import * as React from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';

export default function TestUpload() {
    const uploadImage = (files) => {
        console.log(files[0])
    }
    return (
        <>
            <input type="file" onChange={(event) => { 
                uploadImage(event.target.files) 
            }} />
        </>
    );
}