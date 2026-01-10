"use client";

import {
  Alert,
  AlertTitle,
  Button,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

// # components
export default function AlertActionDemo() {
  return (
    <Stack spacing={2}>
      <Typography variant="subtitle2" color="text.secondary">
        Alerts with titles and actions.
      </Typography>

      <Paper
        elevation={0}
        sx={{ p: 4, border: 1, borderColor: "divider", borderRadius: 2 }}
      >
        <Stack spacing={2}>
          <Alert severity="success" onClose={() => {}}>
            This is a success alert — check it out!
          </Alert>
          <Alert
            severity="warning"
            action={
              <Button color="inherit" size="sm">
                UNDO
              </Button>
            }
          >
            This is a warning alert — check it out!
          </Alert>
          <Alert severity="info">
            <AlertTitle>Info</AlertTitle>
            This is an info alert with a title — <strong>check it out!</strong>
          </Alert>
        </Stack>
      </Paper>
    </Stack>
  );
}
