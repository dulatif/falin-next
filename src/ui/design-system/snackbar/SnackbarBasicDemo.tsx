"use client";

import {
  Button,
  IconButton,
  Paper,
  Snackbar,
  Stack,
  Typography,
} from "@mui/material";
import { X } from "phosphor-react";
import { useState } from "react";

// # components
export default function SnackbarBasicDemo() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <>
      <Button color="secondary" size="sm" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="sm"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <X size={20} />
      </IconButton>
    </>
  );

  return (
    <Stack spacing={2}>
      <Typography variant="subtitle2" color="text.secondary">
        Simple snackbar with actions.
      </Typography>

      <Paper
        elevation={0}
        sx={{ p: 4, border: 1, borderColor: "divider", borderRadius: 2 }}
      >
        <Button variant="outlined" onClick={handleClick}>
          Open Simple Snackbar
        </Button>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message="Note archived"
          action={action}
        />
      </Paper>
    </Stack>
  );
}
