import { Box, Typography } from '@mui/material'
import React from 'react'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import TrendingDownOutlinedIcon from '@mui/icons-material/TrendingDownOutlined';

export default function TotalOrderCard() {
  return (
        <Box
      sx={{
        height: "185px",
        width: "367px",
        bgcolor: "#212946",
        borderRadius: "8px",
        position: "relative",
        overflow: "hidden",
        padding: "18px",
        // display:'flex',
        // flexDirection:'column',
        // justifyContent: 'center',
        // gap: 2,

        "&::before": {
          content: '""',
          width: "210px",
          height: "210px",
          position: "absolute",
          top: "-125px",
          right: "-15px",
          opacity: "0.5",
          borderRadius: "50%",
          background:
            "linear-gradient(140.9deg, #1e88e5 -14.02%, #90caf900 85.50%)",
        },

        "&::after": {
          content: '""',
          width: "210px",
          height: "210px",
          position: "absolute",
          top: "-85px",
          right: "-95px",
          opacity: "0.5",
          borderRadius: "50%",
          background:
            "linear-gradient(210.4deg, #1e88e5 -50.94%, #90caf900 95.49%)",
        },
      }}
    >
      <Box
        sx={{
          width: "45px",
          height: "45px",
          borderRadius: "8px",
          bgcolor: "#29314F",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
        }}
      >
        <ShoppingBagOutlinedIcon />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          mt: "14px",
          mb: "6px",
        }}
      >
        <Typography
          variant="body1"
          sx={{ fontSize: "34px", fontWeight: 500, color: "white" }}
        >
          $961
        </Typography>
        <Box
          sx={{
            width: "22px",
            height: "22px",
            borderRadius: "50%",
            bgcolor: "#90CAF9",
            color: "#651fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TrendingDownOutlinedIcon sx={{ fontSize: "18px" }} />
        </Box>
      </Box>
      <Typography
        variant="h6"
        sx={{
          fontSize: "16px",
          fontWeight: 500,
          color: "#8492c4",
          textTransform: "capitalize",
        }}
      >
        total order
      </Typography>
    </Box>
  )
}
