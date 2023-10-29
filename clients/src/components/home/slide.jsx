import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, Typography, Button, Divider, styled } from "@mui/material";
import Countdown from "react-countdown";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Components = styled(Box)`
  margintop: 10px;
  background: #ffffff;
`;
const DealText = styled(Typography)`
  font-size: 22px;
  font-weight: 600;
  line-height: 32px;
  margin-right: 25px;
`;
const Deal = styled(Box)`
  padding: 15px 20px;
  display: flex;
`;
const Timer = styled(Box)`
  color: #7f7f7f;
  margin-left: 10px;
  display: flex;
  align-items: center;
`;

const ViewAllButton = styled(Button)`
  margin-left: auto;
  background-color: #2874f0;
  border-radius: 2px;
  font-size: 13px;
`;

const Image = styled("img")({
  width: "auto",
  height: 150,
});

const Text = styled(Typography)`
  font-size: 14px;
  margin-top: 5px;
`;
const Slide = ({ products, title, timer }) => {
  const navigate = useNavigate();

  const timerURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg";

  if (!Array.isArray(products)) {
    return null; // or you can render a loading state or an error message
  }
  // console.log(products.length);

  const renderer = ({ hours, minutes, seconds }) => {
    return (
      <Box variant="span">
        {hours} : {minutes} : {seconds} Left
      </Box>
    );
  };

  //view all items

  const viewAll = () => {
    navigate("/viewall");
  };

  return (
    <Components>
      <Deal>
        <DealText>{title}</DealText>
        {timer && (
          <Timer>
            <img src={timerURL} alt="timer" />
            <Countdown date={Date.now() + 5.04e7} renderer={renderer} />
          </Timer>
        )}

        <ViewAllButton variant="contained" color="primary" onClick={viewAll}>
          view all
        </ViewAllButton>
      </Deal>
      <Divider />
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={true}
        infinite={true}
        autoPlay={true}
        keyBoardControl={true}
        centerMode={true}
        autoPlaySpeed={4000}
        containerClass="carousel-container"
      >
        {products.map((product, index) => (
          <>
            <Link
              to={`product/${product.id}`}
              style={{ textDecoration: "none" }}
            >
              <Box textAlign="center" style={{ padding: "25px 15px" }}>
                <Image key={index} src={product.url} alt={`product-${index}`} />
                <Text style={{ fontWeight: 600, color: "#212121" }}>
                  {product.title.shortTitle}
                </Text>
                <Text style={{ color: "green" }}>{product.discount}</Text>
                <Text style={{ color: "#212121", opacity: ".6" }}>
                  {product.tagline}
                </Text>
              </Box>
            </Link>
          </>
        ))}
      </Carousel>
    </Components>
  );
};

export default Slide;
