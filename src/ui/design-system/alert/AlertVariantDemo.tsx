"use client";

import { Alert, Paper, Stack, Typography } from "@mui/material";

// # components
export default function AlertVariantDemo() {
  return (
    <Stack spacing={2}>
      <Typography variant="subtitle2" color="text.secondary">
        Different visual styles for alerts.
      </Typography>

      <Paper
        elevation={0}
        sx={{ p: 4, border: 1, borderColor: "divider", borderRadius: 2 }}
      >
        <Stack spacing={2}>
          <Alert variant="outlined" severity="error">
            This is an outlined error alert.
          </Alert>
          <Alert variant="outlined" severity="warning">
            This is an outlined warning alert.
          </Alert>
          <Alert variant="outlined" severity="info">
            This is an outlined info alert.
          </Alert>
          <Alert variant="outlined" severity="success">
            This is an outlined success alert.
          </Alert>

          <Alert variant="filled" severity="error">
            This is a filled error alert.
          </Alert>
          <Alert variant="filled" severity="warning">
            This is a filled warning alert.
          </Alert>
          <Alert variant="filled" severity="info">
            This is a filled info alert.
          </Alert>
          <Alert variant="filled" severity="success">
            This is a filled success alert.
          </Alert>
        </Stack>
      </Paper>
    </Stack>
  );
}
