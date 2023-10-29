import React, { useEffect } from "react";
import { getProduct } from "../../redux/action/ProductActions";
import { useDispatch, useSelector } from "react-redux";
import { Typography, Card, Grid, styled, Box, Divider } from "@mui/material";
import {Link } from "react-router-dom"
const Image=styled('img')`
height:250px;
width:auto;

`

const Heading = styled(Typography)`
  font-size: 14px;
  // text-align:center;
`;
const ViewAll = () => {
  const { products } = useSelector(state => state.getProducts);
  console.log(products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);
              
  return (
    <Grid container spacing={1} style={{ padding: 10 }}>
      {products.map((item, index) => (
        <Grid item key={index} lg={3} md={3} sm={6} xs={12}>
          <Link>
            <Card
              sx={{
                width: "100%",
              }}
            >
              <Box>
                <Image src={item.url} alt="products" />
              </Box>
              <Divider />
              <Box>
                <Heading gutterBottom variant="h5" component="div">
                  {item.discount}
                </Heading>
                <Heading gutterBottom variant="h5" component="div">
                  {item.title.shortTitle}
                </Heading>
              </Box>
            </Card>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default ViewAll;
