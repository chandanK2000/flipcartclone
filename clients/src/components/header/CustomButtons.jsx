import React, { useState,useContext } from "react";
import { Button, Box, Typography, styled, Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Datacontext } from "../../context/Dataprovider";
import LogingDialog from '../login/LoginDiaglog';
import {Link} from "react-router-dom";
import Profile from "./Profile";
import { UseSelector, useSelector } from "react-redux";
const Container = styled(Link)(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.down("sm")]: {
    display: "block",
  },
}));


const Wrapper = styled(Box)(({ theme }) => ({
  margin: "0 3% 0 auto",
  display: "flex",
  "& > *": {
    marginRight: "40px !important",
    textDecoration: "none",
    color: "#FFFFFF",
    fontSize: 12,
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      color: "#2874f0",
      alignItems: "center",
      display: "flex",
      flexDirection: "column",
      marginTop: 10,
    },
  },
  [theme.breakpoints.down("sm")]: {
    display: "block",
  },
}));


const LoginButton = styled(Button)(({ theme }) => ({
  color: "#2874f0",
  background: "#FFFFFF",
  textTransform: "none",
  fontWeight: 600,
  borderRadius: 2,
  padding: "5px 20px",
  height: 32,
  boxShadow: "none",

  [theme.breakpoints.down("sm")]: {
    background: "#2874f0",
    color: "#FFFFFF",
  },

  "&:hover": {
    background: "#2874f0",
    color: "#FFFFFF",
  },
}));

  // <Component anchorEl={open} open={Boolean(open)} onClose={handleClose}>
  //   <MenuItem onClick={handleClose}>
  //     <Typography>
  //       {/* <PowerSettingsNewIcon /> */}
  //       Logout
  //     </Typography>
  //   </MenuItem>
  // </Component>;
const CustomButtons = () => {

  const [open,setopen]=useState(false);
    const cartDetails = useSelector(state => state.cart);
    const { cartItems } = cartDetails;

  const { account, Setaccount } = useContext(Datacontext);
  const opendialog=()=>{
    setopen(true);
  }
  return (
    <Wrapper>
      {
        // account ?<Typography>{account}</Typography> :
        account ? (
          <Profile account={account} Setaccount={Setaccount} />
        ) : (
          <LoginButton variant="contained" onClick={() => opendialog()}>
            Login
          </LoginButton>
        )
      }

      <Typography style={{ marginTop: 3, width: 135 }}>
        Become a Seller
      </Typography>
      <Typography style={{ marginTop: 3 }}>More</Typography>
      <Container to="/cart">
        <Badge badgeContent={cartItems.length} color="secondary">
          <ShoppingCartIcon />
        </Badge>
        <Typography style={{ marginLeft: 10 }}>Cart</Typography>
      </Container>
      <LogingDialog open={open} setopen={setopen} />
    </Wrapper>
  );
};

export default CustomButtons;
