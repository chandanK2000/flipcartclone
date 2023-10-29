import { Typography, Box, styled, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

// const Component = styled(Box)`
//   width: 80%%;
//   height: 65vh;
//   background: #fff;
//   margin: 80px 140px;
// `;

const Component = styled(Box)`
  width: 80%;
  height: 65vh;
  background: #fff;
  margin: 80px 140px;

  ${props => props.theme.breakpoints.down("sm")} {
    width: 100%;
    margin: 10px 10px;
    padding: 10px;
  }
`;

const Container = styled(Box)`
  text-align: center;
  padding-top: 70px;
`;

const Image = styled("img")({
  width: "15%",
});

const EmptyCart = () => {
  const imgurl =
    "https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90";

  const navigate = useNavigate();

  const shopNow = () => {
    navigate("/");
  };
  return (
    <Component>
      <Container>
        <Image src={imgurl} />
        <Typography>Your cart is empty!</Typography>
        <Typography component="span">Add items to it now.</Typography>
        <Typography>
          <Button variant="contained" onClick={shopNow}>
            Shop Now
          </Button>
        </Typography>
      </Container>
    </Component>
  );
};

export default EmptyCart;
