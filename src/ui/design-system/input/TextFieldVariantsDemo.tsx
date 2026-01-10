"use client";

import { Paper, Stack, TextField, Typography } from "@mui/material";

// # components
export default function TextFieldVariantsDemo() {
  return (
    <Stack spacing={2}>
      <Typography variant="subtitle2" color="text.secondary">
        Text field variants. The "Standard" variant is customized to look like a
        defined box.
      </Typography>

      <Paper
        elevation={0}
        sx={{ p: 4, border: 1, borderColor: "divider", borderRadius: 2 }}
      >
        <Stack direction="column" spacing={3} maxWidth={400}>
          <TextField
            label="Standard (Customized)"
            variant="standard"
            placeholder="Placeholder text"
          />
          <TextField
            label="Outlined (Default)"
            variant="outlined"
            placeholder="Placeholder text"
          />
          <TextField
            label="Filled"
            variant="filled"
            placeholder="Placeholder text"
          />
        </Stack>
      </Paper>
    </Stack>
  );
}
