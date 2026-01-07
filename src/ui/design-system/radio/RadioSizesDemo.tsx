"use client";

import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Paper,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";

// # components
export default function RadioSizesDemo() {
  return (
    <Stack spacing={2}>
      <Typography variant="subtitle2" color="text.secondary">
        Different sizes of radio buttons.
      </Typography>

      <Paper
        elevation={0}
        sx={{ p: 4, border: 1, borderColor: "divider", borderRadius: 2 }}
      >
        <FormControl>
          <FormLabel id="demo-radio-sizes-group-label">Size</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-radio-sizes-group-label"
            defaultValue="medium"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="small"
              control={<Radio size="small" />}
              label="Small"
            />
            <FormControlLabel
              value="medium"
              control={<Radio size="medium" />}
              label="Medium"
            />
          </RadioGroup>
        </FormControl>
      </Paper>
    </Stack>
  );
}
