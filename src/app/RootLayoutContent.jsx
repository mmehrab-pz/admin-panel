'use client'
import Sidebar from "@/components/sidebar/Sidebar";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import theme from "@/theme/theme";
import { roboto } from "@/theme/font";
import Header from "@/components/header/Header";
import Mehrab from "@/components/Mehrab";
import { useState } from "react";

export default function RootLayout({ children }) {
    const [collapsed, setCollapsed] = useState(false);

  return (
    <html lang="en">
      <body className={roboto.className}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box sx={{ display: "flex", minHeight: "100vh",bgcolor: "#111936" }}>
            {/* Sidebar */}
            <Sidebar collapsed={collapsed} onToggle={() => setCollapsed(!collapsed)}/>
            {/* Content area */}
            <Box sx={{ flex: 1 }}>
              <Header collapsed={collapsed}/>
              <Box
                component="main"
                sx={{
                  mt: "85px",
                  bgcolor: "#111936",
                  height: "calc(100% - 85px)",
                  p: {
                    xs:'12px',
                    md:'0px'
                  },
                  pr:{
                    md:'24px'
                  }
                }}
              >
                <Box
                  sx={{
                    height: "100%",
                    bgcolor: "#1A223F",
                    borderRadius: "8px 8px 0 0",
                    padding:'20px',
                    position:'relative'
                  }}
                >
                  {children}
                  <Mehrab />
                </Box>
              </Box>
            </Box>
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
}