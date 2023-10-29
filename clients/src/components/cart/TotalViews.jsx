import React, { useEffect, useState } from "react";
import { Typography, Box, styled } from "@mui/material";

const Header = styled(Box)`
  padding: 15px 24px;
  background: #fff;
  borderbottom: 1px solid #f0f0f0;
`;

const Heading = styled(Typography)`
  color: #878787;
`;

const Container = styled(Box)`
  padding: 15px 24px;
  background: #fff;
  & > p {
    margin-bottom: 20px;
    font-size: 14px;
  }
`;

const Price = styled(Typography)`
  float: right;
`;

const Discount = styled(Typography)`
  font-size: 16px;
  color: green;
`;

const TotalViews = ({ cartItems }) => {
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    totalAmount();
  }, [cartItems]);

  const totalAmount = () => {
    let totalPrice = 0;
    let totalDiscount = 0;

    cartItems.forEach(item => {
      totalPrice += item.price.cost;
      totalDiscount += item.price.mrp - item.price.cost;
    });

    setPrice(totalPrice);
    setDiscount(totalDiscount);
  };

  return (
    <Box>
      <Header>
        <Heading>Price Details</Heading>
      </Header>
      <Container>
        <Typography>
          Price({cartItems?.length}) item
          <Price component="span">₹ {price+discount}</Price>
        </Typography>
        <Typography>
          Discount
          <Price component="span">-₹ {discount}</Price>
        </Typography>
        <Typography>
          Delivery charges
          <Price component="span">₹ 40</Price>
        </Typography>
        <Typography variant="h6">
          Total Amount
          <Price component="span" variant="h6">
            {(price+discount+40)-discount}
          </Price>
        </Typography>
        <Discount>You will save {discount - 40} on this order</Discount>
      </Container>
    </Box>
  );
};

export default TotalViews;
