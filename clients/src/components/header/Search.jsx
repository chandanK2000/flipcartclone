import React, { useEffect, useState } from "react";
import { InputBase, Box, styled, List, ListItem } from "@mui/material";
import { Search } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "../../redux/action/ProductActions";
import { Link } from "react-router-dom";
const SearchContainer = styled(Box)`
  background: #fff;
  width: 38%;
  border-radius: 2px;
  margin-left: 10px;
`;

const SearchInpubox = styled(InputBase)`
  width: 100%;
  padding-left: 20px;
`;

const SearchIconappear = styled(Box)`
  color: blue;
  padding: 4px 4px;
  font-size: 10px;
`;

const ListWrapper = styled(List)`
  position: absolute;
  color: #000;
  background: #ffffff;
  top: 100%;
  left: 0;
  width: calc(100% - 20px);
  max-height: 200px;
  overflow-y: auto; 
  z-index: 1; 
`;

const Searches = () => {
  const [text, setText] = useState("");
      const [open, setOpen] = useState(true);

  const getText = text => {
    setText(text);
    setOpen(true);
  };
  const { products } = useSelector(state => state.getProducts);
  // console.log(products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);
  return (
    <SearchContainer style={{ display: "flex", alignItems: "center" }}>
      <SearchInpubox
        placeholder="search for brands,products and more ..."
        onChange={e => getText(e.target.value)}
   
        value={text}
      />
      <SearchIconappear>
        <Search />
      </SearchIconappear>
      {text && (
        <ListWrapper>
          {products
            .filter(product =>
              product.title.longTitle.toLowerCase().includes(text.toLowerCase())
            )
            .map(product => (
              <ListItem>
                <Link
                  to={`/product/${product.id}`}
                  onClick={() => {
                    setText("");
                    setOpen(false); 
                  }}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {product.title.longTitle}
                </Link>
              </ListItem>
            ))}
        </ListWrapper>
      )}
    </SearchContainer>
  );
};

export default Searches;
