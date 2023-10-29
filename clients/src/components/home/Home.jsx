import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { Box, styled } from "@mui/material";
import Slide from "./slide.jsx";
import Banner from "./Banner";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../redux/action/ProductActions";
import MidSlide from "./midslide";
import MidSection from "./MidSection";
const Containers = styled(Box)`
  padding: 20px 10px;
  background-color: #f2f2f2;
`;
const Home = () => {
  const { products } = useSelector(state => state.getProducts);

  // console.log(products);

  // {products:[{},{},{}]}
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);
  return (
    <>
      <Navbar />
      <Containers>
        <Banner />
        {/* <Slide products={products} title="Deal of the Day" timer={true} /> */}
        <MidSlide products={products} title="Deal of the Day" timer={true} />
        <MidSection/>
        {/* <h3>ldkjflskdf</h3> */}
        <Slide products={products} title="Discounts for You" timer={false} />
        <Slide products={products} title="Suggesting items" timer={false} />
        <Slide products={products} title="Top Selection" timer={false} />
        <Slide products={products} title="Recomended Items" timer={false} />
        <Slide products={products} title="Trending Offers" timer={false} />
        <Slide products={products} title="Session top's Picks" timer={false} />
        <Slide
          products={products}
          title="Top Deaks on Accessories"
          timer={false}
        />
      </Containers>
    </>
  );
};

export default Home;
