import { Box, Link, List, ListItem, Typography } from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Typography
        variant="body1"
        sx={{ fontSize: "12px", fontWeight: 400, color: "#8492c4" }}
      >
        © All rights reserved{" "}
        <Link
          href="https://pourzakaria.com/"
          target="_blank"
          underline="none"
          sx={{ fontSize: "14px", color: "#7c4dff" }}
        >
          Mehrab Pourzakaria
        </Link>
      </Typography>
      <List sx={{ display: "flex", p: "0px", gap: 2 }}>
        <ListItem sx={{ p: "0px" }}>
          <Link
            href="https://pourzakaria.com/"
            target="_blank"
            underline="none"
            sx={{
              fontSize: "12px",
              fontWeight: 400,
              color: "#bdc8f0",
              textTransform: "capitalize",
              transition: ".2s",
              "&:hover": {
                color: "#7c4dff",
              },
            }}
          >
            webstie
          </Link>
        </ListItem>
        <ListItem sx={{ p: "0px" }}>
          <Link
            href="https://github.com/mmehrab-pz"
            target="_blank"
            underline="none"
            sx={{
              fontSize: "12px",
              fontWeight: 400,
              color: "#bdc8f0",
              textTransform: "capitalize",
              transition: ".2s",
              "&:hover": {
                color: "#7c4dff",
              },
            }}
          >
            github
          </Link>
        </ListItem>
        <ListItem sx={{ p: "0px" }}>
          <Link
            href="https://www.linkedin.com/in/mehrab-pourzakaria-1b2492237/"
            target="_blank"
            underline="none"
            sx={{
              fontSize: "12px",
              fontWeight: 400,
              color: "#bdc8f0",
              textTransform: "capitalize",
              transition: ".2s",
              "&:hover": {
                color: "#7c4dff",
              },
            }}
          >
            linkedin
          </Link>
        </ListItem>
        <ListItem sx={{ p: "0px" }}>
          <Link
            href="https://www.instagram.com/mehrab.poorzakaria_web/"
            target="_blank"
            underline="none"
            sx={{
              fontSize: "12px",
              fontWeight: 400,
              color: "#bdc8f0",
              textTransform: "capitalize",
              transition: ".2s",
              "&:hover": {
                color: "#7c4dff",
              },
            }}
          >
            instagram
          </Link>
        </ListItem>
      </List>
    </Box>
  );
}
