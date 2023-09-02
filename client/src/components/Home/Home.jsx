import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import { Box } from "@mui/material";
import styled from "@emotion/styled";

const Wrapper = styled(Box)`
  padding: 10px;
  background: #f2f2f2;
`;

export default function Home() {
  return (
    <>
      <Navbar />
      <Wrapper>
        <Banner />
      </Wrapper>
    </>
  );
}
