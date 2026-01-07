"use client";

import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

// # components
export default function CheckboxColorsDemo() {
  return (
    <Stack spacing={2}>
      <Typography variant="subtitle2" color="text.secondary">
        Checkbox color variants.
      </Typography>

      <Paper
        elevation={0}
        sx={{ p: 4, border: 1, borderColor: "divider", borderRadius: 2 }}
      >
        <FormGroup row>
          <FormControlLabel
            control={<Checkbox defaultChecked color="primary" />}
            label="Primary"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked color="secondary" />}
            label="Secondary"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked color="success" />}
            label="Success"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked color="info" />}
            label="Info"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked color="warning" />}
            label="Warning"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked color="error" />}
            label="Error"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked color="default" />}
            label="Default"
          />
        </FormGroup>
      </Paper>
    </Stack>
  );
}
