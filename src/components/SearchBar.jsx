import React from "react";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = () => {
  return (
    <Paper
      component="form"
      onSubmit={() => {}}
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        paddingLeft: 2,
        boxShadow: "none",
        mr: { sm: 5 },
        backgroundColor: "#A00356",
      }}
    >
      <input
        className="search-bar"
        placeholder="Search..."
        value=""
        onChange={() => {}}
        style={{ backgroundColor: "#A00356", border: "none", color: "#fff" }}
      />
      <IconButton
        type="submit"
        sx={{ p: "10px", color: "#fff", backgroundColor: "#A00356" }}
      >
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
