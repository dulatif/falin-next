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
export default function CheckboxBasicDemo() {
  return (
    <Stack spacing={2}>
      <Typography variant="subtitle2" color="text.secondary">
        Basic checkbox states.
      </Typography>

      <Paper
        elevation={0}
        sx={{ p: 4, border: 1, borderColor: "divider", borderRadius: 2 }}
      >
        <FormGroup>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Label"
          />
          <FormControlLabel control={<Checkbox />} label="Required" required />
          <FormControlLabel control={<Checkbox disabled />} label="Disabled" />
          <FormControlLabel
            control={<Checkbox disabled defaultChecked />}
            label="Disabled Checked"
          />
        </FormGroup>
      </Paper>
    </Stack>
  );
}
