import React, { useContext, useState, useEffect } from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { HawkerContext } from '../../context/HawkerContext';
import ButtonHawkerCentre from '../../components/ButtonHawkerCentre';
const Searchbar = () => {
    const {hawkerCentres } = useContext(HawkerContext)
    const [value, setValue] = useState("");
    const [inputValue, setInputValue] = useState('');
    const [centreID, setCentreID] = useState('')

    const arrOfHawkerCentres = hawkerCentres.map(hawkerCentre => hawkerCentre.name_of_centre)

    useEffect( ()=> {
      setCentreID("")
      const result = hawkerCentres.filter(hawkerCentre => hawkerCentre.name_of_centre === inputValue);
      if(result != ""){
        setCentreID(result[0]._id)
      }      

    }, [inputValue])

    return (
      <>
      <Grid container>
        <Grid item xs={11}>
            <Autocomplete
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue);
            }}
            
            disablePortal
            freeSolo
            options={arrOfHawkerCentres}
            renderInput={(params) => <TextField {...params}/>}
            />
          </Grid>
          <Grid item xs={1} sx={{paddingLeft: 1, paddingTop: 1}}>
            <Link style={{textDecoration: 'none'}} to={"/hawkerCentre/" + centreID} >
              <ButtonHawkerCentre title="Search" variant="contained" centreID={centreID}/>
            </Link>
          </Grid>
      </Grid>
      </>
    )
}

export default Searchbar