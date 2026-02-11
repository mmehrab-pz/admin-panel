"use client";

import { Box, Drawer, useTheme } from "@mui/material";
import { usePathname } from "next/navigation";
import navigation from "@/config/navigation";
import SidebarHeader from "./SidebarHeader";
import { useState } from "react";
import SidebarSection from "./SidebarSection";

export default function Sidebar({ collapsed, onToggle }) {
  const theme = useTheme();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: collapsed ? '75px' : '260px',
        transition:'.4s',
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: collapsed ? '75px' : '260px',
        transition:'.4s',
          boxSizing: "border-box",
          height: "100vh",
          overflow: "hidden",
          borderRight: "none",
          bgcolor: theme.palette.background.sidebar,
        },
      }}
    >
      <SidebarHeader collapsed={collapsed} onToggle={onToggle} />
      <Box
        component="nav"
        sx={{
          flex: 1,
          overflowY: "auto",
          p: 2,
          pt: 0,
          scrollbarWidth: "none", // Firefox
          "&::-webkit-scrollbar": {
            display: "none", // Chrome / Edge
          },
        }}
      >
        {navigation.map((section, index) => (
          <SidebarSection section={section} key={index} collapsed={collapsed} />
        ))}
      </Box>
    </Drawer>
  );
}
