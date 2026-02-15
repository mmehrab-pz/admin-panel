import { Box, Typography } from '@mui/material'
import React from 'react'
import PaidTwoToneIcon from '@mui/icons-material/PaidTwoTone';

export default function Revenue() {
  return (
        <Box sx={{borderRadius: "8px", bgcolor: "#7C4DFF",height:'125px',p:'24px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <Box>
            <Typography variant='body1' sx={{fontSize:'14px',fontWeight:500,color:'white',textTransform:'capitalize'}}>Revenue</Typography>
            <Typography variant='body1' sx={{fontSize:'20px',fontWeight:600,color:'white'}}>$42,562</Typography>
            <Typography variant='caption' sx={{fontSize:'12px',fontWeight:400,color:'white',textTransform:'capitalize'}}>$50,032 Last Month</Typography>
        </Box>
        <Box>
            <PaidTwoToneIcon sx={{fontSize:'100px',color:'white',opacity:'0.5'}}/>
        </Box>
    </Box>
  )
}
