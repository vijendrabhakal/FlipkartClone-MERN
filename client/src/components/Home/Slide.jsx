import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, Typography, styled, Button, Divider } from "@mui/material";
import Countdown from "react-countdown";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
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

const Wrapper = styled(Box)`
  margin-top: 10px;
  background: #ffffff;
`;

const Upper = styled(Box)`
  padding: 15px 20px;
  display: flex;
`;

const Timer = styled(Box)`
  display: flex;
  margin-left: 10px;
  align-items: center;
  color: #7f7f7f;
`;

const Deal = styled(Typography)`
  font-size: 22px;
  font-weight: 600;
  margin-right: 25px;
  line-height: 32px;
`;

const ViewAll = styled(Button)`
  margin-left: auto;
  background: #2874f0;
  border-radius: 2px;
  font-size: 13px;
  font-weight: 600;
`;

const Img = styled("img")`
  width: auto;
  height: 150px;
`;
const Text = styled(Typography)`
  font-size: 14px;
  margin-top: 5px;
`;

const renderer = ({ hours, minutes, seconds }) => {
  return (
    <Box variant="span">
      {hours}: {minutes}:{seconds} Left
    </Box>
  );
};

export default function Slide({ products, title, timer }) {
  return (
    <Wrapper>
      <Upper>
        <Deal>{title}</Deal>
        {timer && (
          <Timer>
            <img
              style={{ width: 24 }}
              src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg"
              alt="timer"
            />
            <Countdown
              date={Date.now() + 5.04e7}
              renderer={renderer}
            ></Countdown>
          </Timer>
        )}
        <ViewAll variant="contained">View All</ViewAll>
      </Upper>
      <Divider />
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
        keyBoardControl={true}
        centerMode={true}
      >
        {products &&
          products.map((products) => (
            <Box textAlign="center" style={{ padding: "25px 15px" }}>
              <Img src={products.url} alt="item" />
              <Text style={{ fontWeight: 600, color: "#212121" }}>
                {products.title.shortTitle}
              </Text>
              <Text style={{ color: "green" }}>{products.discount}</Text>
              <Text style={{ opacity: ".6", color: "#212121" }}>
                {products.tagline}
              </Text>
            </Box>
          ))}
      </Carousel>
    </Wrapper>
  );
}
