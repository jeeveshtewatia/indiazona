import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Paper,
} from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import {
  homeIconDashboard,
  languageDownIcon,
  notificationIcon,
  ordersIcon,
  productIcon,
  searchIcon,
} from "../svgs/IconSvgs";
import { Fullscreen } from "@mui/icons-material";
import ProductDetails from "./ProductDetails";
import BulkListingUI from "./BulkListing";
import { useSearchParams } from "react-router-dom";
import AddNewProduct from "./AddNewProduct";
import BulkListing from "./BulkListing";

const LogoIcon = (
  <svg
    width="38"
    height="65"
    viewBox="0 0 38 65"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.5623 63.3209C10.5623 63.3209 -2.3657 53.7364 0.383684 35.8412C0.63832 34.1852 1.34717 32.4983 2.03882 30.9215C3.38082 27.8575 5.47985 25.2032 7.54447 22.3974C9.06884 20.3318 10.4143 18.1629 11.1472 15.8562C11.9106 13.3884 12.3298 10.8269 12.3929 8.2444C12.3929 11.7629 12.238 15.4328 11.2092 18.8789C10.3868 21.6331 8.6043 24.1635 7.21413 26.7765C5.77578 29.4859 4.4613 32.2504 3.68363 35.1182C2.20743 40.6266 -0.0120344 51.1957 10.5657 63.3209"
      fill="#00C53C"
    />
    <path
      d="M19.3777 5.433C18.1424 7.38846 16.7315 9.21998 15.7646 11.2856C13.786 15.5305 12.8638 20.1816 13.9684 24.6881C15.4033 30.5407 20.6578 34.7615 24.5358 39.719C26.1221 41.7502 27.8048 44.0809 28.3209 46.656C28.3209 46.7042 28.3381 46.7593 28.3485 46.8075C28.7304 48.973 28.2693 51.5275 28.0422 53.4829C28.2074 52.6636 28.407 51.3416 28.579 50.3638C29.0595 47.6711 28.7733 44.8974 27.7532 42.3595C26.9827 40.6851 26.0479 39.0913 24.9625 37.6017C23.1766 35.0334 20.8126 32.7131 19.0818 30.1241C15.7818 25.1804 14.1921 19.2417 15.5547 13.847C16.298 10.9172 17.6985 8.11143 19.3846 5.44333L19.3777 5.433Z"
      fill="#FF8C00"
    />
    <path
      d="M23.829 0C22.3356 3.24303 20.8972 6.54115 19.655 9.85993C18.4128 13.1787 17.79 16.0981 18.1238 19.4548C18.4679 23.0627 20.1884 26.7154 22.0018 29.7829C23.8324 32.9054 25.9934 35.5735 27.9135 38.6341C29.4895 41.1232 30.5803 42.6036 31.2857 45.4782C31.9739 48.2083 32.3834 52.3637 32.0875 55.1557C32.6139 52.0917 32.9753 48.9588 32.7447 45.8604C32.624 44.1949 32.2767 42.5536 31.7124 40.982C31.1102 39.2917 30.2293 37.8354 29.3037 36.3034C25.8833 30.5678 22.0362 24.6705 21.1071 17.9331C20.7524 14.9068 20.8919 11.843 21.5201 8.86154C21.8022 7.37085 22.1704 5.88704 22.573 4.41011C22.9619 3.00205 23.7636 1.39774 23.8428 0H23.829Z"
      fill="#FF8C00"
    />
    <path
      d="M25.5424 24.5189C34.1863 38.1383 34.0796 37.0469 35.2083 42.8066C36.6225 50.0363 33.4017 55.8717 30.8898 59.8721C30.7246 60.1338 30.0055 61.1976 30.0055 61.1976C30.0055 61.1976 36.7946 54.5669 37.6067 46.5936C37.6549 46.1391 37.7615 44.466 37.7512 43.3815C37.6239 29.5797 27.4453 28.4505 24.9093 16.6867C23.8529 11.774 25.0125 7.04713 25.0125 7.04713C25.4943 4.08984 26.2995 1.85896 26.1653 1.81421C26.0311 1.76945 24.7888 4.78871 23.8873 8.30372C23.4778 9.90114 23.2197 11.2576 23.1268 11.8256C22.2769 17.124 23.6705 21.5719 25.5356 24.5258"
      fill="#FF8C00"
    />
    <path
      d="M18.6696 35.6727C18.6044 35.3772 18.4738 35.1001 18.2874 34.8618C18.101 34.6235 17.8636 34.43 17.5926 34.2956C17.183 34.1311 16.7469 34.0424 16.3057 34.034C15.9986 34.0307 15.6941 34.0901 15.4107 34.2085C15.1273 34.3269 14.871 34.5018 14.6574 34.7225C14.2332 35.1967 13.937 35.7714 13.7971 36.3922C13.4221 37.9242 13.1089 41.274 12.8371 46.3451C12.5664 51.041 12.4299 55.147 12.4276 58.6631C12.4276 59.7545 12.4276 60.6255 12.4827 61.2624C12.4999 61.5826 12.5205 61.8545 12.5515 62.0783C12.5724 62.2932 12.6233 62.5042 12.7029 62.7049C12.9179 63.2207 13.29 63.6556 13.7662 63.9477C14.2638 64.2298 14.829 64.3702 15.4007 64.354C16.1171 64.3937 16.8215 64.1571 17.3689 63.6929C17.6121 63.443 17.8009 63.1455 17.9235 62.819C18.046 62.4926 18.0998 62.1443 18.0812 61.796C18.0475 60.9776 17.7917 60.1838 17.3414 59.4997C17.2587 56.6203 17.3426 53.7385 17.5926 50.8688C18.0812 45.8654 18.4861 42.1278 18.8073 39.6559V39.6146C18.8658 38.9261 18.8933 38.3236 18.8933 37.7556C18.9122 37.0599 18.8358 36.3649 18.6662 35.6899M16.8769 35.9034L16.9147 35.9275C16.9058 35.9246 16.8961 35.9246 16.8872 35.9275"
      fill="#3F59A3"
    />
  </svg>
);

const categoryNavbarMapping = {
  addNewProduct: "Add New Product",
  bulkListing: "Bulk Product Listing",
};
const drawerWidth = 240;
const navigationMenu = [
  {
    title: "Product",
    id: "",
    icon: productIcon,
    disable: false,
    subTitle: [
      {
        title: "Add New Product",
        id: "addNewProduct",
        onclick: "",
      },
      {
        title: "Bulk Listing",
        id: "bulkListing",
        onclick: "  ",
      },
      {
        title: "All Products",
        id: "",
        onclick: "",
      },
    ],
  },
  {
    title: "Orders",
    id: "",
    icon: ordersIcon,
    disable: true,
    subTitle: [
      {
        title: "Add New Product",
        id: "",
        onclick: "",
      },
    ],
  },
  {
    title: "Return & Exchange",
    id: "",
    icon: "",
    disable: true,
    subTitle: [
      {
        title: "Add New Product",
        id: "",
        onclick: "",
      },
    ],
  },
  {
    title: "Penalties",
    id: "",
    icon: "",
    disable: true,
    subTitle: [
      {
        title: "Add New Product",
        id: "",
        onclick: "",
      },
    ],
  },
  {
    title: "Your wallet",
    id: "",
    icon: "",
    disable: true,
    subTitle: [
      {
        title: "Add New Product",
        id: "",
        onclick: "",
      },
    ],
  },
  {
    title: "Coupon",
    id: "",
    icon: "",
    disable: true,
    subTitle: [
      {
        title: "Add New Product",
        id: "",
        onclick: "",
      },
    ],
  },
  {
    title: "Shop Setting",
    id: "",
    icon: "",
    disable: true,
    subTitle: [
      {
        title: "Add New Product",
        id: "",
        onclick: "",
      },
    ],
  },
  {
    title: "Product",
    id: "",
    icon: "",
    disable: true,
    subTitle: [
      {
        title: "Add New Product",
        id: "",
        onclick: "",
      },
    ],
  },
  {
    title: "Uploaded Files",
    id: "",
    icon: "",
    disable: true,
    subTitle: [
      {
        title: "Add New Product",
        id: "",
        onclick: "",
      },
    ],
  },
  {
    title: "Admin Message",
    id: "",
    icon: "",
    disable: true,
    subTitle: [
      {
        title: "Add New Product",
        id: "",
        onclick: "",
      },
    ],
  },
  {
    title: "Support",
    id: "",
    icon: "",
    disable: true,
    subTitle: [
      {
        title: "Add New Product",
        id: "",
        onclick: "",
      },
    ],
  },
  {
    title: "FAQ & Update",
    id: "",
    icon: "",
    disable: true,
    subTitle: [
      {
        title: "Add New Product",
        id: "",
        onclick: "",
      },
    ],
  },
];

export default function PermanentDrawerLeft() {
  const [params, setParams] = useSearchParams();
  const category = params.get("category");
  return (
    <Box sx={{ display: "flex" }}>
      {/* <CssBaseline /> */}
      {/* <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Add New Product
          </Typography>
        </Toolbar>
      </AppBar> */}

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
        {/* <Toolbar /> */}
        {/* <Divider /> */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          {LogoIcon}
          <Typography
            sx={{ fontSize: 24, ml: 2, color: "#3F59A3", fontWeight: 500 }}
          >
            Indiazona
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              fontSize: 16,
              textAlign: "center",
              color: "#3F59A3",
              fontWeight: 500,
              mt: 2,
            }}
          >
            Demo Seller Shop
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              fontSize: 14,
              textAlign: "center",
              color: "#00C53C",
              fontWeight: 500,
              // mt: 2,
            }}
          >
            seller@example.com
          </Typography>
        </Box>
        {/* {LogoIcon} */}
        {/* <List> */}
        {/* <Toolbar /> */}
        <Box
          sx={{
            display: "flex",
            mt: 5,
            alignItems: "center",
            pl: 3,
            gap: 1,
            // height: "100%",
          }}
        >
          {homeIconDashboard}
          <Typography>Dashboard</Typography>
        </Box>
        {navigationMenu.map((item, index) => (
          <Accordion sx={{ boxShadow: "none", border: "none" }}>
            <AccordionSummary
              sx={{ boxShadow: "none", border: "none" }}
              expandIcon={index !== 0 ? null : <ArrowDownwardIcon />}
              // aria-controls="panel1-content"
              // id="panel1-header"
              disabled={item.disable}
            >
              {/* <ListItemIcon> */}
              {item.icon}
              {/* </ListItemIcon> */}
              <Typography sx={{ fontSize: "14px" }}>{item.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List dense={true}>
                {item.subTitle.map((subItem, subIndex) => (
                  <ListItem key={subIndex} disablePadding>
                    <ListItemButton
                      onClick={() => setParams({ category: subItem.id })}
                    >
                      <ListItemText
                        sx={{
                          fontSize: "14px",
                          color: `${subItem.id === category ? "#00C53C" : ""}`,
                        }}
                        primary={subItem.title}
                      />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </AccordionDetails>
          </Accordion>
        ))}
        {/* </List> */}
      </Drawer>
      <Box
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          padding: "20px 0",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#ffff",
        }}
      >
        <Typography
          sx={{
            color: "#3F59A3",
            fontWeight: 600,
            fontSize: "20px",
            ml: "20px",
          }}
        >
          {categoryNavbarMapping[category]}{" "}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", ml: 2, gap: 2 }}>
          <input
            type="text"
            placeholder={` Searching for something`}
            style={{
              border: "1px solid #ccc",
              borderRadius: "15px",
              padding: "8px",
            }}
          />

          <Paper
            sx={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#DEFFE8",
            }}
          >
            {/* <SearchIcon sx={{ color: "white" }} /> */}
            {notificationIcon}
          </Paper>
          <Paper
            sx={{
              width: 40,
              height: 30,
              borderRadius: "30%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#DEFFE8",
              padding: "3px 10px ",
            }}
          >
            {/* <SearchIcon sx={{ color: "white" }} /> */}
            eng
            {languageDownIcon}
          </Paper>
          {/* <Button sx={{ ml: 1, color: "#3F59A3" }}>
            <SearchIcon />
          </Button> */}
        </Box>
        {/* <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Add New Product
          </Typography>
        </Toolbar> */}
      </Box>
      {category === "addNewProduct" && <AddNewProduct />}
      {category === "bulkListing" && <BulkListing />}
    </Box>
  );
}
