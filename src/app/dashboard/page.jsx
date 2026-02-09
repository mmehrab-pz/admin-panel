import { Box, Grid } from "@mui/material";
import React from "react";
import TotalEarningCard from "./components/TotalEarningCard";
import TotalOrderCard from "./components/TotalOrderCard";


export default function DashboardPage() {
  return (
    <Grid container rowSpacing={3}
      sx={{
    
        display:'flex',
        justifyContent: 'center'
      }}
    >
      <Grid container columnSpacing={3} sx={{}}>
        <TotalEarningCard />
        <TotalOrderCard />
        <TotalEarningCard />
      </Grid>
      <Grid container columnSpacing={3} sx={{}}>
        <TotalEarningCard />
        <TotalEarningCard />
        <TotalEarningCard />
      </Grid>
    </Grid>
  );
}
