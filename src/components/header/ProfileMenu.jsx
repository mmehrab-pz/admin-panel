import { ListItem, ListItemIcon } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import Image from "next/image";
import React from "react";

export default function ProfileMenu() {
  return (
    <ListItem
      sx={{
        width: 80,
        height: 50,
        borderRadius: "27px",
        bgcolor: "#122950",
        display: "flex",
        gap: 1,
        justifyContent: "center",
        alignItems: "center",
        transition: ".3s",
        cursor: "pointer",
        "&:hover": {
          bgcolor: "#E3F2FD",
        },
      }}
    >
      <Image src="/images/mehrab.png" alt="mehrab" width={34} height={34} />
      <ListItemIcon sx={{ color: "#1e88e5", minWidth: 0 }}>
        <SettingsIcon />
      </ListItemIcon>
    </ListItem>
  );
}
