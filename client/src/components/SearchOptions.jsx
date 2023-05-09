import { Box, styled, TextField, Autocomplete } from "@mui/material";
import React from "react";



const SearchBox = styled(Autocomplete)(({ theme }) => ({
  padding: "8px 5px",
  margin: "5px",
  borderRadius: theme.shape.borderRadius,
  width: "100%",
}));


//Get list of projects from sql database
const projects = [
  { label: "JuDev Website", date: "2022-08-03" },
  { label: "null0", date: "null0" },
  { label: "null1", date: "null1" },
  { label: "null2", date: "null2" },
  { label: "null3", date: "null3" },
];

const SearchOptions = () => {
  return (
    <Box>
        <SearchBox
          disablePortal
          id="combo-box-demo"
          options={projects}
          renderInput={(params) => (
            <TextField {...params} sx={{ backgroundColor: "white", borderRadius: "5px" }} label="Projects" size="small" variant="filled"/>
          )}
        />
    </Box>
  );
};

export default SearchOptions;
