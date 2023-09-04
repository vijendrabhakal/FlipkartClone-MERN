import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./Navbar";
import Banner from "./Banner";
import { Box } from "@mui/material";
import styled from "@emotion/styled";

import { getProducts } from "../../redux/actions/productAction";

const Wrapper = styled(Box)`
  padding: 10px;
  background: #f2f2f2;
`;

export default function Home() {
  let { products } = useSelector((state) => state.getProducts);
  console.log(products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <Wrapper>
        <Banner />
      </Wrapper>
    </>
  );
}
