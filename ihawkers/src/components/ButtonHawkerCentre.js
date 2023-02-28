
import {Button} from "@mui/material";
import React, {useContext} from "react";
import { HawkerContext } from "../context/HawkerContext";

export default function ButtonHawkerCentre({centreID, title, variant}) {
    const {setOneHawkerCentre} = useContext(HawkerContext)
    const handleClick = async () => {
        const response = await fetch('http://localhost:4000/api/hawkercentre/' + centreID, {
          headers: { 
            'Access-Control-Allow-Origin': "http://localhost:4000"
        },
        credentials: "include"
        })
        const json = await response.json()
        // console.log(json)
        setOneHawkerCentre(json)
    }

  return (
    <Button variant={variant} onClick={handleClick}>{title}</Button>
  )
}
