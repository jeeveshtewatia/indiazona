import {
  Box,
  Pagination,
  PaginationItem,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import WalletOverview from "./WalletOverview";
import TransactionHistory from "./TransactionHistory";
import TableHead from "./TableHead";

const Wallet = () => {
  return (
    <Box
      component="main"
      sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
    >
      <Toolbar />
      <Typography sx={{ fontSize: "20px", fontWeight: "600" }}>
        Wallet
      </Typography>
      <WalletOverview />
      <TableHead />
      <TransactionHistory />
      <Box sx={{ display: "flex", justifyContent: "end", mt: 2 }}>
        <Pagination
          count={6} // Total number of pages
          page={2} // Current active page
          siblingCount={1} // Number of siblings shown around the active page
          boundaryCount={1} // Number of boundary pages shown on each end
          renderItem={(item) => (
            <PaginationItem
              {...item}
              sx={{
                borderRadius: "8px", // Square edges with slight rounding
                border: item.selected ? "1.5px solid #E4E4E4" : "none", // Light gray border
                minWidth: "36px", // Square shape
                height: "36px", // Consistent height
                fontSize: "14px", // Text size
                // color: item.selected ? "#fff" : "#000", // White text on active
                backgroundColor: item.selected ? "#F9FAFC" : "transparent", // Light gray background for active
                "&:hover": {
                  backgroundColor: item.selected ? "#E0E0E0" : "#f5f5f5", // Light hover effect
                },
              }}
            />
          )}
        />
      </Box>
    </Box>
  );
};

export default Wallet;
