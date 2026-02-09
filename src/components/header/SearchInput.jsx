"use client";
import { Box, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchInput() {
  const [query, setQuery] = useState("");

  return (
    <Box
      sx={{
        height: "100%",
        maxWidth: "450px",
        flex: 1,
        display: "flex",
        alignItems: "center",
      }}
    >
      <TextField
        variant="outlined"
        placeholder="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: "white" }} />
            </InputAdornment>
          ),
          sx: {
            color: "#bdc8f0",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#bdc8f047",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#ffffff",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#7086ff",
            },
            bgcolor: "#1a223f",
            borderRadius: "8px",
            height: 50,
          },
        }}
        fullWidth
      />
    </Box>
  );
}
