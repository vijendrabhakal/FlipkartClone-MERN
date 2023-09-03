import { Box, Button, Typography } from "@mui/material";
import { useContext, useState } from "react";
import styled from "@emotion/styled";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Login from "../login/Login";
import { DataContext } from "../../context/AuthContext";
import Profile from "./Profile";

const Container = styled(Box)`
  display: flex;
  margin: 0 3% 0 auto;
  & > button,
  & > p,
  & > div {
    margin-right: 40px;
    align-items: center;
  }
`;
const LoginBtn = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  border-radius: 2px;
  padding: 5px 40px;
  border: 1px solid #dbdbdb;
  font-weight: 500;
  cursor: pointer;
  box-shadow: none;
  font-weight: 600;
  height: 32px;

  /* Remove hover effect */
  &:hover {
    background: #fff; /* Change this to match the default background color */
    color: #2874f0; /* Change this to match the default text color */
  }
`;

export default function CustomButtons() {
  const [open, setOpen] = useState(false);

  const { account, setAccount } = useContext(DataContext);

  const LoginDialog = () => {
    setOpen(true);
  };

  return (
    <>
      <Container>
        {account ? (
          <Profile account={account} setAccount={setAccount} />
        ) : (
          <LoginBtn onClick={LoginDialog} variant="contained">
            Login
          </LoginBtn>
        )}
        <Typography style={{ width: "135px", marginTop: 3, cursor: "pointer" }}>
          Become a Seller
        </Typography>
        <Typography style={{ marginTop: 3, cursor: "pointer" }}>
          More
        </Typography>
        <Box style={{ display: "flex", marginTop: 3 }}>
          <Typography style={{ cursor: "pointer" }}>
            <ShoppingCartIcon />
          </Typography>
          <Typography style={{ cursor: "pointer" }}>Cart</Typography>
        </Box>
      </Container>
      <Login open={open} setOpen={setOpen} />
    </>
  );
}
