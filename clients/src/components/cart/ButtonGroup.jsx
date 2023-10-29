import React from "react";
import { Button, ButtonGroup, styled } from "@mui/material";

const Component = styled(ButtonGroup)`
  margin-top: 30px;
`;

const StyledButton = styled(Button)`
  border-radius: 50%;
`;

const ButtonGroups = ({ quantity, setQuantity }) => {
  const handleIncrement = () => {
    setQuantity(quantity + 1);
      console.log(quantity);

  };

 
  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
            console.log(quantity);

    }
  };

  return (
    <Component>
      <StyledButton onClick={handleDecrement} disabled={quantity === 1}>
        -
      </StyledButton>
      <Button disabled>{quantity}</Button>
      <StyledButton onClick={handleIncrement}>+</StyledButton>
    </Component>
  );
};

export default ButtonGroups;
