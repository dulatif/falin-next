"use client";

import {
  Button,
  Paper,
  Snackbar,
  SnackbarOrigin,
  Stack,
  Typography
} from "@mui/material";
import { useState } from "react";

// # entity
interface State extends SnackbarOrigin {
  open: boolean;
}

// # components
export default function SnackbarPositionDemo() {
  const [state, setState] = useState<State>({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;

  const handleClick = (newState: SnackbarOrigin) => () => {
    setState({ open: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const buttons = (
    <Stack spacing={2} alignItems="center">
      <Stack direction="row" spacing={2} justifyContent="center">
        <Button onClick={handleClick({ vertical: "top", horizontal: "left" })}>
          Top-Left
        </Button>
        <Button
          onClick={handleClick({ vertical: "top", horizontal: "center" })}
        >
          Top-Center
        </Button>
        <Button onClick={handleClick({ vertical: "top", horizontal: "right" })}>
          Top-Right
        </Button>
      </Stack>
      <Stack direction="row" spacing={2} justifyContent="center">
        <Button
          onClick={handleClick({ vertical: "bottom", horizontal: "left" })}
        >
          Bottom-Left
        </Button>
        <Button
          onClick={handleClick({ vertical: "bottom", horizontal: "center" })}
        >
          Bottom-Center
        </Button>
        <Button
          onClick={handleClick({ vertical: "bottom", horizontal: "right" })}
        >
          Bottom-Right
        </Button>
      </Stack>
    </Stack>
  );

  return (
    <Stack spacing={2}>
      <Typography variant="subtitle2" color="text.secondary">
        Snackbars positioned on the screen.
      </Typography>

      <Paper
        elevation={0}
        sx={{ p: 4, border: 1, borderColor: "divider", borderRadius: 2 }}
      >
        {buttons}
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          onClose={handleClose}
          message="I love snacks"
          key={vertical + horizontal}
        />
      </Paper>
    </Stack>
  );
}
