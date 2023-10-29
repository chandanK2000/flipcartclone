import React, { useState } from "react";
import {
  Box,
  Typography,
  styled,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { addEllipsis } from "./../utils/common-utils";
import ButtonGroups from "./ButtonGroup";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/action/cartAction";

const Component = styled(Box)`
  border-top: 1px solid #f0f0f0;
  border-radius: 0px;
  display: flex;
  background-color: #fff;
`;

const LeftComponent = styled(Box)`
  margin: 20px;
  display: flex;
  flex-direction: column;
`;

const SmallText = styled(Typography)`
  color: #878787;
  font-size: 14px;
  margin-top: 10px;
`;

const Cost = styled(Typography)`
  font-size: 18px;
  font-weight: 600;
`;

const MRP = styled(Typography)`
  color: #878787;
`;

const Discount = styled(Typography)`
  color: #388e3c;
`;

const Remove = styled(Button)`
  margin-top: 20px;
  font-size: 16px;
`;

const CartItems = ({ item }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [quantity, setQuantity] = useState(item.quantity || 1); // Add quantity state, defaulting to item.quantity or 1

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const removeItemFromCart = id => {
    dispatch(removeFromCart(id));
    handleClose();
  };

  return (
    <Component>
      <LeftComponent>
        <img src={item.url} style={{ height: 110, width: 110 }} alt="items" />
        <ButtonGroups quantity={quantity} setQuantity={setQuantity} />
      </LeftComponent>
      <Box style={{ margin: 20 }}>
        <Typography>{addEllipsis(item.title.longTitle)}</Typography>
        <SmallText>
          Seller:RetailNet
          <span>
            <img
              src="/fassured.jpg"
              alt="fassured"
              style={{ width: 50, marginLeft: 10 }}
            />
          </span>
        </SmallText>
        <Typography style={{ margin: "20px 0" }}>
          <Cost component="span">₹{item.price.cost * quantity}</Cost>&nbsp;
          <MRP component="span">
            <strike>₹{item.price.mrp * quantity}</strike>
          </MRP>
          &nbsp;
          <Discount component="span">{item.price.discount} off</Discount>
        </Typography>
        <Remove onClick={handleClickOpen}>Remove</Remove>

        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>{"Remove Items"}</DialogTitle>
          <DialogContent>
            <Typography style={{ padding: "30px 10px" }}>
              Are you sure you want to remove this item from your cart?
            </Typography>
          </DialogContent>
          <DialogActions style={{ justifyContent: "center" }}>
            <Button onClick={handleClose} variant="contained">
              Cancel
            </Button>
            <Button
              onClick={() => removeItemFromCart(item.id)}
              variant="contained"
              color="secondary"
            >
              Yes
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Component>
  );
};

export default CartItems;
