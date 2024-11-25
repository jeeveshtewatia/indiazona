import React, { useState } from "react";
import {
  Typography,
  Button,
  Box,
  Paper,
  TextField,
  Toolbar,
  InputAdornment,
} from "@mui/material";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { videoIcon } from "../../svgs/IconSvgs";

const HighlightText = ({ children }) => {
  return (
    <Typography component="span" sx={{ color: "#FF8C00", fontWeight: 500 }}>
      {children}
    </Typography>
  );
};

const BulkListing = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files?.[0] || null;
    setFile(selectedFile);
  };

  return (
    <Box
      component="main"
      sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
    >
      <Toolbar />
      {/* <Paper elevation={3} sx={{ margin: "20px auto" }}> */}
      {/* Steps Section */}
      <Box>
        <Typography
          variant=""
          gutterBottom
          sx={{ color: "#9B9B9B", fontSize: "14px", fontWeight: 600 }}
        >
          Product/Bulk Listing
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          variant=""
          gutterBottom
          sx={{ color: "#3F59A3", fontSize: "20px", fontWeight: 600 }}
        >
          Steps
        </Typography>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#3F59A3", color: "white" }}
          startIcon={videoIcon}
        >
          Help Video
        </Button>
      </Box>
      <Box sx={{ marginBottom: "20px", fontSize: "16px", fontWeight: 600 }}>
        <Typography variant="body1" sx={{ marginBottom: "10px" }}>
          1. Open the{" "}
          <HighlightText>
            downloaded file in any Excel-compatible software
          </HighlightText>{" "}
          and fill in each column following the instructions carefully.
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: "10px" }}>
          2. Please keep in mind to check the Item name column and ensure you{" "}
          <HighlightText>
            {" "}
            only use names that are present in the providing list{" "}
          </HighlightText>{" "}
          as using other names may cause issues.
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: "10px" }}>
          3. Make{" "}
          <HighlightText> sure all the details are accurate</HighlightText>, as
          this information will be directly updated in your inventory.
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: "10px" }}>
          4. After completing the sheet,{" "}
          <HighlightText>upload the file to the portal</HighlightText> by
          clicking on the "Browse" option and then clicking "Upload."
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: "10px" }}>
          5. After this, you need to{" "}
          <HighlightText>
            {" "}
            upload images (at least 4) and a high-quality video
          </HighlightText>
          . If your product has multiple variants, such as different colors, add
          these as well and upload separate images for each.{" "}
          <HighlightText>
            Update the inventory based on your stock. If any edits are required,
            you can update the details later by clicking on "edit."
          </HighlightText>
        </Typography>
      </Box>

      {/* Download Section */}
      <Box sx={{ display: "flex", alignItems: "center", marginTop: "20px" }}>
        <Button
          variant="contained"
          sx={{
            marginRight: "10px",
            backgroundColor: "#3F59A3",
            color: "white",
          }}
        >
          Download format of excel file
        </Button>
      </Box>

      {/* File Upload Section */}
      {/* <Box sx={{ marginTop: "30px" }}>
        <Typography variant="h6" gutterBottom>
          Upload excel file *
        </Typography>
        <TextField
          type="file"
          inputProps={{ accept: ".csv, .xlsx" }}
          fullWidth
          sx={{ marginBottom: "10px" }}
        />
        <Button
          variant="contained"
          startIcon={<UploadFileIcon />}
          fullWidth
          color="secondary"
        >
          Upload
        </Button>
      </Box> */}
      <Box
        sx={{
          // maxWidth: "500px",
          margin: "20px auto",
          padding: "20px",
          border: "1px solid #e0e0e0",
          borderRadius: "8px",
          backgroundColor: "#fff",
          boxShadow: "0px 2px 22px 2px #00000026",
        }}
      >
        {/* Title */}
        <Typography variant="h6" sx={{ marginBottom: "16px" }}>
          Upload excel file{" "}
          <Typography component="span" color="error">
            *
          </Typography>
        </Typography>

        {/* File Input Field */}
        <TextField
          type="file"
          variant="outlined"
          inputProps={{ accept: ".csv, .xlsx" }}
          // onChange={handleFileChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                csv or excel file
              </InputAdornment>
            ),
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "4px",
            },
            "& input": {
              cursor: "pointer",
            },
          }}
        />

        {/* Upload Button */}
        <hr style={{ borderTop: "1px solid #FF8C00", marginTop: "20px" }} />
        <Button
          variant="contained"
          // fullWidth
          sx={{
            marginTop: "10px",
            backgroundColor: file ? "primary.main" : "#e0e0e0",
            color: file ? "white" : "rgba(0, 0, 0, 0.26)",
            pointerEvents: file ? "auto" : "none",
          }}
        >
          Upload
        </Button>
      </Box>
    </Box>
  );
};

export default BulkListing;
