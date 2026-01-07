"use client";

import {
  FormControlLabel,
  Paper,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";

// # components
export default function RadioColorsDemo() {
  const [value, setValue] = useState("a");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <Stack spacing={2}>
      <Typography variant="subtitle2" color="text.secondary">
        Radio button color variants.
      </Typography>

      <Paper
        elevation={0}
        sx={{ p: 4, border: 1, borderColor: "divider", borderRadius: 2 }}
      >
        <RadioGroup row onChange={handleChange} value={value}>
          <FormControlLabel
            value="a"
            control={<Radio color="primary" />}
            label="Primary"
          />
          <FormControlLabel
            value="b"
            control={<Radio color="secondary" />}
            label="Secondary"
          />
          <FormControlLabel
            value="c"
            control={<Radio color="success" />}
            label="Success"
          />
          <FormControlLabel
            value="d"
            control={<Radio color="info" />}
            label="Info"
          />
          <FormControlLabel
            value="e"
            control={<Radio color="warning" />}
            label="Warning"
          />
          <FormControlLabel
            value="f"
            control={<Radio color="error" />}
            label="Error"
          />
          <FormControlLabel
            value="g"
            control={<Radio color="default" />}
            label="Default"
          />
        </RadioGroup>
      </Paper>
    </Stack>
  );
}
