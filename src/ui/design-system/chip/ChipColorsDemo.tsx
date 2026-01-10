"use client";

import { Chip, Paper, Stack, Typography } from "@mui/material";

// # components
export default function ChipColorsDemo() {
  return (
    <Stack spacing={2}>
      <Typography variant="subtitle2" color="text.secondary">
        Chip color variants.
      </Typography>

      <Paper
        elevation={0}
        sx={{ p: 4, border: 1, borderColor: "divider", borderRadius: 2 }}
      >
        <Stack spacing={2}>
          <Stack direction="row" spacing={1}>
            <Chip label="Primary" color="primary" />
            <Chip label="Secondary" color="secondary" />
            <Chip label="Success" color="success" />
            <Chip label="Warning" color="warning" />
            <Chip label="Info" color="info" />
            <Chip label="Error" color="error" />
          </Stack>
          <Stack direction="row" spacing={1}>
            <Chip label="Primary" color="primary" variant="outlined" />
            <Chip label="Secondary" color="secondary" variant="outlined" />
            <Chip label="Success" color="success" variant="outlined" />
            <Chip label="Warning" color="warning" variant="outlined" />
            <Chip label="Info" color="info" variant="outlined" />
            <Chip label="Error" color="error" variant="outlined" />
          </Stack>
        </Stack>
      </Paper>
    </Stack>
  );
}
