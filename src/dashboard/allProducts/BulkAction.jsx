import { Box, Button, Divider, Popper, Typography } from "@mui/material";
import React from "react";

const BulkAction = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  const handleDeleteMultipleClick = () => {
    console.log("delete multiple");
  };
  const handleDownloadMultipleClick = () => {
    console.log("download multiple");
  };
  return (
    <>
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <Box
          sx={{
            p: 2,
            bgcolor: "background.paper",
            boxShadow: 3,
            borderRadius: "10px",
            mt: 1,
            width: "164px",
          }}
        >
          <Typography
            fontSize={"14px"}
            color="#212121"
            onClick={() => handleDeleteMultipleClick()}
            sx={{ cursor: "pointer" }}
          >
            Delete Multiple Selection
          </Typography>
          <Divider sx={{ my: 1 }} />
          <Typography
            fontSize={"14px"}
            color="#212121"
            onClick={() => handleDownloadMultipleClick()}
            sx={{ cursor: "pointer" }}
          >
            Download Multiple
          </Typography>
        </Box>
      </Popper>
      <Button
        variant="outlined"
        sx={{
          width: "120px",
          height: "40px",
          textTransform: "none",
          borderColor: "#3F51B5",
          color: "#3F59A3",
          "&:hover": {
            borderColor: "#303F9F",
            backgroundColor: "rgba(63, 81, 181, 0.04)",
          },
        }}
        onClick={(e) => handleClick(e)}
      >
        Bulk Action
      </Button>
    </>
  );
};

export default BulkAction;
