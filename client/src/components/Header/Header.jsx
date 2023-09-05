import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import styled from "@emotion/styled";
import Search from "./Search";
import CustomButtons from "./CustomButtons";

import { Link } from "react-router-dom";

const StyledHeader = styled(AppBar)`
  background: #2874f0;
  height: 55px;
`;
const StyledBox = styled(Link)`
  text-decoration: none;
  margin-left: 12%;
  line-height: 0;
  color: inherit;
`;
const ExplorePlus = styled(Typography)`
  font-size: 11px;
  font-style: italic;
  font-weight: 500;
`;

const Plus = styled(Box)`
  color: #ffe500;
`;
const Img = styled("img")`
  width: 11px;
  height: 11px;
  margin-left: 1px;
`;

const ButtonsContainer = styled(Box)`
  margin: 0 5% 0 auto;
  margin-left: 48px;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Toolbar style={{ minHeight: 55 }}>
        <StyledBox to="/">
          <img
            style={{ width: 75 }}
            src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"
            alt="logo"
          />
          <Box style={{ display: "flex" }}>
            <ExplorePlus>
              Explore <Plus component="span">Plus</Plus>
            </ExplorePlus>
            <Img
              src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png"
              alt="sublogo"
            />
          </Box>
        </StyledBox>
        <Search />
        <ButtonsContainer>
          <CustomButtons />
        </ButtonsContainer>
      </Toolbar>
    </StyledHeader>
  );
};

export default Header;
