import { CurrencyRupee } from "@mui/icons-material";
import {
  Box,
  Button,
  Dialog,
  Input,
  InputAdornment,
  OutlinedInput,
  Typography,
} from "@mui/material";
import React from "react";

const PaymentDialogbox = ({ paymentDialogOpen, handleClose }) => {
  return (
    <Dialog onClose={handleClose} open={paymentDialogOpen}>
      <Box
        sx={{
          width: "428px",
          height: "276",
          padding: "20px",
          borderRadius: "16px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          boxShadow: "0px 8px 36px 0px #00000029",
        }}
      >
        <Box>
          <Typography
            sx={{ fontSize: "19px", fontWeight: 700, color: "#000000" }}
          >
            Move to bank
          </Typography>
          <Typography
            sx={{ fontSize: "14px", fontWeight: 400, color: "#15192080" }}
          >
            Enter the amount to move from bank to wallet
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: 600,
              color: "#3F59A3",
              fontFamily: "sans-serif",
            }}
          >
            AMOUNT{" "}
          </Typography>
          <OutlinedInput
            placeholder="200"
            size="small"
            //   sx={{ flexGrow: 1, maxWidth: "500px" }}
            startAdornment={
              <InputAdornment position="start">
                {/* <FilterList /> */}
                <CurrencyRupee />
              </InputAdornment>
            }
            sx={{
              fontSize: "16px",
              fontWeight: "400",
              color: "#959595",
              flexGrow: 1,
              width: "100%",
              margin: "10px 0",
              padding: "10px",
            }}
          />{" "}
        </Box>
        <Button
          sx={{
            backgroundColor: "#FF8C00",
            width: "100%",
            color: "#FFFFFF",
            fontSize: "14px",
            fontWeight: 600,
            margin: "16px 0 0 0",
          }}
        >
          Submit
        </Button>
      </Box>
    </Dialog>
  );
};

export default PaymentDialogbox;
