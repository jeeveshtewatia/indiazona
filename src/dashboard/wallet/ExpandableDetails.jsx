import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ExpandableDetails = () => {
  return (
    <Box sx={{ mt: 3 }}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Net Sales Breakdown</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Sales: ₹1000</Typography>
          <Typography>Charges: -₹100</Typography>
          <Typography>Refunds: -₹50</Typography>
          <Typography>Net Sales: ₹850</Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default ExpandableDetails;
