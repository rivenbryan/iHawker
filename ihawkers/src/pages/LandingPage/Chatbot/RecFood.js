import { Typography, Link} from '@mui/material';

import React, { useContext, useEffect, useState } from 'react'
import { HawkerContext } from '../../../context/HawkerContext'

export default function RecFood() {
    const [randomFood, setRandomFood] = useState("")
    const { hawkerStores } = useContext(HawkerContext)

    useEffect( ()=> {
        setRandomFood(hawkerStores[Math.floor(Math.random() * hawkerStores.length)])
    }, [])
   
    console.log(randomFood)
    return (
        <>
        <Typography variant="subtitle2"> {randomFood.stall_name}</Typography>           
        </>
    )
}
