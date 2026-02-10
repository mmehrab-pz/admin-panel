import { Box, Grid } from "@mui/material";
import React from "react";
import TotalEarningCard from "./components/TotalEarningCard";
import TotalOrderCard from "./components/TotalOrderCard";
import TotalIncomeCard1 from "./components/TotalIncomeCard1";

export default function DashboardPage() {
  return (
    <Grid
      container
      rowSpacing={3}
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Grid container columnSpacing={3} sx={{}}>
        <TotalEarningCard />
        <TotalOrderCard />
        <Grid container spacing={3} sx={{flexDirection:'column'}}>
          <TotalIncomeCard1 />
          <TotalIncomeCard1 />
        </Grid>
      </Grid>
      <Grid container columnSpacing={3} sx={{}}>
        <TotalEarningCard />
        <TotalEarningCard />
        <TotalEarningCard />
      </Grid>
    </Grid>
  );
}
