import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Collapse,
  Box,
  Divider,
  Pagination,
  PaginationItem,
} from "@mui/material";
import { ArrowDropDown } from "@mui/icons-material";
import { tableArrowDownIcon, tableArrowUpIcon } from "../../svgs/IconSvgs";

const TableHeader = [
  "Order Id ",
  "Order Date",
  "Delivery date",
  "Bill due on",
  "Sale amount",
  "Deduction",
  "Net Sales",
  "",
];

const SalesBreakDown = ({ salesBreakDown }) => {
  return (
    <>
      <Box
        sx={{
          border: "1px solid #e0e0e0",
          borderRadius: 2,
          padding: 2,
          backgroundColor: "#fff",
          //   maxWidth: 500,
          margin: "auto",
          m: 2,
          //   width: "100%",
        }}
      >
        {/* Title */}
        <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 2 }}>
          Net sales breakdown
        </Typography>

        {/* Sales Breakdown Items */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mb: 1,
          }}
        >
          <Typography>Sales</Typography>
          <Typography>₹{salesBreakDown.sales}</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mb: 1,
          }}
        >
          <Typography>Indiazona service charges</Typography>
          <Typography>-₹{salesBreakDown.service_charges}</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mb: 1,
          }}
        >
          <Typography>RTO charges</Typography>
          <Typography>-₹{salesBreakDown.rto_charges}</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mb: 1,
          }}
        >
          <Typography>Penalties</Typography>
          <Typography>-₹{salesBreakDown.panelties}</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mb: 2,
          }}
        >
          <Typography>Refund to customer</Typography>
          <Typography>-₹{salesBreakDown.refund_to_customer}</Typography>
        </Box>

        {/* Divider */}
        <Divider sx={{ mb: 2 }} />

        {/* Net Sales Total */}
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography fontWeight="bold">Net Sales</Typography>
          <Typography fontWeight="bold">₹{salesBreakDown.net_sales}</Typography>
        </Box>
      </Box>
      {/* <Typography>Net Sales: ₹850</Typography> */}
    </>
  );
};
const RowStyle = ({ row, index }) => {
  const [isRowOpen, setIsRowOpen] = useState(false);

  return (
    <>
      <>
        <TableRow
          key={index}
          backgroundColor={index % 2 == 0 ? "" : "#F9FAFC"}
          color="#1B2128"
        >
          {/* <Accordion>
            <AccordionSummary
              //   expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            > */}
          <TableCell>{row.orderId}</TableCell>
          <TableCell>{row.orderDate}</TableCell>
          <TableCell>{row.deliveryDate}</TableCell>
          <TableCell>{row.withdraw}</TableCell>
          <TableCell>₹{row.total}</TableCell>
          <TableCell sx={{ color: "#FF5252" }}>-₹{row.deductions}</TableCell>
          <TableCell sx={{ fontWeight: "600" }}>₹{row.netSales}</TableCell>
          {/* <Typography>Net Sales Breakdown</Typography> */}
          {/* </AccordionSummary> */}
          {/* <AccordionDetails>
            <Typography>Sales: ₹1000</Typography>
            <Typography>Charges: -₹100</Typography>
            <Typography>Refunds: -₹50</Typography>
            <Typography>Net Sales: ₹850</Typography>
          </AccordionDetails> */}
          {/* </Accordion> */}

          <TableCell onClick={() => setIsRowOpen(!isRowOpen)}>
            {isRowOpen ? tableArrowUpIcon : tableArrowDownIcon}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell
            style={{
              paddingBottom: 0,
              paddingTop: 0,
              backgroundColor: "#F9FAFC",
            }}
            colSpan="100%"
          >
            <Collapse
              in={isRowOpen}
              timeout="auto"
              unmountOnExit
              width={"100%"}
            >
              <SalesBreakDown salesBreakDown={row.salesBreakDown} />
            </Collapse>
          </TableCell>
        </TableRow>
      </>
    </>
  );
};
const TransactionHistory = ({ tableData }) => {
  return (
    <>
      <TableContainer component={Paper} sx={{ mt: 3 }}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              {TableHeader.map((header, index) => (
                <TableCell
                  sx={{ color: "#A1A1A1", size: "12px", lineHeight: "14px" }}
                  key={index}
                >
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row, index) => (
              <RowStyle row={row} index={index} />
            ))}
            <TableRow sx={{ backgroundColor: "#F9FAFC", mt: 2 }}>
              <TableCell colSpan="4" sx={{ fontWeight: "600" }}>
                Total
              </TableCell>
              <TableCell>
                ₹{tableData.reduce((acc, curr) => acc + curr.total, 0)}
              </TableCell>
              <TableCell>
                -₹ {tableData.reduce((acc, curr) => acc + curr.deductions, 0)}
              </TableCell>
              <TableCell sx={{ fontWeight: "600" }}>
                ₹
                {/* {transactions.reduce((acc, curr) => acc + curr.netSales, 0) -
                tableData.reduce((acc, curr) => acc + curr.deductions, 0)} */}
                {tableData.reduce((acc, curr) => acc + curr.netSales, 0)}
              </TableCell>
              <TableCell></TableCell>
            </TableRow>
            {/* <TableRow>
            <TableCell colSpan="100%" sx={{ padding: 0 }}>
              <Pagination count={10} color="primary" />
            </TableCell>
          </TableRow> */}
          </TableBody>
        </Table>
      </TableContainer>
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
    </>
  );
};

export default TransactionHistory;
