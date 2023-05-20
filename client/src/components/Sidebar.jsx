import React from "react";
import {
  Avatar,
  AvatarGroup,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
  Typography,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ArticleIcon from "@mui/icons-material/Article";
import GroupsIcon from "@mui/icons-material/Groups";
import StorefrontIcon from "@mui/icons-material/Storefront";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LightModeIcon from "@mui/icons-material/LightMode";
import IMAGES from "../images/avatar";
/* import NightsStayIcon from "@mui/icons-material/NightsStay"; */

const Sidebar = () => {
  return (
    <Box flex={1} p={2} sx={{ minWidth: '150px', display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/">
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="Pages">
              <ListItemIcon>
                <ArticleIcon />
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>
          {/* <ListItem disablePadding>
            <ListItemButton component="a" href="#Placeholder-text">
              <ListItemIcon>
                <GroupsIcon />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#Placeholder-text">
              <ListItemIcon>
                <StorefrontIcon />
              </ListItemIcon>
              <ListItemText primary="Marketplace" />
            </ListItemButton>
          </ListItem> */}
          <ListItem disablePadding>
            <ListItemButton component="a" href="Friends">
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="Settings">
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="Account">
              <ListItemIcon>
                <AccountBoxIcon />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem title="Toggle Darkmode" disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LightModeIcon />
              </ListItemIcon>
              <Switch />
            </ListItemButton>
          </ListItem>
          <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={5} >
          <Avatar alt="kevinLenore" src={IMAGES.kevinLenore} />
          <Avatar alt="Tim Lee" src="" />
          <Avatar alt="Thorburn Frederica" src={IMAGES.thorburnFrederica} />
          <Avatar alt="Kenneth Emanuel" src={IMAGES.kennethEmanuel} />
          <Avatar alt="Philo Koneli" src="" />
          <Avatar alt="Mitzi Ornat" src={IMAGES.mitziOrnat} />
          <Avatar alt="Charli Lola" src={IMAGES.charliLola} />
          <Avatar alt="Friederike Keiran" src={IMAGES.friederikeKeiran} />
          <Avatar alt="Colene Ernestine" src={IMAGES.coleneErnestine} />
          <Avatar alt="Danielle Allen" src="" />
          <Avatar alt="James White" src="" />
          <Avatar alt="Martin Scouse" src="" />
          <Avatar alt="Henry Mansour" src="" />
          <Avatar alt="Violet Kushner" src="" />
          <Avatar alt="Ryanne Rice" src="" />
          <Avatar alt="Betsy Cane" src="" />
          <Avatar alt="Geoff Frank" src="" />
          <Avatar alt="Richard Sense" src="" />
          <Avatar alt="The PURGE" src="" />
          <Avatar alt="FOR ALL THAT IS HOLY, HIRE ME" src="" />
        </AvatarGroup>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
