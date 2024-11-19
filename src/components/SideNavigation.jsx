import React from "react";
import {
  Box,
  Drawer,
  AppBar,
  Toolbar,
  Typography,
  List,
  ListItem,
  ListItemButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  Divider,
} from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import LogoIcon from "@mui/icons-material/Store"; // Replace with your logo component

const drawerWidth = 240;

export default function DemoSellerShop() {
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <LogoIcon sx={{ mr: 2 }} />
          <Typography variant="h6" noWrap>
            Add New Product
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {[
            "Dashboard",
            "Add New Product",
            "All Products",
            "Return & Exchange",
            "Your Wallet",
            "Coupons",
            "Uploaded Files",
            "Shop Message",
            "Support",
            "FAQ & Updates",
          ].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <Typography>{text}</Typography>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
        {[
          "Product Details",
          "Delivery Preferences",
          "Features & Policies",
          "Weight & Measurements",
          "Inventory & Pricing",
          "Product Images & Video",
        ].map((section, index) => (
          <Accordion key={index}>
            <AccordionSummary expandIcon={<ArrowDownwardIcon />}>
              <Typography>
                {index + 1}. {section}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Button variant="outlined">Edit</Button>
            </AccordionDetails>
          </Accordion>
        ))}
        <Button variant="contained" sx={{ mt: 2 }}>
          Upload Product
        </Button>
      </Box>
    </Box>
  );
}
