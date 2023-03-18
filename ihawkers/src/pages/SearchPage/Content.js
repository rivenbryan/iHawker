import React from "react";
import CardComponent from "./CardComponent";
import { Grid } from "@mui/material";
import StallsCardComponent from "../HawkerPage/StallsCardComponent";
export default function Content({ list, name }) {
  console.log(name);
  return (
    <>
      <Grid sx={{ pt: 5 }} container spacing={5}>
        {name === "hawkerList"
          ? list &&
            list.map((item) => (
              <Grid item xs={4}>
                <CardComponent
                  type={name}
                  id={item._id}
                  img={item.img}
                  short_description={item.short_description}
                  name_of_centre={item.name_of_centre}
                />
              </Grid>
            ))
          : list &&
            list.map((item) => (
              <Grid item xs={4}>
                <StallsCardComponent
                  type={name}
                  id={item._id}
                  img={item.image.url}
                  description={item.description}
                  name_of_centre={item.stall_name}
                  avg_rating = {item.avg_rating}
                />
              </Grid>
            ))}
      </Grid>
    </>
  );
}
