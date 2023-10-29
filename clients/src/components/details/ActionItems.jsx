import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Box, Button, Typography, styled } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShopIcon from "@mui/icons-material/Shop";
import { addToCart } from "../../redux/action/cartAction";
import { useDispatch } from "react-redux";

// const LeftContainer = styled(Box)(({ theme }) => ({
//   minWidth: "40%",
//   padding: "40px 0 0 80px",
//   [theme.breakpoints.down("md")]: {
//     padding: "20px 40px",
//   },
// }));

const LeftContainer = styled(Box)(({ theme }) => ({
  minWidth: "40%",
  padding: "40px 0 0 80px",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  [theme.breakpoints.down("md")]: {
    padding: "20px 40px",
    alignItems: "center", // Center items on small screens
  },
}));


const Image = styled("img")`
  padding: "15px";
  width: 90%;
`;
const StyledButton = styled(Button)`
  width: 100%;
  border-radius: 2px;
  height: 40px;
  color: #fff;
`;

const ActionItems = ({ product }) => {
  const {id}=product;
  const [quantity,setquantity]=useState(1);
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const AddToCart = () => {
    dispatch(addToCart(id, quantity));
    navigate("/cart");
    
  };
  return (
    <LeftContainer>
      <Box style={{ padding: "15px 10px", border: "1px solid #f0f" }}>
        <Image src={product.detailUrl} alt="productimage" />
      </Box>
      <Typography>{product.mrp}</Typography>
      <StyledButton
        variant="contained"
        style={{ marginRight: 10, marginTop: 10, background: "#ff9f00" }}
        onClick={AddToCart}
      >
        <AddShoppingCartIcon />
        Add To Cart
      </StyledButton>
      <StyledButton
        variant="contained"
        style={{ marginRight: 10, marginTop: 10, background: "#fb541b" }}
      >
        <ShopIcon /> Buy Now
      </StyledButton>
    </LeftContainer>
  );
};
export default ActionItems;
