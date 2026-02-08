import { AppBar, Box, List, ListItem, ListItemIcon } from "@mui/material";
import Image from "next/image";
import React from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import TranslateIcon from "@mui/icons-material/Translate";
import StreamIcon from "@mui/icons-material/Stream";

export default function Header() {
  return (
    <AppBar
      sx={{
        width: "calc(100% - 260px)",
        height: "85px",
        bgcolor: "#111936",
      }}
    >
      <Box
        sx={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingInline: "24px",
        }}
      >
        <Box
          sx={{ height: "100%", border: "1px solid white", width: "300px" }}
        ></Box>
        <List
          sx={{
            height: "100%",
            width: "300px",
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
            gap: 2,
          }}
        >
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
            <ListItemIcon
              sx={{ color: "#d1c4e9", minWidth: 0, transition: ".3s" }}
            >
              <StreamIcon />
            </ListItemIcon>
          </ListItem>
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
                bgcolor: "#2196F3",
                "& .MuiListItemIcon-root": { color: "#ffffffff" },
              },
            }}
          >
            <ListItemIcon
              sx={{ color: "#1e88e5", minWidth: 0, transition: ".3s" }}
            >
              <TranslateIcon />
            </ListItemIcon>
          </ListItem>
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
            <ListItemIcon
              sx={{ color: "#ffc107", minWidth: 0, transition: ".3s" }}
            >
              <NotificationsNoneIcon />
            </ListItemIcon>
          </ListItem>
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
                bgcolor: "#2196F3",
                "& .MuiListItemIcon-root": { color: "#ffffffff" },
              },
            }}
          >
            <ListItemIcon
              sx={{ color: "#1e88e5", minWidth: 0, transition: ".3s" }}
            >
              <FullscreenIcon />
            </ListItemIcon>
          </ListItem>
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
              cursor: 'pointer',
              "&:hover": {
                bgcolor: "#E3F2FD",
              },
            }}
          >
            <Image
              src="/images/mehrab.png"
              alt="mehrab"
              width={34}
              height={34}
            />
            <ListItemIcon sx={{ color: "#1e88e5", minWidth: 0 }}>
              <SettingsIcon />
            </ListItemIcon>
          </ListItem>
        </List>
      </Box>
    </AppBar>
  );
}
