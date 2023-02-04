import React from 'react'

import { TextField, InputAdornment , IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const Searchbar = ({filterBySearch, size }) => {

    return (
        <TextField
        size=	{size}
        fullWidth
        variant="outlined"
        onChange={filterBySearch}
        placeholder="Search food or hawker centres..."
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