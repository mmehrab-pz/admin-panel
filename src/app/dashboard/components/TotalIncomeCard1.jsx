import { Box, Typography } from "@mui/material";
import React from "react";
import PriceChangeOutlinedIcon from '@mui/icons-material/PriceChangeOutlined';

export default function TotalIncomeCard1() {
  return (
    <Box
      sx={{
        // width: "367px",
        height: "80px",
        borderRadius: "8px",
        bgcolor: "#1e88e5",
        overflow: "hidden",
        position: "relative",
        display:"flex",
        alignItems:'center',
        paddingInline:'16px',
        "&::before": {
          content: '""',
          width: "210px",
          height: "210px",
          borderRadius: "50%",
          top: "-160px",
          right: "-130px",
          position: "absolute",
          background:
            "linear-gradient(140.9deg, #90caf9 -14.02%, rgba(144, 202, 249, 0) 77.58%)",
        },
        "&::after": {
          content: '""',
          width: "210px",
          height: "210px",
          borderRadius: "50%",
          top: "-30px",
          right: "-180px",
          position: "absolute",
          background:
            "linear-gradient(210.04deg, #90caf9 -50.94%, rgba(144, 202, 249, 0) 83.49%);",
        },
      }}
    >
      <Box
        sx={{
          width: "45px",
          height: "45px",
          borderRadius: "8px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          bgcolor:'#1565c0',
          color:'white'
        }}
      >
        <PriceChangeOutlinedIcon />
      </Box>
      <Box sx={{ml:2,display:'flex',flexDirection:"column",}}>
        <Typography variant="body1" sx={{fontSize:'16px',fontWeight:600,color:'white'}}>$203K</Typography>
        <Typography variant="caption" sx={{fontSize:'12px',fontWeight:400,color:'#e3f2fd',textTransform:'capitalize'}}>total income</Typography>
      </Box>
    </Box>
  );
}
