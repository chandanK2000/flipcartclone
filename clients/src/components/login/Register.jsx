import { TextField } from "@mui/material";
import React, { useState } from "react";
import { LoginButton, Wrapper } from "./FormComponents";
import { authenticateSignup } from "../../service/api";
import { Datacontext } from "../../context/Dataprovider";
import { useContext } from "react";
import {toast} from "react-toastify";
export default function Register({ handleClose }) {
  const [signup, setsignup] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    phone: "",
    password: "",
  });
  const onInputChange = event => {
    const { name, value } = event.target;
    setsignup({ ...signup, [name]: value });
  };

  const {account,Setaccount}=useContext(Datacontext); // here i don't have use account

  const signUp = async () => {
    // console.log(signup);
    const response = await authenticateSignup(signup);

    if (!response) return;
    handleClose();
    Setaccount(signup.firstname);
    toast(`${signup.firstname} Register Successfully`);
  };
  return (
    <Wrapper>
      <TextField
        variant="standard"
        onChange={onInputChange}
        name="firstname"
        value={signup.firstname}
        label="Enter Firstname"
      />
      <TextField
        variant="standard"
        onChange={onInputChange}
        name="lastname"
        value={signup.lastname}
        label="Enter Lastname"
      />
      <TextField
        variant="standard"
        onChange={onInputChange}
        name="username"
        value={signup.username}
        label="Enter Username"
      />
      <TextField
        variant="standard"
        onChange={onInputChange}
        name="email"
        value={signup.email}
        label="Enter Email"
      />
      <TextField
        variant="standard"
        onChange={onInputChange}
        name="password"
        value={signup.password}
        label="Enter Password"
      />
      <TextField
        variant="standard"
        onChange={onInputChange}
        name="phone"
        value={signup.phone}
        label="Enter Phone"
      />
      <LoginButton onClick={signUp}>Continue</LoginButton>
    </Wrapper>
  );
}
