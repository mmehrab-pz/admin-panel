import { Grid } from '@mui/material'
import React from 'react'
import MarketShare from './components/MarketShare'
import KeyMetrics from './components/KeyMetrics'
import TotalRevenue from './components/TotalRevenue'

export default function analytics() {
  return (
    // <Grid container spacing={3} sx={{ maxWidth: "1200px", marginInline: "auto" }}>
    //   <Grid size={8}>
    //       <MarketShare />
    //   </Grid>
    //   <Grid size={4}>
    //       <KeyMetrics />
    //   </Grid>
    //   <Grid size={4}>
    //     <TotalRevenue />
    //   </Grid>
    // </Grid>
    <Grid container spacing={3} sx={{ maxWidth: "1200px", marginInline: "auto" }}>
      <Grid size={8}>
        <MarketShare />
      </Grid>
      <Grid size={4} container spacing={3} sx={{flexDirection:'column'}}>
        <KeyMetrics />
        <TotalRevenue />
      </Grid>
    </Grid>
  )
}
