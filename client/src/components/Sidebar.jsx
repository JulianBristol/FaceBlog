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

  return (
    <Box flex={1} p={2} sx={{ minWidth: '160px', display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <List>
          <ListItem disablePadding>
            <ListItemButton className={`${classes.ListItemButtonContainer} ${darkMode ? classes.darkMode_Link : classes.lightMode_Link}`} component="a" href="/">
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="HomePage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            
            <ListItemButton className={`${classes.ListItemButtonContainer} ${darkMode ? classes.darkMode_Link : classes.lightMode_Link}`} component="a" href="/Pages">
              <ListItemIcon>
                <ArticleIcon />
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton className={`${classes.ListItemButtonContainer} ${darkMode ? classes.darkMode_Link : classes.lightMode_Link}`} component="a" href="/Friends">
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton className={`${classes.ListItemButtonContainer} ${darkMode ? classes.darkMode_Link : classes.lightMode_Link}`} component="a" href="/Settings">
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton className={`${classes.ListItemButtonContainer} ${darkMode ? classes.darkMode_Link : classes.lightMode_Link}`} component="a" href="/Account">
              <ListItemIcon>
                <AccountBoxIcon />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
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
          <Typography variant="h6" fontWeight={100} className={`${darkMode ? classes.darkMode_Header6: ''}`}>
          Online Friends
        </Typography>
        <AvatarGroup max={5} className={`${darkMode ? classes.darkMode_AvatarGroup: ''}`} sx={{ justifyContent: 'start' }}>
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
