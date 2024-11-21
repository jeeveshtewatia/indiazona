import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  MenuItem,
  Pagination,
  Select,
  Switch,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tabs,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { Download, Edit, Delete } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import DownloadIcon from "@mui/icons-material/Download";
import TableListing from "./TableListing";
import { downloadIcon } from "../../svgs/IconSvgs";

const ProductTable = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Box
      component="main"
      sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
    >
      {/* Header Section */}
      <Toolbar />
      <Box>
        <Typography
          variant=""
          gutterBottom
          sx={{ color: "#9B9B9B", fontSize: "14px", fontWeight: 600 }}
        >
          Product/All Products
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box
          sx={{ borderBottom: 1, borderColor: "divider", width: "fit-content" }}
        >
          <Tabs
            value={selectedTab}
            onChange={handleTabChange}
            textColor="inherit"
            TabIndicatorProps={{
              style: {
                backgroundColor: "#FF8C00",
                height: "2px",
              },
            }}
            sx={{
              "& .MuiTab-root": {
                textTransform: "none", // Prevent text capitalization
                color: "#808080", // Default text color
                fontWeight: 500,
              },
              "& .Mui-selected": {
                color: "#FFA500", // Highlighted text color for selected tab
              },
            }}
          >
            <Tab label="All" />
            <Tab label="Approved" />
            <Tab label="Pending" />
            <Tab label="Live Product" />
            <Tab label="Inactive" />
            <Tab label="Rejected" />
          </Tabs>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            alignItems: "baseline",
          }}
        >
          <TextField
            placeholder="Search"
            size="small"
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            sx={{
              height: "40px",
              width: "200px", // Adjust width of the search bar
              backgroundColor: "#F9F9F9", // Background for the search bar
              borderRadius: "4px", // Rounded corners
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#E0E0E0", // Light border color
                },
                "&:hover fieldset": {
                  borderColor: "#B0B0B0", // Darker border on hover
                },
              },
            }}
          />

          {/* Download Button */}
          <Button
            variant="contained"
            startIcon={downloadIcon}
            sx={{
              height: "40px",
              fontSize: "12px",
              fontWeight: 500,
              backgroundColor: "#3F59A3", // Blue background
              color: "#FFFFFF", // White text
              textTransform: "none", // Prevent capitalization
              "&:hover": {
                backgroundColor: "#303F9F", // Darker blue on hover
              },
            }}
            onClick={() => console.log("download")}
          >
            Download
          </Button>

          {/* Bulk Action Button */}
          <Button
            variant="outlined"
            sx={{
              width: "120px",
              height: "40px",
              textTransform: "none",
              borderColor: "#3F51B5",
              color: "#3F59A3",
              "&:hover": {
                borderColor: "#303F9F",
                backgroundColor: "rgba(63, 81, 181, 0.04)",
              },
            }}
            onClick={() => console.log("bulk action")}
          >
            Bulk Action
          </Button>
        </Box>
      </Box>

      {/* Table Section */}
      <TableListing />

      {/* Pagination Section */}
    </Box>
  );
};

export default ProductTable;
