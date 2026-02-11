"use client";
import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import SensorsOutlinedIcon from "@mui/icons-material/SensorsOutlined";
import ReplayOutlinedIcon from "@mui/icons-material/ReplayOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";

export default function KeyMetrics() {
  const [data, setData] = useState([
    { value: "1000", caption: "shares", icon: ShareOutlinedIcon },
    { value: "600", caption: "network", icon: SensorsOutlinedIcon },
    { value: "3550", caption: "returns", icon: ReplayOutlinedIcon },
    { value: "100%", caption: "order", icon: CreditCardOutlinedIcon },
  ]);

  return (
    <Grid
      container
      sx={{
        height: "200px",
        borderRadius: "8px",
        bgcolor: "#212946",
        overflow: "hidden",
      }}
    >
      {data.map((item, index) => {
        const IconeComponent = item.icon
        return (
          <Grid key={index} size={{xs:12 , md:6}} sx={{ border: "1px solid #75757518" }}>
            <Box
              sx={{
                height: "95px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 4,
              }}
            >
              <Box
                sx={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "14px",
                  bgcolor: "#111936",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#7C4DFF",
                }}
              >
                <IconeComponent sx={{ fontSize: "30px" }} />
              </Box>
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  variant="body1"
                  sx={{ fontSize: "14px", fontWeight: 500, color: "#d7dcec" }}
                >
                  {item.value}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ fontSize: "12px", fontWeight: 400, color: "#8492c4" }}
                >
                  {item.caption}
                </Typography>
              </Box>
            </Box>
          </Grid>
        );
      })}
    </Grid>
  );
}
