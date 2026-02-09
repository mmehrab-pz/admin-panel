import { ListItem, ListItemIcon } from "@mui/material";
import React from "react";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";


export default function Notifications() {
  return (
    <ListItem
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
          bgcolor: "#FFC107",
          "& .MuiListItemIcon-root": { color: "#1a1a1aff" },
        },
      }}
    >
      <ListItemIcon sx={{ color: "#ffc107", minWidth: 0, transition: ".3s" }}>
        <NotificationsNoneIcon />
      </ListItemIcon>
    </ListItem>
  );
}
