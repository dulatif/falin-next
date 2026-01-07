"use client";

import {
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

// # components
export default function SelectDemo() {
  const [value, setValue] = useState("");

  return (
    <Stack spacing={2}>
      <Typography variant="subtitle2" color="text.secondary">
        Select dropdowns and multiline text areas.
      </Typography>

      <Paper
        elevation={0}
        sx={{ p: 4, border: 1, borderColor: "divider", borderRadius: 2 }}
      >
        <Stack direction="column" spacing={3} maxWidth={400}>
          {/* Select */}
          <FormControl variant="standard" fullWidth>
            <InputLabel id="demo-simple-select-label">Select Option</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={value}
              label="Select Option"
              onChange={(e) => setValue(e.target.value)}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>

          {/* Multiline */}
          <TextField
            label="Multiline / Text Area"
            multiline
            rows={4}
            variant="standard"
            placeholder="Type your message here..."
          />
        </Stack>
      </Paper>
    </Stack>
  );
}
