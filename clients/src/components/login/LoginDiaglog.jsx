import React, { useState } from "react";
import { Dialog, Box, TextField, Typography, styled } from "@mui/material";
import { authenticateLogin } from "../../service/api";
import Register from "./Register";
import { Datacontext } from "./../../context/Dataprovider";
import { useContext } from "react";
import {toast} from "react-toastify"
import {
  Wrapper,
  LoginButton,
  CreateAccount,
  Requestotp,
  Text,
  Components,
  Image,
} from "./logincss";

const accountInitialvalues = {
  login: {
    view: "login",
    heading: "Login",
    subHeading: "Get access to your Orders, Wishlist and Recommendations",
  },
  signup: {
    view: "signup",
    heading: "Looks like you're new here!",
    subHeading: "Sign up with your mobile number to get started",
  },
};

const Error = styled(Typography)`
  font-size: 14px;
  font-weight: 300;
  color: #ff6161;
`;
const LoginDiaglog = ({ open, setopen }) => {
  const [accounts, toggleAccount] = useState(accountInitialvalues.login);
  const [loginValues, setLoginValues] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setLoginValues({
      ...loginValues,
      [name]: value,
    });
    seterror(false);
  };

  const [error, seterror] = useState(false);
  const { account, Setaccount } = useContext(Datacontext);
  const userLogin = async () => {
    // console.log(loginValues);
    let response = await authenticateLogin(loginValues);
    console.log(response);
    if (response.status === 200) {
      handleClose();
      // Setaccount(loginValues.username);
      Setaccount(response.data.data.firstname);
          toast("user login successfully");

    } else {
      seterror(true);
    }
  };

  const togglesignup = () => {
    toggleAccount(accountInitialvalues.signup);
  };

  const handleClose = () => {
    setopen(false);
    toggleAccount(accountInitialvalues.login);
    seterror(false);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{ sx: { maxWidth: "unset" } }}
    >
      <Components>
        <Box style={{ display: "flex", height: "100%" }}>
          <Image>
            <Typography variant="h5">{accounts.heading}</Typography>
            <Typography style={{ marginTop: 20 }}>
              {accounts.subHeading}
            </Typography>
          </Image>
          {accounts.view === "login" ? (
            <Wrapper>
              <TextField
                variant="standard"
                label="Enter User number"
                name="username"
                value={loginValues.email}
                onChange={handleInputChange}
                sx={{ marginBottom: 2 }} // Added this line
              />
              {error && <Error>Please enter valid username and password</Error>}
              <TextField
                variant="standard"
                label="Enter Password"
                type="password"
                name="password"
                value={loginValues.password}
                onChange={handleInputChange}
                sx={{ marginBottom: 2 }} // Added this line
              />

              <Text>
                By continuing, you agree to Flipkart's Terms of Use and Privacy
                Policy.
              </Text>
              <LoginButton onClick={userLogin}>Login</LoginButton>
              <Typography style={{ textAlign: "center" }}>OR</Typography>
              <Requestotp>Request OTP</Requestotp>
              <CreateAccount onClick={togglesignup}>
                New to flipkart? Create Account
              </CreateAccount>
            </Wrapper>
          ) : (
            <>
              <Register handleClose={handleClose}/>
            </>
          )}
        </Box>
      </Components>
    </Dialog>
  );
};

export default LoginDiaglog;
