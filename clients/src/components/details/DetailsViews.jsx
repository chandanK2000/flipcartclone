import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../redux/action/ProductActions";
import { Box, styled, Grid } from "@mui/material";
import ActionItems from "./ActionItems";
import ProductDetails from "./ProductDetails";
const Components = styled(Box)`
  background: #f2f2f2;
  padding: 10px 20px;
  margin-top: 55px;
`;
const Container = styled(Grid)(({ theme }) => ({
  background: "#FFFFFF",
  display: "flex",
  [theme.breakpoints.down("md")]: {
    margin: 0,
  },
}));

const RightContainer = styled(Grid)`
  margin: 40px 0px;
  padding:20px;
`;

const DetailsViews = () => {

  const dispatch = useDispatch();

  const { id } = useParams();

  const { loading, product } = useSelector(state => state.getProductDetails);
  console.log(product);

  useEffect(() => {
    if (product && id !== product.id) dispatch(getProductDetails(id));
  }, [dispatch, id, loading, product]);
  return (
    <Components>
      {product && Object.keys(product).length && (
        <Container container>
          <Grid item lg={4} md={4} sm={8} xs={12}>
            <ActionItems product={product} />
          </Grid>
          <RightContainer item lg={8} md={8} sm={8} xs={12}>
          
            <ProductDetails product={product} />
          </RightContainer>
        </Container>
      )}
    </Components>
  );
};

export default DetailsViews;
