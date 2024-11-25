import React from "react";
import { Box, Button, Divider, Typography } from "@mui/material";

const filterItems = [
  {
    title: "Bill due date",
    id: "billDueDate",
  },
  {
    title: "Refunded item",
    id: "refundedItem",
  },
  {
    title: "Return item",
    id: "returnItem",
  },
  {
    title: "Delivered item",
    id: "deliveredItem",
  },
];
const ItemFilters = () => {
  return (
    <>
      <Box sx={{ display: "flex", gap: 2, flexDirection: "column" }}>
        <Typography sx={{ fontSize: "14px", fontWeight: 400 }}>
          Filter by
        </Typography>
        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
          {filterItems.map((filter) => (
            <Button
              sx={{
                textTransform: "none",
                borderRadius: "100px",
                backgroundColor: "#E6EDFF",
                //   color:
                //     filter.id === selectedFilter ? "#3F59A3" : "#1B2128",
                color: "#020305",
                display: "flex",
                alignItems: "center",
                gap: 1,
                fontSize: "14px",
                //   fontWeight: filter.id === selectedFilter ? 600 : 400,
                fontWeight: 400,
                padding: "6px 12px",
              }}
              // onClick={(e) => handleFilterChange(e, filter.id)}
            >
              {/* {filter.id === selectedFilter && rightCheckIcon} */}

              {filter.title}
            </Button>
          ))}
        </Box>
      </Box>
      {/* <Divider sx={{ mt: 2, mb: 2 }} />
      <Box sx={{ display: "flex", gap: 2, flexDirection: "column" }}>
        <Typography sx={{ fontSize: "14px", fontWeight: 400 }}>
          Date range
        </Typography>
        <Box></Box>
      </Box> */}
      <Box sx={{ display: "flex", gap: 2, width: "100%", mt: 3 }}>
        <Button
          sx={{
            textTransform: "none",
            fontSize: "14px",
            fontWeight: 600,
            color: "#FF8C00",
            width: "50%",
          }}
        >
          Clear filter
        </Button>
        <Button
          sx={{
            textTransform: "none",
            fontSize: "14px",
            fontWeight: 600,
            color: "#FFFFFF",
            backgroundColor: "#3F59A3",
            width: "50%",
          }}
        >
          Apply filter
        </Button>
      </Box>
    </>
  );
};

export default ItemFilters;
