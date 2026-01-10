"use client";

import { Button, Paper, Stack, Typography } from "@mui/material";
import { FloppyDisk } from "phosphor-react";

// # components
export default function ButtonLoadingDemo() {
  return (
    <Stack spacing={2}>
      <Typography variant="subtitle2" color="text.secondary">
        Loading states using LoadingButton.
      </Typography>

      <Paper
        elevation={0}
        sx={{ p: 4, border: 1, borderColor: "divider", borderRadius: 2 }}
      >
        <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
          <Button loading variant="outlined">
            Submit
          </Button>
          <Button loading loadingIndicator="Loading..." variant="outlined">
            Fetch data
          </Button>
          <Button
            loading
            loadingPosition="start"
            startIcon={<FloppyDisk />}
            variant="outlined"
          >
            Save
          </Button>
          <Button
            loading
            loadingPosition="end"
            endIcon={<FloppyDisk />}
            variant="contained"
          >
            Save
          </Button>
        </Stack>
      </Paper>
    </Stack>
  );
}
