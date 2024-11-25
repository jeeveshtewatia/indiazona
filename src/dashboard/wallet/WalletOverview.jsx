import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import {
  accountBalanceWalletIcon,
  moveToBankIcon,
  paymentProcessingIcon,
} from "../../svgs/IconSvgs";
import PaymentDialogbox from "./PaymentDialogbox";

const WalletOverview = () => {
  const [paymentDialogOpen, setPaymentDialogOpen] = useState(false);

  const handleClose = () => {
    setPaymentDialogOpen(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        flexDirection: { xs: "column", sm: "row" }, // Responsive layout
        // padding: 2,
        // backgroundColor: "#f9f9f9",
        borderRadius: 2,
      }}
    >
      {/* Wallet Balance */}
      <Box
        sx={{
          display: "flex",
          //   flex: 1,
          border: "1px solid #FF8C001A",
          borderRadius: 2,
          padding: 2,
          flexDirection: "row",
          justifyContent: "space-between",
          //   textAlign: "center",
          backgroundColor: "#FFF9F2",
          width: "60%",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          {accountBalanceWalletIcon}
          <Typography
            sx={{ fontSize: "32px", fontWeight: "600", color: "#333333" }}
          >
            ₹2,45,400
          </Typography>
          <Typography
            sx={{ fontSize: "16px", fontWeight: "400", color: "#333333" }}
          >
            Wallet Balance
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-end",
            height: "full",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 1,
              alignItems: "center",
              border: "1px solid #FF8C00",
              backgroundColor: "#FF8C0014",
              borderRadius: 2,
              padding: 1,
              width: "fit-content",
              color: "#FF8C00",
              height: "fit-content",
              cursor: "pointer",
            }}
            onClick={() => setPaymentDialogOpen(true)}
          >
            <Typography sx={{ fontSize: "14px", fontWeight: "400" }}>
              Move to Bank
            </Typography>
            {moveToBankIcon}
          </Box>
        </Box>
      </Box>

      {/* Processing Payment */}
      <Box
        sx={{
          display: "flex",
          //   flex: 1,
          border: "1px solid #3F59A31A",
          borderRadius: 2,
          padding: 2,
          flexDirection: "row",
          justifyContent: "space-between",
          //   textAlign: "center",
          backgroundColor: "#F7F9FF",
          width: "40%",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          {paymentProcessingIcon}
          <Typography
            sx={{ fontSize: "32px", fontWeight: "600", color: "#333333" }}
          >
            ₹30,00,000
          </Typography>
          <Typography
            sx={{ fontSize: "16px", fontWeight: "400", color: "#333333" }}
          >
            Processing Payment
          </Typography>
        </Box>
      </Box>
      <PaymentDialogbox
        paymentDialogOpen={paymentDialogOpen}
        handleClose={handleClose}
      />
    </Box>
  );
};

export default WalletOverview;
