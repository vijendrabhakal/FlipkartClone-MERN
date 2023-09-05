import { Box, Button, styled } from "@mui/material";
import React from "react";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FlashOnIcon from "@mui/icons-material/FlashOn";

const LeftContainer = styled(Box)(({ theme }) => ({
  minWidth: "40%",
  padding: "40px 0 0 80px",
  [theme.breakpoints.down("md")]: {
    padding: "20px 40px",
  },
}));

const Image = styled("img")({
  padding: "15px 20px",
  border: "1px solid #f0f0f0",
  width: "95%",
});

const StyledButton = styled(Button)`
  width: 46%;
  border-radius: 2px;
  height: 50px;
  color: #fff;
`;
export default function ActionItem({ product }) {
  return (
    <LeftContainer>
      <Image src={product.detailUrl} />
      <br />
      <StyledButton
        style={{ marginRight: 10, background: "#ff9f00" }}
        variant="contained"
      >
        <ShoppingCartIcon />
        Add to Cart
      </StyledButton>
      <StyledButton style={{ background: "#fb641b" }} variant="contained">
        <FlashOnIcon /> Buy Now
      </StyledButton>
    </LeftContainer>
  );
}