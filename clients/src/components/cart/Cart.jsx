import React from "react";
import { useSelector } from "react-redux";
import { Typography, Box, Grid, styled, Button } from "@mui/material";
import CartItems from "./CartItems";
import TotalViews from "./TotalViews";
import EmptyCart from "./EmptyCart";

const Component = styled(Grid)(({ theme }) => ({
  padding: "30px 135px",
  display: "flex",
  [theme.breakpoints.down("sm")]: {
    padding: "15px 0",
  },
}));

const Header = styled(Box)`
  padding: 15px 24px;
  background: #fff;
`;

const BottomWrapper = styled(Box)`
  padding: 16px 22px;
  background: #fff;
  box-shadow: 0 -2px 10px 0 rgb(0 0 0 / 10%);
  border-top: 1px solid #f0f0f0;
`;

const StyledButton = styled(Button)`
  display: flex;
  margin-left: auto;
  background: #fb641b;
  color: #fff;
  border-radius: 2px;
  width: 200px;
  height: 40px;
  &:hover {
    background: #ff8c56;
  }
`;

const LeftComponent = styled(Grid)(({ theme }) => ({
  paddingRight: 15,
  [theme.breakpoints.down("sm")]: {
    marginBottom: 15,
  },
}));

const Cart = () => {
  const { cartItems } = useSelector(state => state.cart);

  // Compute the total quantity of items in the cart
  const quantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  
  return (
    <>
      {cartItems.length ? (
        <Component container>
          <LeftComponent item lg={9} md={9} sm={12} xs={12}>
            <Header>
              <Typography>My Cart({quantity})</Typography>
            </Header>
            {cartItems.map(item => (
              <CartItems key={item.id} item={item} />
            ))}
            <BottomWrapper>
              <StyledButton> Place order</StyledButton>
            </BottomWrapper>
          </LeftComponent>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <TotalViews cartItems={cartItems} />
          </Grid>
        </Component>
      ) : (
        <EmptyCart />
      )}
    </>
  );
};

export default Cart;
