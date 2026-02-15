import React from 'react'
import { Box, Typography } from '@mui/material'
import DescriptionTwoToneIcon from '@mui/icons-material/DescriptionTwoTone';

export default function DailyView() {
  return (
        <Box sx={{borderRadius: "8px", bgcolor: "#2196F3",height:'100px',p:'24px',textAlign:'center',position:'relative',overflow:'hidden'}}>
        <Typography variant='body1' sx={{fontSize:'20px',fontWeight:600,color:'white',}}>1K</Typography>
        <Typography variant='caption' sx={{fontSize:'14px',fontWeight:400,color:'white',textTransform:'capitalize'}}>Daily page view</Typography>
        <Box sx={{position:'absolute',top:'20px',left:'-15px'}}>
            <DescriptionTwoToneIcon sx={{fontSize:'100px',color:'white',opacity:'0.35',transform:'rotate(35deg)'}}/>
        </Box>
    </Box>
  )
}
