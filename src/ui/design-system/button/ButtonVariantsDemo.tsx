"use client";

import { Button, Paper, Stack, Typography } from "@mui/material";

// # components
export default function ButtonVariantsDemo() {
  return (
    <Stack spacing={2}>
      <Typography variant="subtitle2" color="text.secondary">
        Standard material design variants.
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
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
          <Button variant="text">Text</Button>
          <Button variant="contained" disableElevation>
            Disable Elevation
          </Button>
        </Stack>
      </Paper>
    </Stack>
  );
}
