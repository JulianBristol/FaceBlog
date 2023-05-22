import { useRecoilState } from 'recoil';
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import { Box, Stack } from "@mui/material";
import Navbar from "./components/Navbar";
import {
  Route,
  Routes,
  BrowserRouter as Router,
} from "react-router-dom";
import Projects from "./components/Projects/Projects";
import Project from "./components/Projects/Project";
import Pages from "./components/Pages/Pages";
import Friends from "./components/Friends/Friends";
import Settings from "./components/Settings/Settings";
import Account from "./components/Profile/Account";
import { darkModeState } from './darkModeState';
import './App.css'
import { useEffect, useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useRecoilState(darkModeState);
  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  const cookieName = "darkMode";
  const expirationDays = 30;

  const setCookie = (name, value, days) => {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + days);
    document.cookie = `${name}=${value}; expires=${expirationDate.toUTCString()}; path=/`;
  };
  
  const getCookieValue = (name) => {
    const cookieValue = document.cookie
      .split("; ")
      .find((cookie) => cookie.startsWith(`${name}=`));
  
    if (cookieValue) {
      const [, value] = cookieValue.split("=");
      return value === "true";
    }
  
    return null;
  };

  // Set the initial darkMode state from the cookie
  useEffect(() => {
    const cookieValue = getCookieValue(cookieName);
    if (cookieValue !== null) {
      setDarkMode(cookieValue);
    }
  }, []);

  // Update the cookie when the darkMode state changes
  useEffect(() => {
    setCookie(cookieName, darkMode, expirationDays);
  }, [darkMode]);

  return (
    <Box className={`root ${darkMode ? 'darkMode-bg' : 'lightMode-bg'}`}>
      <Router>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-evenly">
          <Sidebar toggleDarkMode={darkMode} setToggleDarkMode={setDarkMode} handleDarkMode={handleDarkMode}/>
          <Box flex={4} p={2}>
            <Routes>
              <Route path="/" exact element={<Feed />} />
              <Route path="/Projects" exact element={<Projects />} />        
              <Route path="/Projects/:id" element={<Project />} />
              <Route path="/Pages" exact element={<Pages />} />
              <Route path="/Friends" exact element={<Friends />} />
              <Route path="/Settings" exact element={<Settings />} />
              <Route path="/Account" exact element={<Account />} />
            </Routes>
          </Box>
          <Rightbar />
        </Stack>
      </Router>
    </Box>
  );
}

export default App;
