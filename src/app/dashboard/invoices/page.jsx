import { Grid } from "@mui/material";
import React from "react";
import QuickAdd from "./components/QuickAdd";
import SparkLineCrad from "./components/SparkLineCrad";
import ClientInsights from "./components/ClientInsights";

export default function invoices() {
  return (
    <Grid
      container
      spacing={3}
      sx={{ maxWidth: "1200px", marginInline: "auto" }}
    >
      <Grid size={12}>
        <QuickAdd />
      </Grid>
      <Grid size={{xs:12,sm:6,md:4,lg:3}}>
        <SparkLineCrad title={'new'} num={"180"} color={'#8492C4'}/>
      </Grid>
      <Grid size={{xs:12,sm:6,md:4,lg:3}}>
        <SparkLineCrad title={'paid'} num={"25,890"} color={'#00C853'}/>
      </Grid>
      <Grid size={{xs:12,sm:6,md:4,lg:3}}>
        <SparkLineCrad title={'pending'} num={"3400"} color={'#7C4EFD'}/>
      </Grid>
      <Grid size={{xs:12,sm:6,md:4,lg:3}}>
        <SparkLineCrad title={'Overdue'} num={"55,865"} color={'#FFAB91'}/>
      </Grid>
      <Grid size={4}>
        <ClientInsights />
      </Grid>
    </Grid>
  );
}
