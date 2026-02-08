"use client";

import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import navigation from "@/config/navigation";

export default function Sidebar() {
  const theme = useTheme();
  const pathName = usePathname();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 260,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 260,
          boxSizing: "border-box",
          height: "100vh",
          overflow: "hidden",
          borderRight: 'none',
          bgcolor: theme.palette.background.sidebar,
        },
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: 85,
          display: "flex",
          alignItems: "center",
          p: 2,
        }}
      >
        <Image src="/images/berries.png" alt="Logo" width={40} height={40} />
        <Typography
          variant="h6"
          sx={{
            color: "white",
            fontSize: 20,
            fontWeight: 500,
            textTransform: "uppercase",
            ml: 1,
          }}
        >
          berry
        </Typography>
      </Box>
      <Box
        component="nav"
        sx={{
          flex: 1,
          overflowY: "auto",
          p: 2,
          scrollbarWidth: "none", // Firefox
          "&::-webkit-scrollbar": {
            display: "none", // Chrome / Edge
          },
        }}
      >
        {navigation.map((item, index) => {
          return (
            <List
              key={index}
              sx={{
                borderBottom: "1px solid rgba(227, 232, 239, 0.2)",
                mb: "10px",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 500,
                  color: "#d7dcec",
                  fontSize: 14,
                  textTransform: "capitalize",
                  mb: 1,
                }}
              >
                {item.title}
              </Typography>
              {item.items.map((navItem, navIndex) => {
                return (
                  <ListItemButton
                    key={navIndex}
                    component={Link}
                    selected={pathName === navItem.path}
                    href={navItem.path}
                    sx={{
                      mb: "4px",
                      paddingInline: "16px",
                      paddingBlock: "10px",
                      borderRadius: "8px",
                      display: "flex",
                      alignItems: "center",
                      color: "#d7dcec",
                      gap: "15px",
                      bgcolor: "transparent", // دیفالت شفاف
                      "&:hover": {
                        bgcolor: "#202054",
                        color: "#7c4dff",
                        "& .MuiListItemIcon-root": { color: "#7c4dff" },
                      },
                      "&.Mui-selected": {
                        color: "#7c4dff",
                        bgcolor: "#202054",
                        "&:hover": {
                          bgcolor: "#202054", // رنگ hover سفارشی
                        },
                        "& .MuiListItemIcon-root": { color: "#7c4dff" },
                      },
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: 0, color: "#d7dcec" }}>
                      {navItem.icon}
                    </ListItemIcon>
                    <ListItemText
                      variant="body2"
                      primary={navItem.title}
                      primaryTypographyProps={{
                        sx: {
                          fontSize: 14,
                          fontWeight: 400,

                          textTransform: "capitalize",
                        },
                      }}
                    />
                  </ListItemButton>
                );
              })}
            </List>
          );
        })}
      </Box>
    </Drawer>
  );
}
