'use client'
import { Box, ListItem, ListItemIcon, Menu, MenuItem, Typography } from "@mui/material";
import React, { useState } from "react";
import TranslateIcon from "@mui/icons-material/Translate";

export default function LanguageMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [SelectedLanguage, setSelectedLanguage] = useState("English");

  return (
    <>
      <ListItem
        onClick={(e) => setAnchorEl(e.currentTarget)}
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
          <TranslateIcon />
        </ListItemIcon>
      </ListItem>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: "bottom", // منو از کجای anchor باز بشه
          horizontal: "center", // وسط anchor
        }}
        transformOrigin={{
          vertical: "top", // نقطه شروع منو خودش
          horizontal: "center", // وسط خودش
        }}
        PaperProps={{
          sx: {
            bgcolor: "#212946",
            color: "#fff",
            borderRadius: "10px",
            mt: 2,
            minWidth: 200,
          },
        }}
      >
        <MenuItem
          sx={{
            fontSize: 14,
            bgcolor: SelectedLanguage === "English" ? "#2E2E62" : "transparent",
            color: "#bdc8f0",
            paddingBlock: "14px",
            paddingInline: "16px",
            transition: ".3s",
            "&:hover": {
              bgcolor: "#2E2E62",
            },
          }}
          onClick={() => {
            setAnchorEl(null);
            setSelectedLanguage("English");
          }}
        >
          <Box sx={{ display: "flex", alignItems: "end", gap: 1 }}>
            <Typography variant="body1">English</Typography>
            <Typography
              variant="caption"
              sx={{ fontSize: 12, color: "#8492c4" }}
            >
              (UK)
            </Typography>
          </Box>
        </MenuItem>
        <MenuItem
          sx={{
            fontSize: 14,
            color: "#bdc8f0",
            bgcolor:
              SelectedLanguage === "français" ? "#2E2E62" : "transparent",
            paddingBlock: "14px",
            paddingInline: "16px",
            transition: ".3s",
            "&:hover": {
              bgcolor: "#2E2E62",
            },
          }}
          onClick={() => {
            setAnchorEl(null);
            setSelectedLanguage("français");
          }}
        >
          <Box sx={{ display: "flex", alignItems: "end", gap: 1 }}>
            <Typography variant="body1">français</Typography>
            <Typography
              variant="caption"
              sx={{ fontSize: 12, color: "#8492c4" }}
            >
              (french)
            </Typography>
          </Box>
        </MenuItem>
        <MenuItem
          sx={{
            fontSize: 14,
            color: "#bdc8f0",
            bgcolor: SelectedLanguage === "Română" ? "#2E2E62" : "transparent",
            paddingBlock: "14px",
            paddingInline: "16px",
            transition: ".3s",
            "&:hover": {
              bgcolor: "#2E2E62",
            },
          }}
          onClick={() => {
            setAnchorEl(null);
            setSelectedLanguage("Română");
          }}
        >
          <Box sx={{ display: "flex", alignItems: "end", gap: 1 }}>
            <Typography variant="body1">Română</Typography>
            <Typography
              variant="caption"
              sx={{ fontSize: 12, color: "#8492c4" }}
            >
              (romanian)
            </Typography>
          </Box>
        </MenuItem>
      </Menu>
    </>
  );
}
