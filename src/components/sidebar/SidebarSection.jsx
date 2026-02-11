import { List, Typography } from "@mui/material";
import React from "react";
import SidebarItem from "./SidebarItem";

export default function SidebarSection({ section, collapsed }) {
  return (
    <List
      sx={{
        borderBottom: "1px solid rgba(227, 232, 239, 0.2)",
        mb: "10px",
      }}
    >
      {!collapsed && (
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
          {section.title}
        </Typography>
      )}
      {section.items.map((item, navIndex) => {
        console.log(section.items);
        return (
          <SidebarItem
            key={navIndex}
            title={item.title}
            path={item.path}
            IconComponent={item.icon}
            collapsed={collapsed}
          />
        );
      })}
    </List>
  );
}
