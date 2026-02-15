import { Grid } from "@mui/material";
import React from "react";
import MarketShare from "./components/MarketShare";
import KeyMetrics from "./components/KeyMetrics";
import TotalRevenue from "./components/TotalRevenue";
import DailyUser from "./components/DailyUser";
import DailyView from "./components/DailyView";
import Orders from "./components/Orders";
import Revenue from "./components/Revenue";
import LatestCustomers from "./components/LatestCustomers";

export default function analytics() {
  return (
    <Grid
      container
      spacing={3}
      sx={{ maxWidth: "1200px", marginInline: "auto" }}
    >
      <Grid size={8} container spacing={3} sx={{ flexDirection: "column" }}>
        <MarketShare />
        <Grid container>
          <Grid size={6}>
            <Revenue />
          </Grid>
          <Grid size={6}>
            <Orders />
          </Grid>
        </Grid>
        <LatestCustomers />
      </Grid>
      <Grid size={4} container spacing={3} sx={{ flexDirection: "column" }}>
        <KeyMetrics />
        <TotalRevenue />
        <DailyUser />
        <DailyView />
      </Grid>
    </Grid>
  );
}
