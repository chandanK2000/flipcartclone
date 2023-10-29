import React from "react";
import { ImageURL } from "../../constants/data";
import { styled, Grid } from "@mui/material";

const MidSection = () => {
     const url =
       "https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50";

  // const url = "https://www.fda.gov/files/COVID%20testing%20policy%20drupal.jpg";

  const Wrapper = styled(Grid)`
    display: flex;
    margin-top: 20px;
    justify-content: space-between;
  `;

const Image = styled("img")(({ theme }) => ({
  display: "flex",
  marginTop: 20,
  justifyContent: "space-between",
  width: "100%",
  [theme.breakpoints.down("md")]: {
    objectFit: "cover",
    height: 120,
  },
}));


  return (
    <>
      <Wrapper lg={12} sm={12} md={12} xs={12} container>
        {ImageURL.map(image => (
          <Grid item lg={4} md={4} sm={12} xs={12}>
            <img src={image} style={{ width: "100%" }} alt="banner" />
          </Grid>
        ))}
      </Wrapper>
      <Image src={url} alt="covid-19" />
    </>
  );
};

export default MidSection;
