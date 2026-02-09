'use client'
import { ListItem, ListItemIcon } from "@mui/material";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import React, { useState } from "react";

export default function FullScreenButton() {
  const [screen, setScreen] = useState(false);

  const fullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setScreen(true);
    } else {
      document.exitFullscreen();
      setScreen(false);
    }
  };
  return (
    <ListItem
      onClick={fullScreen}
      sx={{
        width: 34,
        height: 34,
        bgcolor: "#29314F",
        borderRadius: "8px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transition: ".3s",
        cursor: "pointer",
        "&:hover": {
          bgcolor: "#2196F3",
          "& .MuiListItemIcon-root": { color: "#ffffffff" },
        },
      }}
    >
      <ListItemIcon sx={{ color: "#1e88e5", minWidth: 0, transition: ".3s" }}>
        {!screen ? <FullscreenIcon /> : <FullscreenExitIcon />}
      </ListItemIcon>
    </ListItem>
  );
}
