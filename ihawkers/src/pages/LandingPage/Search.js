import { Container } from "@mui/material";
import { useState } from "react";
import Searchbar from "./Searchbar";
import SearchTitle from "./SearchTitle";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <Container sx={{ paddingTop: 20, paddingBottom: 10}}>
        <SearchTitle />
        <Searchbar filterBySearch={setSearchValue} size="small" />

    </Container>
  );
};
export default Search;
