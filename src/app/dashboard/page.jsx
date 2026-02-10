import { Box, Grid } from "@mui/material";
import React from "react";
import TotalEarningCard from "./components/TotalEarningCard";
import TotalOrderCard from "./components/TotalOrderCard";
import TotalIncomeCard1 from "./components/TotalIncomeCard1";
import TotalIncomeCard2 from "./components/TotalIncomeCard2";
import Test from "./components/Test";
import TotalGrowth from "./components/TotalGrowth";
import PopularStocks from "./components/PopularStocks";
import Footer from "@/components/Footer";

export default function DashboardPage() {
  return (
    // <Grid
    //   container
    //   rowSpacing={3}
    //   sx={{
    //     display: "flex",
    //     justifyContent: "center",
    //   }}
    // >
    //   <Grid container spacing={3}>
    //     <Grid size={4} sx={{border:"1px solid white"}}>
    //       <TotalEarningCard />
    //     </Grid>
    //     <Grid size={4} sx={{border:"1px solid white"}}>
    //       <TotalOrderCard />
    //     </Grid>
    //     <Grid size={4} container spacing={3} sx={{flexDirection:'column',border:"1px solid white"}}>
    //       <TotalIncomeCard1 />
    //       <TotalIncomeCard2 />
    //     </Grid>
    //       <Grid size={8} sx={{border:"1px solid white"}}>
    //         <Test />
    //       </Grid>
    //     <Grid size={4} sx={{border:"1px solid white"}}>
    //       <Test />
    //     </Grid>
    //   </Grid>
    // </Grid>
    // <Grid
    //   container
    //   spacing={3}
    //   sx={{ maxWidth: "1200px", marginInline: "auto" }}
    // >
    //   <Grid size={4}>
    //     <TotalEarningCard />
    //   </Grid>
    //   <Grid size={4}>
    //     <TotalOrderCard />
    //   </Grid>
    //   <Grid size={4} container spacing={3} sx={{flexDirection:'column'}}>
    //     <TotalIncomeCard1 />
    //     <TotalIncomeCard2 />
    //   </Grid>
    //   <Grid size={8}>
    //     <TotalGrowth />
    //   </Grid>
    //   <Grid size={4}>
    //     <PopularStocks />
    //   </Grid>
    //   <Grid size={12}>
    //     <Footer />
    //   </Grid>
    // </Grid>
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
