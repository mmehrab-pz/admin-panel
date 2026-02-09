"use client";
import React from "react";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import MovingOutlinedIcon from "@mui/icons-material/MovingOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import GetAppIcon from "@mui/icons-material/GetApp";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import FileCopyOutlinedIcon from "@mui/icons-material/FileCopyOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import { Box, Button, Menu, MenuItem, Typography } from "@mui/material";

export default function TotalEarningCard() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
            "linear-gradient(140.9deg, #651fff -14.02%, #90caf900 85.50%)",
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
            "linear-gradient(210.4deg, #651fff -50.94%, #90caf900 95.49%)",
        },
      }}
    >
      <Box
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{
          position: "absolute",
          width: "34px",
          height: "34px",
          borderRadius: "8px",
          bgcolor: "#212946",
          top: "20px",
          right: "20px",
          zIndex: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          cursor: "pointer",
        }}
      >
        <MoreHorizOutlinedIcon />
      </Box>
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
        <PaymentsOutlinedIcon />
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
          $500.00
        </Typography>
        <Box
          sx={{
            width: "22px",
            height: "22px",
            borderRadius: "50%",
            bgcolor: "#B39DDB",
            color: "#651fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <MovingOutlinedIcon sx={{ fontSize: "18px" }} />
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
        total earning
      </Typography>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom", // منو از کجای anchor باز بشه
          horizontal: "right", // وسط anchor
        }}
        transformOrigin={{
          vertical: "top", // نقطه شروع منو خودش
          horizontal: "right", // وسط خودش
        }}
        slotProps={{
          list: {
            "aria-labelledby": "basic-button",
          },
        }}
        PaperProps={{
          sx: {
            bgcolor: "#212946",
            color: "#bdc8f0",
            borderRadius: "10px",
            mt: 1,
            minWidth: 100,
          },
        }}
      >
        <MenuItem
          onClick={handleClose}
          sx={{
            display: "flex",
            alignItems: "center",
            transition: "0.3s",
            "&:hover": {
              bgcolor: " #323A55",
            },
          }}
        >
          <GetAppIcon sx={{ fontSize: "20px" }} />
          <Typography
            variant="body1"
            sx={{ ml: "10px", fontSize: "14px", fontWeight: 400,textTransform:'capitalize' }}
          >
            import card
          </Typography>
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{
            display: "flex",
            alignItems: "center",
            transition: "0.3s",
            "&:hover": {
              bgcolor: " #323A55",
            },
          }}
        >
          <FileCopyOutlinedIcon sx={{ fontSize: "20px" }} />
          <Typography
            variant="body1"
            sx={{ ml: "10px", fontSize: "14px", fontWeight: 400,textTransform:'capitalize' }}
          >
            copy data
          </Typography>
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{
            display: "flex",
            alignItems: "center",
            transition: "0.3s",
            "&:hover": {
              bgcolor: " #323A55",
            },
          }}
        >
          <FileUploadIcon sx={{ fontSize: "20px" }} />
          <Typography
            variant="body1"
            sx={{ ml: "10px", fontSize: "14px", fontWeight: 400,textTransform:'capitalize' }}
          >
            export
          </Typography>
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{
            display: "flex",
            alignItems: "center",
            transition: "0.3s",
            "&:hover": {
              bgcolor: " #323A55",
            },
          }}
        >
          <ArchiveOutlinedIcon sx={{ fontSize: "20px" }} />
          <Typography
            variant="body1"
            sx={{ ml: "10px", fontSize: "14px", fontWeight: 400,textTransform:'capitalize' }}
          >
            archive file
          </Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
}
