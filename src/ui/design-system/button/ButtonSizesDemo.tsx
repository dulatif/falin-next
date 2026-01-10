"use client";

import { Button, Paper, Stack, Typography } from "@mui/material";

// # components
export default function ButtonSizesDemo() {
  return (
    <Stack spacing={2}>
      <Typography variant="subtitle2" color="text.secondary">
        Available sizes for buttons.
      </Typography>

      <Paper
        elevation={0}
        sx={{ p: 4, border: 1, borderColor: "divider", borderRadius: 2 }}
      >
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          flexWrap="wrap"
          useFlexGap
        >
          <Button variant="contained" size="sm">
            Small
          </Button>
          <Button variant="contained" size="md">
            Medium
          </Button>
          <Button variant="contained" size="lg">
            Large
          </Button>
        </Stack>
      </Paper>
    </Stack>
  );
}
