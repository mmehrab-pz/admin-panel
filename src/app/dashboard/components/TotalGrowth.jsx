"use client";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
export default function TotalGrowth() {
  const [date, setDate] = React.useState("");

  const handleChange = (event) => {
    setDate(event.target.value);
  };

  return (
    <Box
      sx={{
        bgcolor: "#212946",
        borderRadius: "8px",
        padding: "24px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography
            variant="body1"
            sx={{ fontSize: "12px", fontWeight: 400, color: "#8492c4" }}
          >
            Total Growth
          </Typography>
          <Typography
            variant="caption"
            sx={{ fontSize: "20px", fontWeight: 600, color: "#d7dcec" }}
          >
            $2,324.00
          </Typography>
        </Box>
        <Box sx={{}}>
          <FormControl sx={{ minWidth: "85px", color: "white" }}>
            <InputLabel
              id="demo-simple-select-label"
              sx={{
                color: "#bdc8f0",
                textTransform: "capitalize",
                fontSize: "14px",
                fontWeight: 400,
              }}
            >
              time
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={date}
              label="Age"
              onChange={handleChange}
              sx={{
                bgcolor: "#1A223F",
                borderRadius: "8px",
                color: "white",
                color: "#bdc8f0",
                textTransform: "capitalize",
                fontSize: "14px",
                fontWeight: 400,
                "& .MuiSvgIcon-root": { color: "white" }, // آیکون فلش سفید
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#ffffff44", // رنگ خط دور
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#ffffff", // رنگ خط در حالت hover
                },
              }}
              MenuProps={{
                PaperProps: {
                  sx: {
                    bgcolor: "#1A223F",
                  },
                },
              }}
            >
              <MenuItem
                value={10}
                sx={{
                  color: "#bdc8f0",
                  textTransform: "capitalize",
                  fontSize: "14px",
                  fontWeight: 400,
                }}
              >
                today
              </MenuItem>
              <MenuItem
                value={20}
                sx={{
                  color: "#bdc8f0",
                  textTransform: "capitalize",
                  fontSize: "14px",
                  fontWeight: 400,
                }}
              >
                this month
              </MenuItem>
              <MenuItem
                value={30}
                sx={{
                  color: "#bdc8f0",
                  textTransform: "capitalize",
                  fontSize: "14px",
                  fontWeight: 400,
                }}
              >
                this yaer
              </MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
      <Box
        sx={{
          mt: 3,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <BarChart
          xAxis={[
            {
              data: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ],
            },
          ]}
          series={[
            {
              data: [110, 290, 150, 210, 70, 190, 350, 50, 250, 140, 130, 330],
              color: "#7C4DFF",
            },
          ]}
          height={494}
          sx={{
            // رنگ نوشته‌های محور X و Y
            "& .MuiChartsAxis-tickLabel": {
              fill: "#fff",
              color: "white",
            },

            // رنگ عنوان محور
            "& .MuiChartsAxis-label": {
              fill: "#fff",
            },

            // رنگ خط محور
            "& .MuiChartsAxis-line": {
              stroke: "#ffffff",
            },
          }}
        />
      </Box>
    </Box>
  );
}
