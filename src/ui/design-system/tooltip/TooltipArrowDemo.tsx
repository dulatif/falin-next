"use client";

import { Button, Paper, Stack, Tooltip, Typography } from "@mui/material";

// # components
export default function TooltipArrowDemo() {
  return (
    <Stack spacing={2}>
      <Typography variant="subtitle2" color="text.secondary">
        Tooltips with arrow indicator.
      </Typography>

      <Paper
        elevation={0}
        sx={{ p: 4, border: 1, borderColor: "divider", borderRadius: 2 }}
      >
        <Stack direction="row" spacing={2} justifyContent="center">
          <Tooltip title="Add" arrow>
            <Button>Arrow</Button>
          </Tooltip>
        </Stack>
      </Paper>
    </Stack>
  );
}
