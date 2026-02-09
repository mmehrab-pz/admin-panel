import { ListItem, ListItemIcon } from "@mui/material";
import React from "react";
import StreamIcon from "@mui/icons-material/Stream";


export default function StreamButton() {
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
          bgcolor: "#7C4DFF",
        },
      }}
    >
      <ListItemIcon sx={{ color: "#d1c4e9", minWidth: 0, transition: ".3s" }}>
        <StreamIcon />
      </ListItemIcon>
    </ListItem>
  );
}
