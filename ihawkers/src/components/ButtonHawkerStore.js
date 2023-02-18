
import {Button} from "@mui/material";
import React, {useContext} from "react";
import { HawkerContext } from "../context/HawkerContext";

export default function ButtonHawkerStore({centreID, title, variant}) {
    const {setOneHawkerStore} = useContext(HawkerContext)
    const handleClick = async () => {
        const response = await fetch('http://localhost:4000/api/stall/' + centreID)
        const json = await response.json()
        console.log("buttonStore: ")
        console.log(json)
        setOneHawkerStore(json)
    }

  return (
    <Button variant={variant} onClick={handleClick}>{title}</Button>
  )
}
