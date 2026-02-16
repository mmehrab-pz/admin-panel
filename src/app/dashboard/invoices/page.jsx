import { Grid } from "@mui/material";
import React from "react";
import QuickAdd from "./components/QuickAdd";

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
    </Grid>
  );
}
