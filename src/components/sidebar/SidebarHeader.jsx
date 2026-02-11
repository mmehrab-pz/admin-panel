"use client";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, IconButton, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function SidebarHeader({ collapsed, onToggle }) {
  return (
    <Box
      sx={{
        width: "100%",
        height: 85,
        display: "flex",
        alignItems: "center",
        justifyContent: collapsed ? "center" : 'space-between',
        p: 2,
      }}
    >
      {!collapsed && (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Image src="/images/berries.png" alt="Logo" width={40} height={40} />
          <Typography
            variant="h6"
            sx={{
              color: "white",
              fontSize: 20,
              fontWeight: 500,
              textTransform: "uppercase",
              ml: 1,
            }}
          >
            berry
          </Typography>
        </Box>
      )}
      <IconButton
        onClick={onToggle}
        sx={{
          width: "35px",
          height: "35px",
          borderRadius: "8px",
          bgcolor: "#212946",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#7c4dff",
          transition: ".3s",
          cursor: "pointer",
          "&:hover": {
            bgcolor: "#7C4DFF",
            color: "white",
          },
        }}
      >
        <MenuIcon />
      </IconButton>
    </Box>
  );
}
