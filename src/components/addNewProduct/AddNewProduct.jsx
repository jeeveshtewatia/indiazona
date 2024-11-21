import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import ProductDetails from "./ProductDetails";
import { arrowDownIcon } from "../../svgs/IconSvgs";

const AddNewProduct = () => {
  return (
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
        <Accordion
          key={index}
          sx={{
            backgroundColor: "#FFF7ED",
            border: "1px solid #FF8C00",
            borderRadius: "5px",
            marginTop: "20px",
          }}
          // expanded={false}
        >
          <AccordionSummary
            // expandIcon={
            //   <Button
            //     sx={{ background: "#3F59A3", color: "white" }}
            //     disabled={index !== 0}
            //   >
            //     Edit
            //   </Button>
            // }
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            // sx={{ transform: "none" }}
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems={"center"}
              width="100%"
            >
              <Typography>
                {index + 1}. {section}
              </Typography>
              <Button
                variant="outlined"
                sx={{
                  border: "1px solid #3F59A3",
                  color: "#3F59A3",
                  fontSize: "16px",
                  fontWeight: "600",
                }}
              >
                Edit
                <Box
                  sx={{
                    marginLeft: "10px",
                    textAlign: "center",
                    height: "20px",
                  }}
                >
                  {arrowDownIcon}
                </Box>
              </Button>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <ProductDetails />
          </AccordionDetails>
        </Accordion>
      ))}
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <Button variant="contained" sx={{ mt: 2 }}>
          Upload Product
        </Button>
      </Box>
    </Box>
  );
};

export default AddNewProduct;
