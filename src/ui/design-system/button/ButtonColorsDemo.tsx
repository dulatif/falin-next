"use client";

import { Button, Paper, Stack, Typography } from "@mui/material";

// # components
export default function ButtonColorsDemo() {
  return (
    <Stack spacing={2}>
      <Typography variant="subtitle2" color="text.secondary">
        Semantic color palettes applied to buttons.
      </Typography>

      <Paper
        elevation={0}
        sx={{ p: 4, border: 1, borderColor: "divider", borderRadius: 2 }}
      >
        <Stack spacing={4}>
          <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
            <Button variant="contained" color="primary">
              Primary
            </Button>
            <Button variant="contained" color="secondary">
              Secondary
            </Button>
            <Button variant="contained" color="success">
              Success
            </Button>
            <Button variant="contained" color="error">
              Error
            </Button>
            <Button variant="contained" color="warning">
              Warning
            </Button>
            <Button variant="contained" color="info">
              Info
            </Button>
            <Button variant="contained" color="inherit">
              Inherit
            </Button>
          </Stack>

          <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
            <Button variant="outlined" color="primary">
              Primary
            </Button>
            <Button variant="outlined" color="secondary">
              Secondary
            </Button>
            <Button variant="outlined" color="success">
              Success
            </Button>
            <Button variant="outlined" color="error">
              Error
            </Button>
            <Button variant="outlined" color="warning">
              Warning
            </Button>
            <Button variant="outlined" color="info">
              Info
            </Button>
            <Button variant="outlined" color="inherit">
              Inherit
            </Button>
          </Stack>
        </Stack>
      </Paper>
    </Stack>
  );
}
