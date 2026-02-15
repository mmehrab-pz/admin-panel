"use client";
import { Box, List, ListItem, ListItemIcon, Typography } from "@mui/material";
import React, { useState } from "react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function TotalRevenue() {
  const [data, setData] = useState([
  { title: "bitcoin", price: "+ $145.85", status: "profit" },
  { title: "ethereum", price: "- $6.368", status: "loss" },
  { title: "ripple", price: "+ $458.63", status: "profit" },
  { title: "neo", price: "- $5.631", status: "loss" },
  { title: "cardano", price: "+ $312.47", status: "profit" },
  { title: "solana", price: "- $78.22", status: "loss" },
  { title: "polkadot", price: "+ $214.99", status: "profit" },
  { title: "litecoin", price: "- $12.45", status: "loss" },
  { title: "tron", price: "+ $57.81", status: "profit" },
  { title: "avalanche", price: "- $63.12", status: "loss" },
  { title: "monero", price: "+ $402.55", status: "profit" },
  { title: "stellar", price: "- $31.09", status: "loss" },
  { title: "chainlink", price: "+ $129.77", status: "profit" },
  { title: "uniswap", price: "- $22.84", status: "loss" },
  { title: "aave", price: "+ $97.60", status: "profit" },
  { title: "tezos", price: "- $8.39", status: "loss" },
  { title: "cosmos", price: "+ $65.22", status: "profit" },
  { title: "algorand", price: "- $18.73", status: "loss" },
  { title: "vechain", price: "+ $41.09", status: "profit" },
  { title: "fantom", price: "- $9.55", status: "loss" },
  { title: "hedera", price: "+ $33.64", status: "profit" },
  { title: "aptos", price: "- $5.28", status: "loss" },
  { title: "near", price: "+ $76.40", status: "profit" },
  { title: "icp", price: "- $12.33", status: "loss" },
  { title: "flow", price: "+ $23.98", status: "profit" },
  { title: "arbitrum", price: "- $6.41", status: "loss" },
  { title: "optimism", price: "+ $39.75", status: "profit" },
  { title: "apt", price: "- $7.94", status: "loss" },
  { title: "gala", price: "+ $19.50", status: "profit" },
  { title: "sandbox", price: "- $4.80", status: "loss" }

  ]);

  return (
    <Box sx={{ borderRadius: "8px", bgcolor: "#212946" }}>
      <Box sx={{ p: "24px", borderBottom: "1px solid #e3e8ef33" }}>
        <Typography
          sx={{
            fontSize: "18px",
            fontWeight: "500",
            color: "#d7dcec",
            textTransform: "capitalize",
          }}
        >
          Total Revenue
        </Typography>
      </Box>
      <List
        sx={{
          height: "445px",
          overflowY: "scroll",
          pt: "0px",
          scrollbarWidth: "none", // Firefox
          "&::-webkit-scrollbar": {
            display: "none", // Chrome / Edge
          },
        }}
      >
        {data.map((item, index) => {
          return (
            <ListItem key={index}
              sx={{
                justifyContent: "space-between",
                alignItems: "center",
                paddingBlock: "10px",
                cursor: "pointer",
                borderTop: "1px solid #e3e8ef33",
                transition: ".2s",
                "&:hover": {
                  bgcolor: "#2E2E62",
                },
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <ListItemIcon sx={{ minWidth: "0px" }}>
                  {item.status === 'profit' ? <ArrowDropUpIcon sx={{ color: "#00C853" }} /> : <ArrowDropDownIcon sx={{ color: "#F44336" }} />}
                </ListItemIcon>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "14px",
                    fontWeight: 400,
                    color: "#bdc8f0",
                    textTransform: "capitalize",
                  }}
                >
                  {item.title}
                </Typography>
              </Box>
              <Typography
                variant="caption"
                sx={{ fontSize: "14px", fontWeight: 400, color: item.status === 'profit' ? "#00C853" : "#F44336", }}
              >
                {item.price}
              </Typography>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
}
