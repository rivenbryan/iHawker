import React from 'react'
import CardComponent from './CardComponent'
import { Grid } from '@mui/material'
export default function Content({ filteredList }) {

  return (
    <>
      <Grid sx={{pt: 5}}container spacing={5}>
        {filteredList && filteredList.map((item) =>
          <Grid item xs={4}>
            <CardComponent id={item._id}img={item.img} short_description={item.short_description} name_of_centre={item.name_of_centre} />
          </Grid>
        )}

      </Grid>
    </>
  )
}
