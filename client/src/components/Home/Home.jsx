import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/material";
import styled from "@emotion/styled";

import Navbar from "./Navbar";
import Banner from "./Banner";
import Slide from "./Slide";
import MidSlide from "./MidSlide";
import MidSection from "./MidSection";

import { getProducts } from "../../redux/actions/productAction";

const Wrapper = styled(Box)`
  padding: 10px;
  background: #f2f2f2;
`;

export default function Home() {
  let { products } = useSelector((state) => state.getProducts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <Wrapper>
        <Banner />
        <MidSlide products={products} title="Deals of the day" timer={true} />
        <MidSection />
        <Slide products={products} title="Season's top Pick" timer={false} />
        <Slide products={products} title="Recommended for you" timer={false} />
        <Slide products={products} title="Monsoon Essentials" timer={false} />
      </Wrapper>
    </>
  );
}
