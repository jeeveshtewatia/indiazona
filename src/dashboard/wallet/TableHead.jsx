import React, { useState } from "react";
import {
  Box,
  Button,
  Divider,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Popper,
  Typography,
} from "@mui/material";
import { FilterList } from "@mui/icons-material";
import {
  calendarIcon,
  downloadIcon,
  filterListIcon,
  graySearchIcon,
  rightCheckIcon,
} from "../../svgs/IconSvgs";
import CalenderFilters from "./CalenderFilters";
import ItemFilters from "./ItemFilters";

const filters = [
  {
    title: "All",
    id: "all",
  },
  {
    title: "Refunded Items",
    id: "refunded",
  },
  {
    title: "Return Items",
    id: "returned",
  },
  {
    title: "Delivered Items",
    id: "delivered",
  },
];

function TableHead({ handleSearch, search }) {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const handleFilterChange = (event, newFilter) => {
    if (newFilter !== null) {
      setSelectedFilter(newFilter);
    }
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [currentButton, setCurrentButton] = useState(null); // To identify which button triggered the popup

  // Open the popover
  const handleOpen = (e, buttonId) => {
    console.log("🚀 ~ handleOpen ~ buttonId:", buttonId);
    setAnchorEl(anchorEl ? null : e.currentTarget);
    setCurrentButton(buttonId); // Set the button ID
  };

  // Close the popover
  const handleClose = () => {
    setAnchorEl(null);
    setCurrentButton(null);
  };

  // Handle confirmation (Yes button)
  const handleConfirm = () => {
    console.log(`Confirmed action for button ${currentButton}`);
    handleClose();
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  return (
    <Box sx={{ mt: 3 }}>
      {/* Title */}
      <Typography
        sx={{
          fontSize: "20px",
          fontWeight: "600",
          color: "#1B2128",
          padding: "10px 0",
        }}
      >
        Transaction History
      </Typography>

      {/* Search, Filter, and Actions */}
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{ gap: 2 }}
      >
        {/* Search Field */}
        <OutlinedInput
          placeholder="Search via Order ID"
          size="small"
          //   sx={{ flexGrow: 1, maxWidth: "500px" }}
          startAdornment={
            <InputAdornment position="start">
              {/* <FilterList /> */}
              {graySearchIcon}
            </InputAdornment>
          }
          sx={{
            fontSize: "16px",
            fontWeight: "400",
            color: "#959595",
            flexGrow: 1,
            maxWidth: "500px",
          }}
          onChange={(e) => handleSearch(e.target.value)}
          value={search}
        />

        {/* Actions */}
        <Box display="flex" alignItems="center" sx={{ gap: 1 }}>
          <Typography
            sx={{
              border: `1.4px solid ${currentButton === "calendar" && open ? "#FF8C00" : "#E4E4E4"}`,
              borderRadius: "10px",
              width: "48px",
              height: "48px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={(event) => handleOpen(event, "calendar")}
          >
            {calendarIcon}{" "}
          </Typography>
          <Typography
            sx={{
              border: `1.4px solid ${currentButton === "filter" && open ? "#FF8C00" : "#E4E4E4"}`,
              borderRadius: "10px",
              width: "48px",
              height: "48px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={(e) => handleOpen(e, "filter")}
          >
            {filterListIcon}
          </Typography>
          <Button
            variant="contained"
            endIcon={downloadIcon}
            sx={{
              backgroundColor: "#3F51B5",
              textTransform: "none",
              padding: "12px 18px",
              ":hover": {
                backgroundColor: "#303F9F",
              },
            }}
          >
            Download Reports
          </Button>
        </Box>
      </Box>

      {/* Filters */}
      <Box sx={{ mt: 2 }}>
        <Box sx={{ display: "flex", gap: 1 }}>
          {filters.map((filter) => (
            <Button
              sx={{
                textTransform: "none",
                borderRadius: "100px",
                backgroundColor: "#E6EDFF",
                color: filter.id === selectedFilter ? "#3F59A3" : "#1B2128",
                display: "flex",
                alignItems: "center",
                gap: 1,
                fontSize: "14px",
                fontWeight: filter.id === selectedFilter ? 600 : 400,
                padding: "10px 16px",
              }}
              onClick={(e) => handleFilterChange(e, filter.id)}
            >
              {filter.id === selectedFilter && rightCheckIcon}

              {filter.title}
            </Button>
          ))}
        </Box>

        <Popper
          id={id}
          open={open}
          anchorEl={anchorEl}
          placement="bottom"
          modifiers={[
            {
              name: "flip",
              enabled: false, // Disable flipping to other positions
            },
            {
              name: "preventOverflow",
              enabled: false, // Disable repositioning to prevent overflow
            },
          ]}
        >
          <Box
            sx={{
              padding: "16px",
              width: "396px",
              // height: "317px",
              borderRadius: "8px",
              boxShadow:
                "0px 4px 12px 0px #0000001A  0px 2px 8px 0px #0000000F",
              border: "1.5px solid #ECEFF7",
              backgroundColor: "#FFFFFF",
              mt: "16px",
              p: 2,
            }}
          >
            {currentButton === "calendar" && <CalenderFilters />}
            {currentButton === "filter" && <ItemFilters />}
          </Box>
        </Popper>
      </Box>
    </Box>
  );
}

export default TableHead;
