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

function App() {
  return (
    <Box>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-evenly">
        <Sidebar />
        <Router>
          <Routes>
            <Route path="/" exact element={<Feed />} />
            <Route path="/Projects" exact element={<Projects />} />        
            <Route path="/Projects/:id" element={<Project />} />
            <Route path="/Pages" exact element={<Pages />} />
            <Route path="/Friends" exact element={<Friends />} />
            <Route path="/Settings" exact element={<Settings />} />
            <Route path="/Account" exact element={<Account />} />
          </Routes>
        </Router>
        <Rightbar />
      </Stack>
    </Box>
  );
}

export default App;
