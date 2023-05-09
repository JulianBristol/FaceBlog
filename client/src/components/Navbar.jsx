import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import React from "react";
import { useState } from "react";
import SearchOptions from "./SearchOptions";
import ProfilePicture from "../images/avatar/Profile Picture.jpg";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          JuDev
        </Typography>
        <Tooltip title="JuDev">
          <DeveloperModeIcon sx={{ display: { xs: "block", sm: "none" } }} />
        </Tooltip>
        <Box sx={{ width: "40%" }}>
          <SearchOptions />
        </Box>
        <Icons>
          {/* Link Icons to SQL Database for Messaging and Notifications */}
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={4} color="error">
            <NotificationsIcon />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            alt="Julian Bristol"
            src={ProfilePicture}
            onClick={(e) => {
              setOpen(true);
            }}
          />
        </Icons>
        <UserBox
          onClick={(e) => {
            setOpen(true);
          }}
        >
          <Avatar
            sx={{ width: 30, height: 30 }}
            alt="Julian Bristol"
            src={ProfilePicture}
          />
          <Typography variant="span">Julian</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => {
          setOpen(false);
        }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
        <MenuItem>Profile</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
