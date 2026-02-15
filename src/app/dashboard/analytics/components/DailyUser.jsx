import { Box, Typography } from '@mui/material'
import React from 'react'
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';

export default function DailyUser() {
  return (
    <Box sx={{borderRadius: "8px", bgcolor: "#7C4DFF",height:'100px',p:'24px',textAlign:'center',position:'relative',overflow:'hidden'}}>
        <Typography variant='body1' sx={{fontSize:'20px',fontWeight:600,color:'white',}}>1,658</Typography>
        <Typography variant='caption' sx={{fontSize:'14px',fontWeight:400,color:'white',textTransform:'capitalize'}}>Daily user</Typography>
        <Box sx={{position:'absolute',top:'20px',left:'-15px'}}>
            <AccountCircleTwoToneIcon sx={{fontSize:'100px',color:'white',opacity:'0.35',transform:'rotate(35deg)'}}/>
        </Box>
    </Box>
  )
}
