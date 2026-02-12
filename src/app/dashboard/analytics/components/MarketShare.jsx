"use client";
import { Box } from "@mui/material";
import React from "react";
import { Typography } from "@mui/material";
import TrendingDownOutlinedIcon from "@mui/icons-material/TrendingDownOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import { SparkLineChart } from "@mui/x-charts/SparkLineChart";
import { LineChart } from "@mui/x-charts";

export default function MarketShare() {
  return (
    <Box sx={{ borderRadius: "8px", bgcolor: "#212946" }}>
      <Box sx={{ p: "24px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "start",
          }}
        >
          <Box>
            <Typography
              variant="body1"
              sx={{
                textTransform: "capitalize",
                fontSize: "20px",
                fontWeight: 600,
                color: "#d7dcec",
              }}
            >
              Market Share
            </Typography>
            <Typography
              variant="caption"
              sx={{ fontSize: "14px", fontWeight: 400, color: "#bdc8f0" }}
            >
              Department wise monthly sales report
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <TrendingDownOutlinedIcon sx={{ color: "#F44336" }} />
            <Typography
              variant="body1"
              sx={{ fontSize: "20px", fontWeight: 600, color: "#d7dcec" }}
            >
              27, 695.65
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", gap: 3, mt: 3 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box
              sx={{
                width: "40px",
                height: "40px",
                borderRadius: "12px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                bgcolor: "#111936",
              }}
            >
              <InstagramIcon sx={{ color: "#ee00c6" }} />
            </Box>
            <Typography
              variant="body1"
              sx={{ fontSize: "16px", fontWeight: 600, color: "#d7dcec" }}
            >
              + 45.36%
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box
              sx={{
                width: "40px",
                height: "40px",
                borderRadius: "12px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                bgcolor: "#111936",
              }}
            >
              <YouTubeIcon sx={{ color: "#ee0000" }} />
            </Box>
            <Typography
              variant="body1"
              sx={{ fontSize: "16px", fontWeight: 600, color: "#d7dcec" }}
            >
              - 50.69%
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box
              sx={{
                width: "40px",
                height: "40px",
                borderRadius: "12px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                bgcolor: "#111936",
              }}
            >
              <TwitterIcon sx={{ color: "#006fee" }} />
            </Box>
            <Typography
              variant="body1"
              sx={{ fontSize: "16px", fontWeight: 600, color: "#d7dcec" }}
            >
              + 16.85%
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ mt: 3, position: "relative",height:180 }}>
        <SparkLineChart
          height={150}
          curve="natural"
          area={true}
          data={[0, 15, 10, 50, 30, 40, 25]}
          sx={{
            position:'absolute',
            "& .MuiLineElement-root": {stroke: "#1fe5ff", strokeWidth: 2 },
            "& .MuiAreaElement-root": { fill: "url(#grad1)" }
          }}
          >
                  <defs>
          <linearGradient id="grad1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#23e5ffce" stopOpacity={0.2} />
            <stop offset="100%" stopColor="#23e5ff2d" stopOpacity={0} />
          </linearGradient>
        </defs>
        </SparkLineChart>
        <SparkLineChart
          height={150}
          curve="natural"
          area={true}
          data={[10, 5, 4, 30, 20, 60, 15]}
          sx={{
            position:'absolute',
            "& .MuiLineElement-root": {stroke: "#ff1f1f", strokeWidth: 2 },
            "& .MuiAreaElement-root": { fill: "url(#grad2)" }
          }}
          >
                  <defs>
          <linearGradient id="grad2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ff1f1fcc" stopOpacity={0.2} />
            <stop offset="100%" stopColor="#ff1f1f34" stopOpacity={0} />
          </linearGradient>
        </defs>
        </SparkLineChart>
        <SparkLineChart
          height={150}
          curve="natural"
          area={true}
          data={[60, 35, 4, 15, 10, 6, 20]}
          sx={{
            position:'absolute',
            "& .MuiLineElement-root": {stroke: "#b81fff", strokeWidth: 2 },
            "& .MuiAreaElement-root": { fill: "url(#grad3)" }
          }}
          >
                  <defs>
          <linearGradient id="grad3" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#b81fffc2" stopOpacity={0.2} />
            <stop offset="100%" stopColor="#b81fff38" stopOpacity={0} />
          </linearGradient>
        </defs>
        </SparkLineChart>
      </Box>
    </Box>
  );
}
