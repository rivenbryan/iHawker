import React from 'react'
import Search from './Search'
import { TextField, InputAdornment , IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const Searchbar = ({searchValue, setSearchValue}) => {
    return (
        <TextField
        fullWidth
        variant="outlined"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
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