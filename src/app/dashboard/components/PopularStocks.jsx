"use client";
import { Box, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import React, { useState } from "react";
import { SparkLineChart } from "@mui/x-charts";
import ExpandLessOutlinedIcon from "@mui/icons-material/ExpandLessOutlined";
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';

const options = ["Today", "This Month", "This Yaer"];
const ITEM_HEIGHT = 48;

export default function PopularStocks() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [data, setData] = useState([
    { title: "Bajaj Finery", price: "$1839.00", pal: "10%", status: "profit" },
    { title: "TTML", price: "$100.00", pal: "10%", status: "loss" },
    { title: "Reliance", price: "$$200.00", pal: "10%", status: "profit" },
    { title: "TCML", price: "$189.00", pal: "10%", status: "loss" },
    { title: "Stolon", price: "$189.00", pal: "10%", status: "loss" },
  ]);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ bgcolor: "#212946", borderRadius: "8px", padding: "24px" }}>
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
            sx={{ fontSize: "16px", fontWeight: 600, color: "#d7dcec" }}
          >
            Popular Stocks
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
            <MoreVertIcon sx={{ color: "white" }} />
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
      <Box sx={{ bgcolor: "#D1C4E9", borderRadius: "8px", mt: 2 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            paddingInline: "16px",
            pt: "16px",
          }}
        >
          <Box>
            <Typography
              variant="body1"
              sx={{ fontSize: "14px", fontWeight: 500, color: "#651fff" }}
            >
              Bajaj Finery
            </Typography>
            <Typography
              variant="caption"
              sx={{ fontSize: "12px", fontWeight: 400, color: "#424242" }}
            >
              10% Profit
            </Typography>
          </Box>
          <Typography
            variant="h6"
            sx={{ fontSize: "16px", fontWeight: 600, color: "#424242" }}
          >
            $1839.00
          </Typography>
        </Box>
        <Box>
          <SparkLineChart
            data={[0, 15, 10, 50, 30, 40, 25]}
            height={120}
            curve="natural"
            area={true}
            colors={["#651fff"]} // 🎨 رنگ خط و fill
            sx={{
              "& .MuiAreaElement-root": {
                fill: "rgba(101, 31, 255, 0.3)", // رنگ ناحیه با شفافیت
              },
              "& .MuiLineElement-root": {
                strokeWidth: 2,
              },
            }}
          />
        </Box>
      </Box>
      <Box sx={{ mt: 3 }}>
        {data.map((item, index) => {
          return (
            <>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <Typography
                    variant="body1"
                    sx={{ fontSize: "14px", fontWeight: 500, color: "#bdc8f0" }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ fontSize: "12px", fontWeight: 400, color: item.status === 'profit' ? '#00c853' : '#d84315'}}
                  >
                    {item.pal+' '+item.status}
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "start" }}>
                  <Typography
                    variant="h6"
                    sx={{ fontSize: "14px", fontWeight: 500, color: "#bdc8f0" }}
                  >
                    {item.price}
                  </Typography>
                  <Box
                    sx={{
                      width: "16px",
                      height: "16px",
                      borderRadius: "5px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    //   bgcolor: "#B9F6CA",
                        bgcolor: item.status === 'profit' ? '#B9F6CA' : '#FBE9E7',
                      ml: 1,
                      mt: "2px",
                    }}
                  >
                    {/* <ExpandLessOutlinedIcon
                      sx={{ color: "#00C853", fontSize: "18px" }}
                    /> */}
                    {item.status === 'profit' ? <ExpandLessOutlinedIcon sx={{ color: "#00C853", fontSize: "18px" }}/> : <ExpandMoreOutlinedIcon sx={{ color: "#D84315", fontSize: "18px" }}/>}
                  </Box>
                </Box>
              </Box>
              <Box
                component="hr"
                sx={{
                  border: 0,
                  height: "1px",
                  backgroundColor: "#ffffff2f", // 🎨 رنگ دلخواه
                  my: 1,
                }}
              />
            </>
          );
        })}
      </Box>
    </Box>
  );
}
