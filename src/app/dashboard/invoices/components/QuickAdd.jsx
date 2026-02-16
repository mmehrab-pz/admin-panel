"use client";
import {
  Box,
  Button,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AddIcon from "@mui/icons-material/Add";

const options = ["Today", "This Month", "This Yaer"];
const ITEM_HEIGHT = 48;

export default function QuickAdd() {
  const [data, setData] = React.useState([
    { title: "Client", num: "85" },
    { title: "Items", num: "965" },
    { title: "Invoices", num: "70" },
    { title: "Quotes", num: "140" },
    { title: "Purchase Order", num: "450" },
    { title: "Bill", num: "1256" },
  ]);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ borderRadius: "8px", bgcolor: "#212946", p: "24px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography
            variant="body1"
            sx={{ fontSize: "20px", fontWeight: 500, color: "#d7dcec" }}
          >
            Quick Add
          </Typography>
        </Box>
        <Box sx={{}}>
          <IconButton
            aria-label="more"
            id="long-button"
            aria-controls={open ? "long-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MoreVertIcon
              sx={{ color: "#8492C4", transform: "rotate(90deg)" }}
            />
          </IconButton>
          <Menu
            id="long-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom", // منو از کجای anchor باز بشه
              horizontal: "right", // وسط anchor
            }}
            transformOrigin={{
              vertical: "top", // نقطه شروع منو خودش
              horizontal: "right", // وسط خودش
            }}
            slotProps={{
              paper: {
                sx: {
                  bgcolor: "#212946",
                  color: "white",
                  borderRadius: "8px",
                },
                style: {
                  maxHeight: ITEM_HEIGHT * 4.5,
                },
              },
              list: {
                "aria-labelledby": "long-button",
              },
            }}
          >
            {options.map((option) => (
              <MenuItem
                key={option}
                selected={option === "Pyxis"}
                onClick={handleClose}
                sx={{ fontSize: "14px", fontWeight: 400, colo: "#bdc8f0" }}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Box>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        {data.map((item, index) => {
          return (
            <Grid size={{xs:12,sm:6,md:4,lg:2}} key={index}>
              <Box
                sx={{
                  height: "95px",
                  p: "16px",
                  borderRadius: "8px",
                  border: "1px solid #e3e8ef33",
                  transition: ".3s",
                  "&:hover": {
                    boxShadow: "rgba(33, 150, 243, 0.1) 0px 2px 14px 0px",
                  },
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "12px",
                    fontWeight: 400,
                    color: "#bdc8f0",
                    textTransform: "capitalize",
                  }}
                >
                  {item.title}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mt: 2,
                  }}
                >
                  <Typography
                    variant="caption"
                    sx={{ fontSize: "20px", fontWeight: 600, color: "#d7dcec" }}
                  >
                    {item.num}
                  </Typography>
                  <Button
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "24px",
                      height: "24px",
                      border: "1px solid #e3e8ef33",
                      borderRadius: "5px",
                      minWidth: "0",
                    }}
                  >
                    <AddIcon sx={{ color: "#bdc8f0", fontSize: "16px" }} />
                  </Button>
                </Box>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
