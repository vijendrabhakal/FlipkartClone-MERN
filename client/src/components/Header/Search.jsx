import styled from "@emotion/styled";
import { InputBase, Box } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const SearchComponent = styled(Box)`
  width: 38%;
  background: #fff;
  margin-left: 10px;
  border-radius: 2px;
  display: flex;
`;
const StyledInputBase = styled(InputBase)`
  padding-left: 15px;
  width: 100%;
`;
const StyledSearchIcon = styled(Box)`
  padding: 5px 10px;
  color: #2874f0;
`;

export default function Search() {
  return (
    <>
      <SearchComponent>
        <StyledInputBase placeholder="Search for products,brands and more"></StyledInputBase>
        <StyledSearchIcon>
          <SearchIcon />
        </StyledSearchIcon>
      </SearchComponent>
    </>
  );
}
