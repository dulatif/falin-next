"use client";

import { Avatar, Paper, Stack, Typography } from "@mui/material";

// # components
export default function AvatarLetterDemo() {
  return (
    <Stack spacing={2}>
      <Typography variant="subtitle2" color="text.secondary">
        Avatars containing simple characters.
      </Typography>

      <Paper
        elevation={0}
        sx={{ p: 4, border: 1, borderColor: "divider", borderRadius: 2 }}
      >
        <Stack direction="row" spacing={2}>
          <Avatar>H</Avatar>
          <Avatar sx={{ bgcolor: "primary.main" }}>N</Avatar>
          <Avatar sx={{ bgcolor: "secondary.main" }}>OP</Avatar>
        </Stack>
      </Paper>
    </Stack>
  );
}
