import { Link } from "@mui/material";
import React from "react";
import "@/app/globals.css";
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';

export default function Mehrab() {
  return (
    <Link
      underline="none"
      href="https://pourzakaria.com/"
      target="_blank"
      className="glowing"
      sx={{
        width: "130px",
        height: "55px",
        position: "fixed",
        bottom: "30px",
        right: "40px",
        color: "white",
        fontSize: "14px",
        fontWeight: 400,
        textTransform: "capitalize",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 1,
        transition:'.3s',
        "&:hover":{
            transform:'scale(1.1)'
        },
        "&::before": {
          content: "''",
          width: "calc(100% + 6px)",
          height: "calc(100% + 6px)",
          top: "-3px",
          left: "-3px",
          position: "absolute",
          zIndex: "-1",
          filter: "blur(5px)",
          background:
            "linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000)",
          backgroundSize: "400%",
          borderRadius: "6px",
          animation: "anime1 60s linear infinite",
        },
        "&::after": {
          content: "''",
          width: "100%",
          height: "100%",
          background: "#111936",
          left: "0px",
          top: "0px",
          borderRadius: "6px",
          zIndex: "-1",
          position: "absolute",
        },
      }}
    >
        <LanguageOutlinedIcon sx={{fontSize:'25px'}}/>
      Mehrab
    </Link>
  );
}
