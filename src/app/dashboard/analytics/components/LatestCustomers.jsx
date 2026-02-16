"use client";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Image from "next/image";

export default function LatestCustomers() {
  const [data, setData] = useState([
  { flag: '/images/flags/Germany.png', country: 'Germany', name: 'Angelina Jolly', average: '56.23%' },
  { flag: '/images/flags/France.png', country: 'France', name: 'Lucas Bernard', average: '62.11%' },
  { flag: '/images/flags/United States.png', country: 'United States', name: 'Michael Brown', average: '75.64%' },
  { flag: '/images/flags/Japan.png', country: 'Japan', name: 'Haruto Tanaka', average: '81.33%' },
  { flag: '/images/flags/Italy.png', country: 'Italy', name: 'Giulia Rossi', average: '49.87%' },
  { flag: '/images/flags/Germany.png', country: 'Germany', name: 'Hans Müller', average: '68.29%' },
  { flag: '/images/flags/France.png', country: 'France', name: 'Emma Laurent', average: '71.45%' },
  { flag: '/images/flags/United States.png', country: 'United States', name: 'Sophia Johnson', average: '59.84%' },
  { flag: '/images/flags/Japan.png', country: 'Japan', name: 'Aiko Nakamura', average: '77.12%' },
  { flag: '/images/flags/Italy.png', country: 'Italy', name: 'Marco Bianchi', average: '65.44%' },
  { flag: '/images/flags/Germany.png', country: 'Germany', name: 'Clara Vogel', average: '61.09%' },
  { flag: '/images/flags/France.png', country: 'France', name: 'Antoine Dupont', average: '66.37%' },
  { flag: '/images/flags/United States.png', country: 'United States', name: 'Ethan Davis', average: '53.94%' },
  { flag: '/images/flags/Japan.png', country: 'Japan', name: 'Riku Sato', average: '69.22%' },
  { flag: '/images/flags/Italy.png', country: 'Italy', name: 'Isabella Conti', average: '58.77%' },
  { flag: '/images/flags/Germany.png', country: 'Germany', name: 'Leon Fischer', average: '72.33%' },
  { flag: '/images/flags/France.png', country: 'France', name: 'Camille Moreau', average: '63.18%' },
  { flag: '/images/flags/United States.png', country: 'United States', name: 'William Moore', average: '74.59%' },
  { flag: '/images/flags/Japan.png', country: 'Japan', name: 'Mei Kobayashi', average: '68.03%' },
  { flag: '/images/flags/Italy.png', country: 'Italy', name: 'Luca Romano', average: '64.27%' },
  { flag: '/images/flags/Germany.png', country: 'Germany', name: 'Anna Becker', average: '60.45%' },
  { flag: '/images/flags/France.png', country: 'France', name: 'Julien Robert', average: '70.64%' },
  { flag: '/images/flags/United States.png', country: 'United States', name: 'Olivia Harris', average: '76.12%' },
  { flag: '/images/flags/Japan.png', country: 'Japan', name: 'Takumi Yamada', average: '55.48%' },
  { flag: '/images/flags/Italy.png', country: 'Italy', name: 'Chiara Ricci', average: '59.82%' },
  { flag: '/images/flags/Germany.png', country: 'Germany', name: 'Nico Wagner', average: '67.05%' },
  { flag: '/images/flags/France.png', country: 'France', name: 'Lea Fontaine', average: '73.91%' },
  { flag: '/images/flags/United States.png', country: 'United States', name: 'James Wilson', average: '62.07%' },
  { flag: '/images/flags/Germany.png', country: 'Japan', name: 'Kaito Suzuki', average: '79.10%' },
  { flag: '/images/flags/Italy.png', country: 'Italy', name: 'Elena Marino', average: '57.63%' }
]
);

  return (
    <Box sx={{ borderRadius: "8px", bgcolor: "#212946"}}>
      <Box sx={{ p: "24px", borderBottom: "1px solid #e3e8ef33" }}>
        <Typography
          variant="body1"
          sx={{
            textTransform: "capitalize",
            fontSize: "18px",
            fontWeight: 500,
            color: "#d7dcec",
          }}
        >
          Latest Customers
        </Typography>
      </Box>
      <TableContainer
        component={Paper}
        sx={{
          border: 0,
          outline: "none",
          borderRadius: 0,
          height: "345px",
          overflowY: "scroll",
          scrollbarWidth: "none", // Firefox
          "&::-webkit-scrollbar": {
            display: "none", // Chrome / Edge
          },
        }}
      >
        <Table
          aria-label="simple table"
          sx={{
            bgcolor: "#212946",
            border: 0,
            borderRadius: 0,
            outline: "none",
            "& td, & th": { borderBottom: "1px solid #bdc8f026" },
          }}
        >
          <TableHead sx={{ border: "none" }}>
            <TableRow>
              <TableCell
                sx={{
                  color: "white",
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "#d7dcec",
                  textTransform: "capitalize",
                }}
              >
                #
              </TableCell>
              <TableCell
                sx={{
                  color: "white",
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "#d7dcec",
                  textTransform: "capitalize",
                }}
                align="left"
              >
                Country
              </TableCell>
              <TableCell
                sx={{
                  color: "white",
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "#d7dcec",
                  textTransform: "capitalize",
                }}
                align="left"
              >
                {" "}
                Name
              </TableCell>
              <TableCell
                sx={{
                  color: "white",
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "#d7dcec",
                  textTransform: "capitalize",
                }}
                align="right"
              >
                Average
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ border: 0 }}>
            {data.map((item, index) => {
                console.log(item.flag);
                
              return (
                <TableRow
                  key={index}
                  sx={{
                    border: 0,
                    "&:hover":{
                        bgcolor:'#323A55'
                    },
                    "&:last-child td, &:last-child th": { border: 0 },
                  }}
                >
                  <TableCell component="th" scope="row">
                    <Image src={item.flag} alt={item.country} width={30} height={30}/>
                  </TableCell>
                  <TableCell
                    sx={{ fontSize: "14px", fontWeight: 400, color: "#bdc8f0" }}
                    align="left"
                  >
                    {item.country}
                  </TableCell>
                  <TableCell
                    sx={{ fontSize: "14px", fontWeight: 400, color: "#bdc8f0" }}
                    align="left"
                  >
                    {item.name}
                  </TableCell>
                  <TableCell
                    sx={{ fontSize: "14px", fontWeight: 400, color: "#bdc8f0" }}
                    align="right"
                  >
                    {item.average}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
