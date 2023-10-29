import { Box, Button, Typography, styled } from "@mui/material";

const Components = styled(Box)`
  height: 70vh;
  width: 100vh;
  overflow: hidden;
`;

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 25px 35px;
  flex: 1;

  & > div,
  button,
  p {
    margin: 8px 0px;
  }
`;
const Image = styled(Box)`
  background: #2874f0
    url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)
    center 85% no-repeat;
  height: 100%;
  width: 28%;
  padding: 25px 35px;
  & > p,
  h5 {
    color: #ffffff;
    font-weight: 400;
  }
`;

const LoginButton = styled(Button)`
  text-transform: none;
  background-color: #fb641b;
  color: #fff;
  height: 48px;
  border-radius: 2px;
  &:hover {
    background-color: blue;
  }
`;

const Text = styled(Typography)`
  font-size: 12px;
  color: #878787;
`;

const Requestotp = styled(Button)`
  text-transform: none;
  background-color: #fff;
  color: #2874f0;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0px 2px 4px 0 rgb(0 0 0/ 20%);
`;

const CreateAccount = styled(Typography)`
  font-size: 14px;
  font-weight: 500;
  color: #2874f0;
  cursor: pointer;
  text-align: center;
`;
export {
  Wrapper,
  LoginButton,
  CreateAccount,
  Requestotp,
  Text,
  Components,
  Image,
};
