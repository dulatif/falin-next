"use client";

import { Button, Paper, Stack, Typography } from "@mui/material";

// # components
export default function ButtonStatesDemo() {
  return (
    <Stack spacing={2}>
      <Typography variant="subtitle2" color="text.secondary">
        Interactive states like disabled.
      </Typography>

      <Paper
        elevation={0}
        sx={{ p: 4, border: 1, borderColor: "divider", borderRadius: 2 }}
      >
        <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
          <Button variant="contained" disabled>
            Disabled Contained
          </Button>
          <Button variant="outlined" disabled>
            Disabled Outlined
          </Button>
          <Button variant="text" disabled>
            Disabled Text
          </Button>
        </Stack>
      </Paper>
    </Stack>
  );
}
