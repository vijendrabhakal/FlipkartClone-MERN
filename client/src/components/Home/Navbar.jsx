import { Box, Typography, styled } from "@mui/material";
import React from "react";
import { navData } from "../data";

const Component = styled(Box)`
  display: flex;
  margin: 55px 130px 0 130px;
  justify-content: space-between;
`;

const Container = styled(Box)`
  padding: 12px 8px;
  text-align: center;
`;

const Text = styled(Typography)`
  font-size: 14px;
  font-weight: 600;
  font-family: inherit;
`;

export default function Navbar() {
  return (
    <Component>
      {navData.map((element) => (
        <Container key={element.url}>
          <img src={element.url} alt="product" style={{ width: 64 }} />
          <Text>{element.text}</Text>
        </Container>
      ))}
    </Component>
  );
}
