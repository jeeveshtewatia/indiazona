import {
  Box,
  Pagination,
  PaginationItem,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import WalletOverview from "./WalletOverview";
import TransactionHistory from "./TransactionHistory";
import TableHead from "./TableHead";
const transactions = [
  {
    orderId: "2024W-01",
    orderDate: "16/11/2024",
    deliveryDate: "17/11/2024",
    withdraw: 500,
    total: 500,
    deductions: 50,
    netSales: 450,
    salesBreakDown: {
      sales: 300,
      service_charges: 30,
      rto_charges: 30,
      panelties: 30,
      refund_to_customer: 30,
      net_sales: 300,
    },
  },
  {
    orderId: "2124W-01",
    orderDate: "16/11/2024",
    deliveryDate: "17/11/2024",
    withdraw: 500,
    total: 500,
    deductions: 50,
    netSales: 450,
    salesBreakDown: {
      sales: 300,
      service_charges: 30,
      rto_charges: 30,
      panelties: 30,
      refund_to_customer: 30,
      net_sales: 300,
    },
  },
  {
    orderId: "2024W-01",
    orderDate: "16/11/2024",
    deliveryDate: "17/11/2024",
    withdraw: 500,
    total: 500,
    deductions: 50,
    netSales: 450,
    salesBreakDown: {
      sales: 300,
      service_charges: 30,
      rto_charges: 30,
      panelties: 30,
      refund_to_customer: 30,
      net_sales: 300,
    },
  },
  {
    orderId: "2024W-01",
    orderDate: "16/11/2024",
    deliveryDate: "17/11/2024",
    withdraw: 500,
    total: 500,
    deductions: 50,
    netSales: 450,
    salesBreakDown: {
      sales: 300,
      service_charges: 30,
      rto_charges: 30,
      panelties: 30,
      refund_to_customer: 30,
      net_sales: 300,
    },
  },
  {
    orderId: "2024W-01",
    orderDate: "16/11/2024",
    deliveryDate: "17/11/2024",
    withdraw: 500,
    total: 500,
    deductions: 50,
    netSales: 450,
    salesBreakDown: {
      sales: 300,
      service_charges: 30,
      rto_charges: 30,
      panelties: 30,
      refund_to_customer: 30,
      net_sales: 300,
    },
  },
  {
    orderId: "2024W-01",
    orderDate: "16/11/2024",
    deliveryDate: "17/11/2024",
    withdraw: 500,
    total: 500,
    deductions: 50,
    netSales: 450,
    salesBreakDown: {
      sales: 300,
      service_charges: 30,
      rto_charges: 30,
      panelties: 30,
      refund_to_customer: 30,
      net_sales: 300,
    },
  },
  {
    orderId: "2024W-01",
    orderDate: "16/11/2024",
    deliveryDate: "17/11/2024",
    withdraw: 500,
    total: 500,
    deductions: 50,
    netSales: 450,
    salesBreakDown: {
      sales: 300,
      service_charges: 30,
      rto_charges: 30,
      panelties: 30,
      refund_to_customer: 30,
      net_sales: 300,
    },
  },
  {
    orderId: "2024W-01",
    orderDate: "16/11/2024",
    deliveryDate: "17/11/2024",
    withdraw: 500,
    total: 500,
    deductions: 50,
    netSales: 450,
    salesBreakDown: {
      sales: 300,
      service_charges: 30,
      rto_charges: 30,
      panelties: 30,
      refund_to_customer: 30,
      net_sales: 300,
    },
  },
  {
    orderId: "2024W-01",
    orderDate: "16/11/2024",
    deliveryDate: "17/11/2024",
    withdraw: 500,
    total: 500,
    deductions: 50,
    netSales: 450,
    salesBreakDown: {
      sales: 300,
      service_charges: 30,
      rto_charges: 30,
      panelties: 30,
      refund_to_customer: 30,
      net_sales: 300,
    },
  },
  {
    orderId: "2024W-01",
    orderDate: "16/11/2024",
    deliveryDate: "17/11/2024",
    withdraw: 500,
    total: 500,
    deductions: 50,
    netSales: 450,
    salesBreakDown: {
      sales: 300,
      service_charges: 30,
      rto_charges: 30,
      panelties: 30,
      refund_to_customer: 30,
      net_sales: 300,
    },
  },
  // Add more transactions as needed
];
const Wallet = () => {
  const [search, setSearch] = useState("");

  const [tableData, setTableData] = useState(transactions);

  const handleSearch = (searchValue) => {
    setSearch(searchValue);
    const filteredData = transactions.filter((transaction) =>
      transaction.orderId.includes(searchValue)
    );
    setTableData(filteredData);
  };
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
      <TableHead handleSearch={handleSearch} search={search} />
      <TransactionHistory tableData={tableData} />
    </Box>
  );
};

export default Wallet;
