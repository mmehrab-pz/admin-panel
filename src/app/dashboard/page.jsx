import { Grid } from "@mui/material";
import React from "react";
import TotalEarningCard from "./components/TotalEarningCard";
import TotalOrderCard from "./components/TotalOrderCard";
import TotalIncomeCard1 from "./components/TotalIncomeCard1";
import TotalIncomeCard2 from "./components/TotalIncomeCard2";
import TotalGrowth from "./components/TotalGrowth";
import PopularStocks from "./components/PopularStocks";
import Footer from "@/components/Footer";

export default function DashboardPage() {
  return (
    <Grid
      container
      spacing={3}
      sx={{ maxWidth: "1200px", marginInline: "auto" }}
    >
      <Grid size={{ xs: 12, sm: 6, md: 4 }}>
        <TotalEarningCard />
      </Grid>

      <Grid size={{ xs: 12, sm: 6, md: 4 }}>
        <TotalOrderCard />
      </Grid>

      <Grid
        size={{ xs: 12, md: 4 }}
        container
        spacing={3}
        sx={{ flexDirection: "column" }}
      >
        <TotalIncomeCard1 />
        <TotalIncomeCard2 />
      </Grid>

      <Grid size={{ xs: 12, md: 8 }}>
        <TotalGrowth />
      </Grid>

      <Grid size={{ xs: 12, md: 4 }}>
        <PopularStocks />
      </Grid>

      <Grid size={12}>
        <Footer />
      </Grid>
    </Grid>
  );
}
