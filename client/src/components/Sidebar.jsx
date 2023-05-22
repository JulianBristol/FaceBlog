import { useRecoilValue } from 'recoil';
import { darkModeState } from '../darkModeState';
import React, { useState } from "react";
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
import NightsStayIcon from "@mui/icons-material/NightsStay";
import IMAGES from "../images/avatar";
import { Link } from "react-router-dom";
import makeStyles from "./styles";

const Sidebar = ({handleDarkMode}) => {
  const classes = makeStyles();
  const darkMode = useRecoilValue(darkModeState);
  console.log(darkMode)

  return (
    <Box flex={1} p={2} sx={{ minWidth: '150px', display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <List>
          <ListItem disablePadding>
            <Link className={`${classes.ListItemButtonContainer} ${darkMode ? classes.darkMode_Link : classes.lightMode_Link}`} to='/'>
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
            </Link>
          </ListItem>
          <ListItem disablePadding>
            <Link className={`${classes.ListItemButtonContainer} ${darkMode ? classes.darkMode_Link : classes.lightMode_Link}`} to='/Pages'>
            <ListItemButton>
              <ListItemIcon>
                <ArticleIcon />
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
            </Link>
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
            <Link className={`${classes.ListItemButtonContainer} ${darkMode ? classes.darkMode_Link : classes.lightMode_Link}`} to='/Friends'>
            <ListItemButton>
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </Link>
          </ListItem>
          <ListItem disablePadding>
            <Link className={`${classes.ListItemButtonContainer} ${darkMode ? classes.darkMode_Link : classes.lightMode_Link}`} to='/Settings'>
            <ListItemButton>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </Link>
          </ListItem>
          <ListItem disablePadding>
            <Link className={`${classes.ListItemButtonContainer} ${darkMode ? classes.darkMode_Link : classes.lightMode_Link}`} to='/Account'>
            <ListItemButton>
              <ListItemIcon>
                <AccountBoxIcon />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </Link>
          </ListItem>
          <ListItem title="Toggle Darkmode" disablePadding>
            <ListItemButton onClick={handleDarkMode}>
              <ListItemIcon>
                <LightModeIcon className={darkMode ? classes.darkMode_SwitchL : classes.lightMode_SwitchL} />
              </ListItemIcon>
              <Switch checked={darkMode}/>
              <ListItemIcon>
                <NightsStayIcon className={`${darkMode ? classes.darkMode_SwitchD : classes.lightMode_SwitchD}`} />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <Box sx={{ justifyContent: 'start', display: { xs: "block", md: "none" } }}>
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
        </Box>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
