import React from "react";
import { TextField, Button, MenuItem, Typography, Box } from "@mui/material";

const ProductDetails = () => {
  return (
    <Box sx={{ padding: 3, backgroundColor: "#FFF7ED", borderRadius: "8px" }}>
      <Box sx={{ display: "flex", gap: 2 }}>
        <Box sx={{ flex: 1 }}>
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            Select your product type *
          </Typography>
          <TextField
            select
            fullWidth
            variant="outlined"
            margin="normal"
            placeholder="Select from dropdown"
            sx={{ backgroundColor: "white" }}
          >
            <MenuItem value="option1">Option 1</MenuItem>
            <MenuItem value="option2">Option 2</MenuItem>
          </TextField>
        </Box>
        <Box sx={{ flex: 1 }}>
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            Item Sub Category
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            margin="normal"
            placeholder="Filled automatically based on product type"
            sx={{ backgroundColor: "white" }}
            disabled
          />
        </Box>
      </Box>

      <Box sx={{ display: "flex", gap: 2 }}>
        <Box sx={{ flex: 1 }}>
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            Product Title *
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            margin="normal"
            placeholder="eg: Brand Name followed by Product name"
            sx={{ backgroundColor: "white" }}
          />
        </Box>
        <Box sx={{ flex: 1 }}>
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            Item category
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            margin="normal"
            placeholder="Filled automatically based on product type"
            sx={{ backgroundColor: "white" }}
            disabled
          />
        </Box>
      </Box>

      <Box sx={{ display: "flex", gap: 2 }}>
        <Box sx={{ flex: 1 }}>
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            Brand Name *
          </Typography>
          <TextField
            select
            fullWidth
            variant="outlined"
            margin="normal"
            placeholder="Select from dropdown"
            sx={{ backgroundColor: "white" }}
          >
            <MenuItem value="brand1">Brand 1</MenuItem>
            <MenuItem value="brand2">Brand 2</MenuItem>
          </TextField>
          <Button variant="text" color="primary" sx={{ padding: 0 }}>
            Add New brand
          </Button>
        </Box>
        <Box sx={{ flex: 1 }}>
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            Tags
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            margin="normal"
            placeholder="Type and hit enter to add a tag"
            sx={{ backgroundColor: "white" }}
          />
        </Box>
      </Box>

      <Typography variant="body1" sx={{ fontWeight: "bold" }}>
        Product Description *
      </Typography>
      <TextField
        fullWidth
        variant="outlined"
        margin="normal"
        multiline
        rows={4}
        placeholder="Write your description here"
        sx={{ backgroundColor: "white" }}
      />

      <Typography variant="body1" sx={{ fontWeight: "bold" }}>
        Product Specification *
      </Typography>
      <Typography variant="body2" sx={{ marginBottom: 2 }}>
        Based on the product category and subcategory, automatic specification
        suggestions are provided, with the option to add them manually as well.
      </Typography>
      <Box sx={{ display: "flex", gap: 2 }}>
        <Button variant="contained" color="primary">
          Select Specification
        </Button>
        <Button variant="contained" color="secondary">
          Add Custom Attribute
        </Button>
      </Box>
    </Box>
  );
};

export default ProductDetails;
