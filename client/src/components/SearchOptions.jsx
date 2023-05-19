import { Box, styled, TextField, Autocomplete } from "@mui/material";
import React, { useState } from "react";
import posts from "../posts.json"



const SearchBox = styled(Autocomplete)(({ theme }) => ({
  padding: "8px 5px",
  margin: "5px",
  borderRadius: theme.shape.borderRadius,
  width: "100%",
}));


const SearchOptions = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  //Get list of projects from data source
  const projects = posts.map((post) => ({ id: post.id, tags: post.tags }));
  // Sort the projects array alphabetically by id
  projects.sort((a, b) => a.id.localeCompare(b.id));

  const handleChange = (event, value) => {
    setSelectedOption(value);
  }


  return (
    <Box>
        <SearchBox
          disablePortal
          id="search-projects"
          options={projects.map(project => project.id)}
          onChange={handleChange}
          value={selectedOption}
          renderInput={(params) => (
            <TextField {...params} sx={{ backgroundColor: "white", borderRadius: "5px" }} label="Projects" size="small" variant="filled"/>
          )}
        />
    </Box>
  );
};

export default SearchOptions;
