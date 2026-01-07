"use client";

import { Chip, Paper, Stack, Typography } from "@mui/material";

// # components
export default function ChipBasicDemo() {
  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  return (
    <Stack spacing={2}>
      <Typography variant="subtitle2" color="text.secondary">
        Chips help people enter information, make selections, filter content, or
        trigger actions.
      </Typography>

      <Paper
        elevation={0}
        sx={{ p: 4, border: 1, borderColor: "divider", borderRadius: 2 }}
      >
        <Stack direction="row" spacing={1}>
          <Chip label="Chip Filled" />
          <Chip label="Chip Outlined" variant="outlined" />
          <Chip label="Clickable" onClick={handleClick} />
          <Chip label="Deletable" onDelete={handleDelete} />
          <Chip
            label="Clickable Link"
            component="a"
            href="#basic-chip"
            clickable
          />
        </Stack>
      </Paper>
    </Stack>
  );
}
