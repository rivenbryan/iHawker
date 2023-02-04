import { Container } from "@mui/material";
import { useState } from "react";
import Searchbar from "./Searchbar";
import SearchTitle from "./SearchTitle";
import SearchCategory from "./SearchCategory";
const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <Container sx={{ paddingTop: 20, paddingBottom: 10}}>
        <SearchTitle />
        <Searchbar filterBySearch={setSearchValue} size="small" />
        <SearchCategory/>
    </Container>
  );
};
export default Search;
