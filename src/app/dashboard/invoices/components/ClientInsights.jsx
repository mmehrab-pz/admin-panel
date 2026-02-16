"use client";
import { Box, Button, List, ListItem, Typography } from "@mui/material";
import React, { useState } from "react";
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';

export default function ClientInsights() {
  const [data, setData] = useState([
    { title: "Agilulf Fuxg", price: "£5678.09", status: "Loss" },
    { title: "Marcellus Trent", price: "£8241.55", status: "Profit" },
    { title: "Isolde Crane", price: "£3120.40", status: "Loss" },
    { title: "Hadrian Wolfe", price: "£10987.72", status: "Profit" },
    { title: "Seraphine Dorr", price: "£4599.33", status: "Loss" },
    { title: "Caius Hart", price: "£7312.00", status: "Profit" },
  ]);
  return (
    <Box
      sx={{
        borderRadius: "8px",
        bgcolor: "#212946",
        p: "24px",
        pb:'10px'
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontSize: "16px",
          fontWeight: 600,
          color: "#d7dcec",
          textTransform: "capitalize",
        }}
      >
        Client Insights
      </Typography>
      <List>
        {data.map((item, index) => {
          return (
            <ListItem
              key={index}
              sx={{
                borderBottom: "1px solid #bdc8f026",
                p: 0,
                paddingBlock: "12px",
                display: "felx",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#d7dcec",
                    textTransform: "capitalize",
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "12px",
                    fontWeight: 400,
                    color: item.status === "Profit" ? "#00c853" : "#d84315",
                    textTransform: "capitalize",
                    mt: 1,
                  }}
                >
                  10% {item.status}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#d7dcec",
                  }}
                >
                  {item.price}
                </Typography>
                <Button
                  sx={{
                    fontSize: "12px",
                    fontWeight: 500,
                    color: "#2196f3",
                    textTransform: "capitalize",
                    "&:hover": {
                      bgcolor: "#213254",
                    },
                  }}
                >
                  history
                </Button>
              </Box>
            </ListItem>
          );
        })}
      </List>
      <Box sx={{display:'flex',justifyContent:'center'}}>
        <Button
          sx={{
            fontSize: "13px",
            fontWeight: 500,
            color: "#2196f3",
            textTransform: "capitalize",
            minWidth:'0px',
            "&:hover": {
              bgcolor: "#213254",
            },
          }}
        >
          view all
        </Button>
      </Box>
    </Box>
  );
}
