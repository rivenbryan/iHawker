import React from 'react'

import { TextField, InputAdornment , IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const Searchbar = ({filterBySearch, size, value }) => {

    return (
        <TextField
        size=	{size}
        value={value}
        fullWidth
        variant="outlined"
        onChange={filterBySearch}
        placeholder="Search Stall or hawker centres..."
        InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconButton aria-label="search">
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
      />
    )
}

export default Searchbar