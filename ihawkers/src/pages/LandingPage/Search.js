import { Container } from "@mui/material";
import { useState } from "react";
import Searchbar from "./Searchbar";
import Categories from "./Categories";
const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <Container sx={{ paddingTop: 20 }}>
    
        <Categories />
        <Searchbar searchValue={searchValue} setSearchValue={setSearchValue} />
    </Container>
  );
};
export default Search;
