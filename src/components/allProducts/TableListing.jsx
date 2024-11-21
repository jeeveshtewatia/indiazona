import React, { useState } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Switch,
  Chip,
  IconButton,
  Pagination,
  Button,
  Typography,
  MenuItem,
  Select,
  PaginationItem,
} from "@mui/material";

import { deleteIcon, editIcon, flowbiteIcon } from "../../svgs/IconSvgs";
import { styled } from "@mui/material/styles";
import { CheckBox } from "@mui/icons-material";

const tableData = [
  {
    thumbnail: "/images/thumbnail/1.png",
    name: "Deep Black Top | Bery Summer Cloth",
    date: "16 Nov 2024 09:45:34",
    inventory: 3,
    price: 230.24,
    status: "Accepted",
    featured: true,
    variant: false,
  },
  {
    thumbnail: "/images/thumbnail/2.png",
    name: "Classic Canvas High-Top Sneakers - Brown",
    date: "16 Nov 2024 09:45:34",
    inventory: 2,
    price: 300.24,
    status: "Pending",
    featured: false,
    variant: false,
  },
  {
    thumbnail: "/images/thumbnail/3.png",
    name: "Classic Canvas High-Top Sneakers - Brown",
    date: "16 Nov 2024 09:45:34",
    inventory: 2,
    price: 230.24,
    status: "Rejected",
    featured: false,
    variant: true,
  },
  {
    thumbnail: "/images/thumbnail/4.png",
    name: "Classic Canvas High-Top Sneakers - Brown",
    date: "16 Nov 2024 09:45:34",
    inventory: 2,
    price: 300.24,
    status: "Pending",
    featured: false,
    variant: false,
  },
  {
    thumbnail: "/images/thumbnail/5.png",
    name: "Classic Canvas High-Top Sneakers - Brown",
    date: "16 Nov 2024 09:45:34",
    inventory: 2,
    price: 1300.24,
    status: "Pending",
    featured: false,
    variant: false,
  },
  {
    thumbnail: "/images/thumbnail/1.png",
    name: "Classic Canvas High-Top Sneakers - Brown",
    date: "16 Nov 2024 09:45:34",
    inventory: 2,
    price: 1000.24,
    status: "Pending",
    featured: false,
    variant: false,
  },
  {
    thumbnail: "/images/thumbnail/2.png",
    name: "Classic Canvas High-Top Sneakers - Brown",
    date: "16 Nov 2024 09:45:34",
    inventory: 2,
    price: 654.24,
    status: "Pending",
    featured: false,
    variant: false,
  },
  // Add more rows as needed
];

const TableHeader = [
  "",
  "Thumbnail Images",
  "Product Title",
  "Date & Time",
  "Current Inventory",
  "Indiazona Price",
  "Admin Approval",
  "Featured Product",
  "Options",
];
const statusButton = {
  Pending: {
    background: "#FFF9F2",
    color: "#FF8C00",
  },
  Accepted: {
    background: "#E9FFF0",
    color: "#00C53C",
  },
  Rejected: {
    background: "#FEEBEE",
    color: "#FF5252",
  },
  Listing: {
    background: "#FEEBEE",
    color: "#FF5252",
  },
};

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: "#65C466",
        opacity: 1,
        border: 0,
        ...theme.applyStyles("dark", {
          backgroundColor: "#2ECA45",
        }),
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color: theme.palette.grey[100],
      ...theme.applyStyles("dark", {
        color: theme.palette.grey[600],
      }),
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: 0.7,
      ...theme.applyStyles("dark", {
        opacity: 0.3,
      }),
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: "#E9E9EA",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
    ...theme.applyStyles("dark", {
      backgroundColor: "#39393D",
    }),
  },
}));

const CustomPaginationItem = styled(PaginationItem)(({ theme }) => ({
  "&.MuiPaginationItem-root": {
    borderRadius: "4px",
    backgroundColor: "#F1F2F6", // Lighter orange on hover
  },
  "&.Mui-selected": {
    backgroundColor: "orange",
    color: "white",
    fontWeight: "bold",
    borderRadius: "4px",
  },
  "&:hover": {
    backgroundColor: "rgba(255, 165, 0, 0.8)", // Lighter orange on hover
  },
}));

const TableListing = () => {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const totalItems = 50;

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(event.target.value);
    setPage(1); // Reset to first page on change
  };
  const handleCheckboxChange = () => {
    console.log("checkbox clicked");
  };
  return (
    <Box sx={{ padding: "16px" }}>
      <TableContainer component={Paper} sx={{ boxShadow: "none" }}>
        <Table>
          {/* Table Header */}
          <TableHead>
            <TableRow>
              {TableHeader.map((header, index) => (
                <TableCell
                  align="center"
                  sx={{ color: "#A1A1A1", size: "12px", lineHeight: "14px" }}
                  key={index}
                >
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          {/* Table Body */}
          <TableBody>
            {tableData.map((row, index) => (
              <TableRow key={index}>
                {/* Thumbnail */}
                <TableCell>
                  {/* <CheckBox
                    checked={false}
                    value={false}
                    onChange={handleCheckboxChange}
                    inputProps={{ "aria-label": "controlled" }}
                  /> */}
                </TableCell>
                <TableCell>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                      gap: "4px",
                    }}
                  >
                    <img
                      src={row.thumbnail}
                      alt="thumbnail"
                      style={{
                        width: "80px",
                        height: "80px",
                        borderRadius: "4px",
                      }}
                    />
                    {row.variant && (
                      <Box
                        sx={{
                          width: "80px",
                          color: "#FF8C00",
                          background: `#FFF9F2`,
                          fontSize: "10px",
                          textTransform: "capitalize",
                          borderRadius: "4px",
                          textAlign: "center",
                          //   padding: "4px 8px",
                        }}
                      >
                        variant present
                      </Box>
                    )}
                  </Box>
                </TableCell>

                {/* Product Name */}
                <TableCell>
                  <Box
                    sx={{
                      color: "#1976D2",
                      textDecoration: "underline",
                      fontWeight: 600,
                      fontSize: "14px",
                      color: "#3F59A3",
                    }}
                  >
                    {row.name}
                  </Box>
                </TableCell>

                {/* Date */}
                <TableCell>{row.date}</TableCell>

                {/* Current Inventory */}
                <TableCell align="center">{row.inventory}</TableCell>

                {/* Price */}
                <TableCell align="right">₹ {row.price.toFixed(2)}</TableCell>

                {/* Admin Status */}
                <TableCell align="center">
                  <Box
                    sx={{
                      color: `${statusButton[row.status].color}`,
                      background: `${statusButton[row.status].background}`,
                      fontSize: "12px",
                      fontWeight: "bold",
                      textTransform: "capitalize",
                      borderRadius: "4px",
                      padding: "4px 8px",
                    }}
                  >
                    {row.status}
                  </Box>
                </TableCell>

                {/* Featured Product Toggle */}
                <TableCell align="center">
                  {/* <Switch checked={row.featured} /> */}
                  <IOSSwitch checked={row.featured} />
                </TableCell>

                {/* Options */}
                <TableCell align="center">
                  <Box sx={{ display: "flex" }}>
                    <IconButton color="primary">{editIcon}</IconButton>
                    <IconButton color="error">{flowbiteIcon} </IconButton>
                    <IconButton
                      color="primary"
                      onClick={() => console.log(row.name)}
                    >
                      {deleteIcon}
                    </IconButton>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        p={2}
      >
        {/* Left Section */}
        <Box display="flex" alignItems="center">
          <Typography variant="body2" mr={1}>
            Showing
          </Typography>
          <Select
            value={rowsPerPage}
            onChange={handleRowsPerPageChange}
            size="small"
            style={{ width: "60px" }}
          >
            {[10, 20, 30, 40, 50].map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
          <Typography variant="body2" ml={1}>
            of {totalItems}
          </Typography>
        </Box>

        {/* Pagination */}
        <Pagination
          count={Math.ceil(totalItems / rowsPerPage)}
          page={page}
          onChange={handlePageChange}
          renderItem={(item) => <CustomPaginationItem {...item} />}
          siblingCount={1}
          boundaryCount={1}
        />
      </Box>
      {/* Pagination */}

      {/* <Box
        sx={{ display: "flex", justifyContent: "flex-end", padding: "16px" }}
      >
        <Pagination count={10} variant="outlined" color="primary" />
      </Box> */}
    </Box>
  );
};

export default TableListing;
