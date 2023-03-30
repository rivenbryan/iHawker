/**
 * React component that renders a search bar with an icon button.
 *
 * @param {Object} props - Props object.
 * @param {function} props.filterBySearch - Function to handle the search.
 * @param {string} props.size - Size of the search bar.
 * @param {string} props.value - Value of the search bar.
 * @returns {JSX.Element} Searchbar component.
 */

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