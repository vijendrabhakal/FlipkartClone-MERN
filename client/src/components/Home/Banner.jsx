import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { bannerData } from "../data";
import { Box, styled } from "@mui/material";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Img = styled("img")`
  width: 100%;
  height: 280px;
`;

export default function Banner() {
  return (
    <>
      <Carousel
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        swipeable={false}
        draggable={false}
        responsive={responsive}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {bannerData.map((element) => (
          <Box>
            <Img src={element.url} alt="img" />
          </Box>
        ))}
      </Carousel>
    </>
  );
}
