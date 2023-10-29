import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  IconButton,
  Drawer,
  List,
  styled,
} from "@mui/material";
import Searches from "./Search";
import CustomButtons from "./CustomButtons";
import {Link} from "react-router-dom";
import { Menu } from "@mui/icons-material";

const StyledHeader = styled(AppBar)`
  background: #2874f0;
  height: 55px;
`;

const Component = styled(Link)`
  margin-left: 12%;
  line-height: 0;
  text-decoration:none;
  color:inherit;
`;

const SubHeading = styled(Typography)`
  font-size: 12px;
  font-style: italic;
`;

const LinkText = styled(Link)`
  color:#fff;
`;

const Plusimage = styled("img")({
  width: 10,
  height: 10,
  marginLeft: 4,
});

const CustomButtonWrapper = styled("span")(({ theme }) => ({
  margin: "0 5% 0 auto",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));
const MenuButton = styled(IconButton)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("sm")]: {
    display: "block",
  },
}));
const Header = () => {
      const [open, setOpen] = useState(false);

  const logoURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";

  const subURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";

  const linkURL = "https://example.com";

    const handleClose = () => {
      setOpen(false);
    };

    const handleOpen = () => {
      setOpen(true);
    };

    const list = () => (
      <Box style={{ width: 250 }} onClick={handleClose}>
        <List>
          <listItem button>
            <CustomButtons />
          </listItem>
        </List>
      </Box>
    );
  return (
    <StyledHeader>
      <Toolbar style={{ minHeight: "55px" }}>
        <MenuButton color="inherit" onClick={handleOpen}>
          <Menu />
        </MenuButton>
        <Drawer open={open} onClose={handleClose}>
          {list()}
        </Drawer>

        <Component to="/">
          <img src={logoURL} style={{ width: 75 }} alt="logo" />
          <Box style={{ display: "flex" }}>
            <SubHeading>
              <LinkText
                href={linkURL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore &nbsp;
                <Box component="span" style={{ color: "#ffe500" }}>
                  plus
                </Box>
              </LinkText>
            </SubHeading>
            <Plusimage src={subURL} alt="plusimage" />
          </Box>
        </Component>
        <Searches />
        <CustomButtonWrapper>
          <CustomButtons />
        </CustomButtonWrapper>
      </Toolbar>
    </StyledHeader>
  );
};

export default Header;
