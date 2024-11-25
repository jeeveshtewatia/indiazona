import React from "react";
import { TextField, InputAdornment, Box, Typography } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import CalendarIcon from "@mui/icons-material/CalendarTodayOutlined";

export default function SingleInputDateRangePicker() {
  const [value, setValue] = React.useState([null, null]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={{ width: "100%", maxWidth: "400px" }}>
        <Typography variant="body1" gutterBottom>
          Date range
        </Typography>
        <DateRangePicker
          value={value}
          onChange={(newValue) => setValue(newValue)}
          slots={{
            textField: (params) => (
              <TextField
                {...params}
                placeholder="Select start and end date"
                fullWidth
                InputProps={{
                  ...params.InputProps,
                  endAdornment: (
                    <InputAdornment position="end">
                      <CalendarIcon />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8px", // Rounded corners
                    paddingRight: "12px",
                  },
                  "& .MuiInputBase-input": {
                    fontSize: "14px", // Text styling
                  },
                }}
              />
            ),
          }}
        />
      </Box>
    </LocalizationProvider>
  );
}
