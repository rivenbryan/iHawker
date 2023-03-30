/**
 * A component that displays information about a hawker centre.
 * @param {Object} props - The props object.
 * @param {Object} props.hawker - The hawker centre object.
 * @returns {JSX.Element} - The component JSX.
 */

import React from 'react'
import Fade from 'react-reveal/Fade';
import { Paper, Typography,} from '@mui/material'
export default function List({hawker}) {

  return (
    <>
        <Typography variant="h6">Hawker Centres around you</Typography>
        <Typography variant="h7">Find out more by clicking one of the red icons!</Typography>
        {hawker && 
        <Fade left big>
          <Paper sx={{marginTop: 5, padding: 2}}elevation={5}>
              <Typography variant="h5">{hawker.name_of_centre}</Typography>
              <Typography variant="subtitle1">{hawker.long_description} </Typography>
              <Typography variant="subtitle1" sx={{marginTop: 2}}>{hawker.location_of_centre}</Typography>
          </Paper>
        </Fade>  
        }
    </>
  )
}
