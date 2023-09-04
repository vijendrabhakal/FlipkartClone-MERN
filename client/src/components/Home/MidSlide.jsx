import { Box, styled } from "@mui/material";
import Slide from "./Slide";

const Wrapper = styled(Box)`
  display: flex;
`;
const Left = styled(Box)(({ theme }) => ({
  width: "83%",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));
const Right = styled(Box)(({ theme }) => ({
  marginTop: 10,
  background: "#FFFFFF",
  width: "17%",
  marginLeft: 10,
  padding: 5,
  textAlign: "center",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export default function MidSlide({ products, title, timer }) {
  return (
    <Wrapper>
      <Left>
        <Slide products={products} title={title} timer={timer} />
      </Left>
      <Right>
        <img
          src="https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70"
          alt="Ad"
          style={{ width: "217px" }}
        />
      </Right>
    </Wrapper>
  );
}
