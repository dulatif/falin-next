"use client";

import { Avatar, Paper, Stack, Typography } from "@mui/material";
import { File, Folder, Trash } from "phosphor-react";

// # components
export default function AvatarIconDemo() {
  return (
    <Stack spacing={2}>
      <Typography variant="subtitle2" color="text.secondary">
        Avatars containing icons.
      </Typography>

      <Paper
        elevation={0}
        sx={{ p: 4, border: 1, borderColor: "divider", borderRadius: 2 }}
      >
        <Stack direction="row" spacing={2}>
          <Avatar>
            <Folder size={24} />
          </Avatar>
          <Avatar sx={{ bgcolor: "success.light", color: "success.main" }}>
            <File size={24} />
          </Avatar>
          <Avatar sx={{ bgcolor: "error.light", color: "error.main" }}>
            <Trash size={24} />
          </Avatar>
        </Stack>
      </Paper>
    </Stack>
  );
}
