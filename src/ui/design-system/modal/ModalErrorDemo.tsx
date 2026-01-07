"use client";

import { Button, Paper, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { ModalError } from "@/ui/layouts/Modal";

// # components
export default function ModalErrorDemo() {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const handleTriggerError = () => {
    const mockError = new Error("Something went wrong while fetching data.");
    mockError.name = "NetworkError";
    // Mock stack trace (normally automatically generated)
    mockError.stack = `Error: Something went wrong while fetching data.
    at handleTriggerError (ModalErrorDemo.tsx:12)
    at onClick (ModalErrorDemo.tsx:25)
    at HTMLUnknownElement.callCallback (react-dom.development.js:4164)
    at Object.invokeGuardedCallbackDev (react-dom.development.js:4213)`;

    setError(mockError);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setError(null);
  };

  return (
    <Stack spacing={2}>
      <Typography variant="subtitle2" color="text.secondary">
        Pre-built specific modal for displaying errors.
      </Typography>

      <Paper
        elevation={0}
        sx={{ p: 4, border: 1, borderColor: "divider", borderRadius: 2 }}
      >
        <Button variant="outlined" color="error" onClick={handleTriggerError}>
          Trigger Error
        </Button>

        <ModalError open={open} onClose={handleClose} error={error} />
      </Paper>
    </Stack>
  );
}
