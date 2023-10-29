import React from "react";
import { navData } from "../../constants/data";
import { Box, styled, Typography } from "@mui/material";

const Component = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  margin: "55px 130px 0 130px !important",
  overflowX: "overlay",
  [theme.breakpoints.down("lg")]: {
    margin: "0px !important",
  },
}));


const Container=styled(Box)`
padding:12px 8px;
text-align:center;
`
const Text=styled(Typography)`
font-size:14px;
font-weight:bold;
font-family:inherit;

`
const Navbar = () => {
  return (
    <Component>
      {navData.map((data,index) => {
        return (
          <Container key={index}>
            <img src={data.url} alt="navimage" style={{ width: 64 }} />
            <Text>{data.text}</Text>
          </Container>
        );
      })}
    </Component>
  );
};

export default Navbar;
