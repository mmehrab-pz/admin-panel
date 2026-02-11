import { Grid } from '@mui/material'
import React from 'react'
import MarketShare from './components/MarketShare'
import KeyMetrics from './components/KeyMetrics'

export default function analytics() {
  return (
    <Grid container spacing={3} sx={{ maxWidth: "1200px", marginInline: "auto" }}>
      <Grid size={8}>
          <MarketShare />
      </Grid>
      <Grid size={4}>
          <KeyMetrics />
      </Grid>
    </Grid>
  )
}
