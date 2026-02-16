'use client'

import { Box, Switch, Typography } from "@mui/material";
import { BarChart } from '@mui/x-charts/BarChart';

import React from "react";
const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function TotalRevenueTrends() {
  return (
    <Box
      sx={{
        borderRadius: "8px",
        bgcolor: "#212946",
        p: "24px",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <Typography
            variant="h3"
            sx={{
              fontSize: "16px",
              fontWeight: 400,
              color: "#d7dcec",
              textTransform: "capitalize",
            }}
          >
            Total Revenue Trends
          </Typography>
          <Typography
            variant="h2"
            sx={{ fontSize: "34px", fontWeight: 700, color: "#d7dcec", mt: 1 }}
          >
            $999.00
          </Typography>
        </Box>
        <Box>
          <Switch {...label} defaultChecked />
        </Box>
      </Box>
<BarChart
  sx={{
    mt: 3,
    '& .MuiChartsAxis-tickLabel': { fill: '#fff' }, // نوشته‌های محور x و y
    '& .MuiChartsAxis-line': { stroke: '#fff' }, // محورهای اصلی
    '& .MuiChartsAxis-tick': { stroke: '#fff' }, // تیک‌های کوچک محور
    '& .MuiChartsLegend-root': { color: '#fff' }, // نوشته‌های legend
    '& .MuiChartsGrid-line': { stroke: 'rgba(255,255,255,0.2)' }, // خطوط شبکه سفید نیمه‌شفاف
    '& .MuiChartsTooltip-root': {
      backgroundColor: '#333',
      color: '#fff',
      borderRadius: '6px',
    },
  }}
  xAxis={[{ data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'], scaleType: 'band' }]}
  series={[
    {
      data: [4, 2, 5, 4, 1],
      stack: 'A',
      color: '#90CAF9',
      label: 'Series A',
    },
    {
      data: [2, 8, 1, 3, 1],
      stack: 'A',
      color: '#42A5F5',
      label: 'Series B',
    },
    {
      data: [14, 6, 5, 8, 9],
      color: '#1E88E5',
      label: 'Series C',
    },
  ]}
  tooltip={{
    valueFormatter: (v) => `${v} units`,
  }}
  legend={{ position: { vertical: 'top', horizontal: 'middle' } }}
  grid={{ horizontal: true }}
  height={368}
/>
    </Box>
  );
}
