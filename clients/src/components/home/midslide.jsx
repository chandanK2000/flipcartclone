import { Box, styled } from "@mui/material";
import React from "react";
import Slide from "./slide.jsx";

const Midslide = ({ products, title, timer }) => {
  const Component = styled(Box)`
    display: flex;
  `;

  const LeftComponent = styled(Box)(({ theme }) => ({
    width: "83%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  }));


 const RightComponent = styled(Box)(({ theme }) => ({
   marginTop: 10,
   background: "#FFFFFF",
   width: "17%",
   padding: 5,
   textAlign: "center",
   [theme.breakpoints.down("md")]: {
     display: "none",
   },
 }));

  const adURL =
    "https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70";

  return (
    <Component>
      <LeftComponent>
        <Slide products={products} title={title} timer={timer} />
      </LeftComponent>
      <RightComponent>
        <img src={adURL} style={{ width: 217 }} alt="ad" />
      </RightComponent>
    </Component>
  );
};

export default Midslide;