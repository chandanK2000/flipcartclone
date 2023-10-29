import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";



const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 25px 35px;
  flex: 1;

  & > div,
  button,
  p {
    margin: 5px 0px;
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
    opacity:0.5;
  }
`;


export { Wrapper, LoginButton };
