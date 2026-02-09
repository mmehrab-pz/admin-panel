import Sidebar from "@/components/Sidebar";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import theme from "@/theme/theme";
import { roboto } from "@/theme/font";
import Header from "@/components/header/Header";

export const metadata = {
  title: 'Berry | React Material Admin',
  description: 'این صفحه داشبورد برنامه است',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box sx={{ display: "flex", minHeight: "100vh" }}>
            {/* Sidebar */}
            <Sidebar />
            {/* Content area */}
            <Box sx={{ flex: 1 }}>
              <Header />
              <Box
                component="main"
                sx={{
                  mt: "85px",
                  bgcolor: "#111936",
                  height: "calc(100% - 85px)",
                  pr: "24px",
                }}
              >
                <Box
                  sx={{
                    height: "100%",
                    bgcolor: "#1A223F",
                    borderRadius: "8px 8px 0 0",
                  }}
                >
                  {children}
                </Box>
              </Box>
            </Box>
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
}
// import EmotionRegistry from "@/lib/EmotionRegistry";
// import { ThemeProvider } from "@mui/material/styles";
// import CssBaseline from "@mui/material/CssBaseline";
// import { Box } from "@mui/material";
// import theme from "@/theme/theme";
// import Sidebar from "@/components/Sidebar";
// import { roboto } from "@/theme/font";

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={roboto.className}>
//         <EmotionRegistry>
//           <ThemeProvider theme={theme}>
//             <CssBaseline />
//             <Box
//               sx={{
//                 display: "flex",
//                 height: "100vh",
//                 overflow: "hidden",
//               }}
//             >
//               <Sidebar />
//               <Box
//                 component="main"
//                 sx={{
//                   flex: 1,
//                   p: 3,
//                   overflowY: "auto",
//                 }}
//               >
//                 {children}
//               </Box>
//             </Box>
//           </ThemeProvider>
//         </EmotionRegistry>
//       </body>
//     </html>
//   );
// }
