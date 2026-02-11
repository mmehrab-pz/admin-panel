import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
} from "@mui/material";
import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";

export default function SidebarItem({ title, path, icon, collapsed,IconComponent}) {
  const pathName = usePathname();
  const isActive = pathName === path;
  return (
    <Tooltip title={collapsed ? title : ""} placement="right" arrow>
      <ListItemButton
        component={Link}
        selected={isActive}
        href={path}
        sx={{
          mb: "4px",
          paddingInline: "16px",
          paddingBlock: "10px",
          borderRadius: "8px",
          display: "flex",
          alignItems: "center",
          justifyContent: collapsed ? 'center' : 'start',
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
        <ListItemIcon sx={{ minWidth: 0, color: "#d7dcec"}}>
           <IconComponent sx={{ fontSize: collapsed ? 24 : 18,transition:'.4s', }} />
        </ListItemIcon>
        {!collapsed && (
          <ListItemText
            variant="body2"
            primary={title}
            primaryTypographyProps={{
              sx: {
                fontSize: 14,
                fontWeight: 400,

                textTransform: "capitalize",
              },
            }}
          />
        )}
      </ListItemButton>
    </Tooltip>
  );
}
