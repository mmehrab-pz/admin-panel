"use client"

import { createTheme } from "@mui/material/styles";
import { roboto } from "./font";

const theme = createTheme({
  palette: {
    primary: { main: "#1976d2" },
    secondary: { main: "#f50057" },
    background: { 
        default: "#f4f6f8", 
        sidebar: '#111936',
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

export default theme;
