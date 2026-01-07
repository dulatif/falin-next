"use client";

import { Paper, Stack, TextField, Typography } from "@mui/material";

// # components
export default function InputStatesDemo() {
  return (
    <Stack spacing={2}>
      <Typography variant="subtitle2" color="text.secondary">
        Input states including helper text and error validation.
      </Typography>

      <Paper
        elevation={0}
        sx={{ p: 4, border: 1, borderColor: "divider", borderRadius: 2 }}
      >
        <Stack direction="column" spacing={3} maxWidth={400}>
          <TextField
            label="Default"
            variant="standard"
            placeholder="Enter text..."
          />

          <TextField
            label="Focused"
            variant="standard"
            defaultValue="Focused content"
            focused
          />

          <TextField
            label="Disabled"
            variant="standard"
            defaultValue="Disabled content"
            disabled
          />

          <TextField
            label="Read Only"
            variant="standard"
            defaultValue="Read-only content"
            InputProps={{ readOnly: true }}
          />

          <TextField
            label="With Helper Text"
            variant="standard"
            helperText="This is some helper text."
          />

          <TextField
            label="Error State"
            variant="standard"
            error
            defaultValue="Invalid input"
            helperText="Incorrect entry."
          />
        </Stack>
      </Paper>
    </Stack>
  );
}
