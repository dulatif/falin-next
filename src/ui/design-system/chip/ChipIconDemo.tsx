"use client";

import { Avatar, Chip, Paper, Stack, Typography } from "@mui/material";
import { CheckCircle, FaceMask } from "phosphor-react";

// # components
export default function ChipIconDemo() {
  return (
    <Stack spacing={2}>
      <Typography variant="subtitle2" color="text.secondary">
        Chips with icons or avatars.
      </Typography>

      <Paper
        elevation={0}
        sx={{ p: 4, border: 1, borderColor: "divider", borderRadius: 2 }}
      >
        <Stack direction="row" spacing={1}>
          <Chip icon={<FaceMask size={20} />} label="With Icon" />
          <Chip
            icon={<CheckCircle size={20} />}
            label="With Icon"
            variant="outlined"
          />
          <Chip avatar={<Avatar>M</Avatar>} label="Avatar" />
          <Chip
            avatar={
              <Avatar
                alt="Natacha"
                src="https://mui.com/static/images/avatar/1.jpg"
              />
            }
            label="Avatar"
            variant="outlined"
          />
        </Stack>
      </Paper>
    </Stack>
  );
}
