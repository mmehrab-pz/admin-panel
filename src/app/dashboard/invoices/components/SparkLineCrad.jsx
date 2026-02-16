"use client";
import { Box, Typography } from "@mui/material";
import { SparkLineChart } from "@mui/x-charts/SparkLineChart";
import React from "react";

export default function SparkLineCrad({title,num,color}) {
  return (
    <Box
      sx={{
        borderRadius: "8px",
        bgcolor: "#212946",
        p: "24px",
      }}
    >
      <Typography
        variant="body1"
        sx={{
          fontSize: "14px",
          fontWeight: 400,
          color: "#8492c4",
          textTransform: "capitalize",
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="body1"
        sx={{ fontSize: "20px", fontWeight: 600, color: "#d7dcec" }}
      >
        {num}
      </Typography>
      <SparkLineChart
        data={[2, 1, 2, 1, 1, 3, 0]}
        height={30}
        showHighlight
        color={color}
        yAxis={{
          min: 0, // حداقل مقدار محور y
          max: 6, // حداکثر مقدار محور y (محدوده رو کوچکتر کن تا ارتفاع فشرده‌تر شه)
          tickNumber: 3,
        }}
      />
    </Box>
  );
}
