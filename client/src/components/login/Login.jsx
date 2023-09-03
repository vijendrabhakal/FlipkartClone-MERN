import {
  Dialog,
  styled,
  Box,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import { useContext, useState } from "react";
import { authenticateSignup } from "../APIs/signup";
import { authenticateLogin } from "../APIs/login";
import { DataContext } from "../../context/AuthContext";

const Wrapper = styled(Box)`
  display: flex;
  width: 650px;
  height: 528px;
`;
const Left = styled(Box)`
  width: 32%;
  background: #2874f0
    url("https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png")
    center 85% no-repeat;
  color: #fff;
  padding: 40px 33px;
  font-size: 15px;
`;
const Right = styled(Box)`
  padding: 56px 35px 16px;
  position: relative;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  flex: 1;
  & > button,
  & > p {
    margin-top: 20px;
  }
`;

const LoginBtn = styled(Button)`
  text-transform: none;
  background: #fb641b;
  color: #fff;
  height: 48px;
  border-radius: 3px;
  &:hover {
    background: #fb641b;
    color: #fff;
  }
`;
const SignupContinue = styled(Button)`
  text-transform: none;
  background: #fb641b;
  color: #fff;
  height: 48px;
  border-radius: 3px;
  &:hover {
    background: #fb641b;
    color: #fff;
  }
`;
const RequestOTP = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  height: 48px;
  border-radius: 3px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 /20%);
`;
const PolicyText = styled(Typography)`
  color: #878787;
  font-size: 12px;
  font-weight: 400;
`;
const SignupText = styled(Typography)`
  color: #2874f0;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
`;

const LoginErrorMsg = styled(Typography)`
  color: #ff6161;
  font-size: 12px;
  line-height: 0;
  margin-bottom: 20px;
  font-weight: 600;
  font-style: inherit;
`;

export default function Login(props) {
  const accountInitials = {
    login: {
      view: "login",
      heading: "Login",
      text: "Get access to your Orders, Wishlist and Recommendations",
    },
    signup: {
      view: "signup",
      heading: "Looks like you're new here!",
      text: "Sign up with your mobile number to get started",
    },
  };

  const [account, toggleAccount] = useState(accountInitials.login);

  const { setAccount } = useContext(DataContext);

  const singupInitials = {
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    phone: "",
    password: "",
  };
  const LoginInitials = {
    username: "",
    password: "",
  };

  const [loginCredentials, setloginCredentials] = useState(LoginInitials);
  const [signupCredentials, setsignupCredentials] = useState(singupInitials);

  const [loginError, setloginError] = useState(false);

  const CloseDialog = () => {
    props.setOpen(false);
    toggleAccount(accountInitials.login);
    setloginError(false);
  };

  const toggleSignup = () => {
    toggleAccount(accountInitials.signup);
  };

  const handleSignup = (e) => {
    setsignupCredentials({
      ...signupCredentials,
      [e.target.name]: e.target.value,
    });
  };
  const SignupUser = async () => {
    let response = await authenticateSignup(signupCredentials);
    if (!response) {
      return;
    }
    setAccount(signupCredentials.firstname);
    CloseDialog();
  };

  const handleLogin = (e) => {
    setloginCredentials({
      ...loginCredentials,
      [e.target.name]: e.target.value,
    });
  };

  const LoginUser = async () => {
    const response = await authenticateLogin(loginCredentials);
    if (response && response.status === 200) {
      CloseDialog();
      setAccount(response.data.userdata.firstname);
    } else {
      setloginError(true);
    }
  };

  return (
    <>
      <Dialog
        onClose={CloseDialog}
        open={props.open}
        setOpen={props.setOpen}
        PaperProps={{ sx: { maxWidth: "unset", maxHeight: "unset" } }}
      >
        <Wrapper>
          <Left>
            <Typography variant="h5" style={{ fontSize: 28 }}>
              {account.heading}
            </Typography>
            <Typography
              style={{
                marginTop: 16,
                lineHeight: "150%",
                color: "#dbdbdb",
                fontSize: 18,
              }}
            >
              {account.text}
            </Typography>
          </Left>
          {account.view === "login" ? (
            <Right>
              <TextField
                name="username"
                onChange={handleLogin}
                label="Enter Username"
                variant="standard"
              ></TextField>
              {loginError && (
                <LoginErrorMsg>
                  Please enter valid Username/password
                </LoginErrorMsg>
              )}
              <TextField
                name="password"
                onChange={handleLogin}
                label="Enter password"
                variant="standard"
              ></TextField>
              <PolicyText>
                By continuing, you agree to Flipkart's Terms of Use and Privacy
                Policy.
              </PolicyText>
              <LoginBtn onClick={LoginUser}>Login</LoginBtn>
              <Typography style={{ textAlign: "center" }}>OR</Typography>
              <RequestOTP>Request OTP</RequestOTP>
              <SignupText onClick={toggleSignup}>
                New to Flipkart? Create an account
              </SignupText>
            </Right>
          ) : (
            <Right>
              <TextField
                name="firstname"
                label="Enter Firstname"
                onChange={handleSignup}
                variant="standard"
              ></TextField>
              <TextField
                name="lastname"
                label="Enter Lastname"
                onChange={handleSignup}
                variant="standard"
              ></TextField>
              <TextField
                name="username"
                label="Enter Username"
                onChange={handleSignup}
                variant="standard"
              ></TextField>
              <TextField
                name="email"
                label="Enter Email"
                onChange={handleSignup}
                variant="standard"
              ></TextField>
              <TextField
                name="phone"
                label="Enter Phone"
                onChange={handleSignup}
                variant="standard"
              ></TextField>
              <TextField
                name="password"
                label="Enter password"
                onChange={handleSignup}
                variant="standard"
              ></TextField>
              <PolicyText>
                By continuing, you agree to Flipkart's Terms of Use and Privacy
                Policy.
              </PolicyText>
              <SignupContinue onClick={SignupUser}>Continue</SignupContinue>
            </Right>
          )}
        </Wrapper>
      </Dialog>
    </>
  );
}
