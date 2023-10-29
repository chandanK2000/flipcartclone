import React from "react";
import Carousel from "react-multi-carousel";
import { Box, styled } from "@mui/material";
import { bannerData } from "../../constants/data";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
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

const Image = styled("img")(({ theme }) => ({
  width: "100%",
  height: 280,
  [theme.breakpoints.down("sm")]: {
    objectFit: "cover",
    height: 180,
  },
}));

const Banner = () => {
  return (
    <Carousel
      responsive={responsive}
      swipeable={true}
      draggable={true}
      // showDots={true}
      infinite={true}
      autoPlay={true}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      autoPlaySpeed={4000}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      containerClass="carousel-container"
    >
      {bannerData.map((banner, index) => {
        return (
          <Box key={index}>
            <Image src={banner.url} alt="banner" />
          </Box>
        );
      })}
    </Carousel>
  );
};

export default Banner;
