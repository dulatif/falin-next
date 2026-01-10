"use client";

import {
  FormControl,
  FormHelperText,
  FormLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";

// # components
export default function SelectBasicDemo() {
  const [religion, setReligion] = useState("");
  const [country, setCountry] = useState(" ");

  const handleChange = (event: SelectChangeEvent) => {
    setReligion(event.target.value);
  };

  const handleCountryChange = (event: SelectChangeEvent) => {
    setCountry(event.target.value);
  };

  return (
    <Stack spacing={2}>
      <Typography variant="subtitle2" color="text.secondary">
        Standard Material UI Select within FormControl.
      </Typography>

      <Paper
        elevation={0}
        sx={{ p: 4, border: 1, borderColor: "divider", borderRadius: 2 }}
      >
        <Stack spacing={4}>
          {/* Basic */}
          <FormControl fullWidth>
            <FormLabel htmlFor="religion-select">Religion</FormLabel>
            <Select
              id="religion-select"
              value={religion}
              onChange={handleChange}
              displayEmpty
            >
              <MenuItem value="" disabled>
                Select Religion
              </MenuItem>
              <MenuItem value="Islam">Islam</MenuItem>
              <MenuItem value="Kristen">Kristen</MenuItem>
              <MenuItem value="Katholik">Katholik</MenuItem>
              <MenuItem value="Budha">Budha</MenuItem>
              <MenuItem value="Hindu">Hindu</MenuItem>
            </Select>
          </FormControl>

          {/* With Placeholder & Helper Text */}
          <FormControl fullWidth error>
            <FormLabel htmlFor="country-select">
              Country (Error State)
            </FormLabel>
            <Select
              id="country-select"
              value={country}
              onChange={handleCountryChange}
            >
              <MenuItem value=" ">-- Select Country --</MenuItem>
              <MenuItem value="Indonesia">Indonesia</MenuItem>
              <MenuItem value="Malaysia">Malaysia</MenuItem>
              <MenuItem value="Singapore">Singapore</MenuItem>
            </Select>
            <FormHelperText>Error message example</FormHelperText>
          </FormControl>

          {/* Disabled */}
          <FormControl fullWidth disabled>
            <FormLabel>Disabled Select</FormLabel>
            <Select value="Islam" readOnly>
              <MenuItem value="Islam">Islam</MenuItem>
            </Select>
          </FormControl>
        </Stack>
      </Paper>
    </Stack>
  );
}
