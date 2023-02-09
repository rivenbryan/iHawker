
import {Button} from "@mui/material";
import React, {useContext} from "react";
import { HawkerContext } from "../context/HawkerContext";

export default function ButtonHawkerCentre({centreID}) {
    const {setOneHawkerCentre} = useContext(HawkerContext)
    const handleClick = async () => {
        const response = await fetch('http://localhost:4000/api/hawkercentre/' + centreID)
        const json = await response.json()
        // console.log(json)
        setOneHawkerCentre(json)
    }

  return (
    <Button variant="outlined" onClick={handleClick}>Check it out!</Button>
  )
}
