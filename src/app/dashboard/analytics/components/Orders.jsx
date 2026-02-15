import { Box, Typography } from '@mui/material'
import React from 'react'
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';

export default function Orders() {
  return (
    <Box sx={{borderRadius: "8px", bgcolor: "#2196F3",height:'125px',p:'24px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <Box>
            <Typography variant='body1' sx={{fontSize:'14px',fontWeight:500,color:'white',textTransform:'capitalize'}}>Orders Received</Typography>
            <Typography variant='body1' sx={{fontSize:'20px',fontWeight:600,color:'white'}}>486</Typography>
            <Typography variant='caption' sx={{fontSize:'12px',fontWeight:400,color:'white',textTransform:'capitalize'}}>20% Increase</Typography>
        </Box>
        <Box>
            <AccountCircleTwoToneIcon sx={{fontSize:'100px',color:'white',opacity:'0.5'}}/>
        </Box>
    </Box>
  )
}
