"use client";

import { Alert, Paper, Stack, Typography } from "@mui/material";

// # components
export default function AlertSeverityDemo() {
  return (
    <Stack spacing={2}>
      <Typography variant="subtitle2" color="text.secondary">
        Alerts with different severity levels.
      </Typography>

      <Paper
        elevation={0}
        sx={{ p: 4, border: 1, borderColor: "divider", borderRadius: 2 }}
      >
        <Stack spacing={2}>
          <Alert severity="error">This is an error alert — check it out!</Alert>
          <Alert severity="warning">
            This is a warning alert — check it out!
          </Alert>
          <Alert severity="info">This is an info alert — check it out!</Alert>
          <Alert severity="success">
            This is a success alert — check it out!
          </Alert>
        </Stack>
      </Paper>
    </Stack>
  );
}
