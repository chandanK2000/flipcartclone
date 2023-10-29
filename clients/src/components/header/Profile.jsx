import {
  Typography,
  Box,
  Menu,
  MenuItem,
  styled,
  ClickAwayListener,
} from "@mui/material";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Profile = ({ account, Setaccount }) => {
  const [open, Setopen] = useState(false);

  const handleClick = event => {
    Setopen(event.currentTarget);
  };

  const handleClose = () => {
    Setopen(false);
  };

  const LogoutUser = () => {
    Setaccount("");
    toast.success("User Logout successful!");
  };

  const Component = styled(Menu)`
    margin-top: 5px;
  `;

  const Logout = styled(Typography)`
    color: blue;
  `;
  return (
    <ClickAwayListener onClickAway={handleClose}>
      <Box onClick={handleClick}>
        <Typography style={{ margintop: 3, cursor: "pointer" }}>
          {account}
        </Typography>
        <Component
          anchorEl={open}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem>Profile</MenuItem>
          <MenuItem>My account</MenuItem>
          {/* <Divider /> */}
          <MenuItem>
            {/* <ListItemIcon>
              <PersonAdd fontSize="small" />
            </ListItemIcon> */}
            Add another account
          </MenuItem>
          <MenuItem>
            {/* <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon> */}
            Settings
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleClose();
              LogoutUser();
            }}
          >
            {/* <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon> */}
            <Logout>Logout</Logout>
          </MenuItem>
        </Component>
      </Box>
    </ClickAwayListener>
  );
};

export default Profile;
