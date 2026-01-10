"use client";

import { Badge, Paper, Stack, Typography } from "@mui/material";
import { Envelope, ShoppingCart } from "phosphor-react";

// # components
export default function BadgeBasicDemo() {
  return (
    <Stack spacing={2}>
      <Typography variant="subtitle2" color="text.secondary">
        Badges generate a small badge to the top-right of its child(ren).
      </Typography>

      <Paper
        elevation={0}
        sx={{ p: 4, border: 1, borderColor: "divider", borderRadius: 2 }}
      >
        <Stack direction="row" spacing={4}>
          <Badge badgeContent={4} color="primary">
            <Envelope size={32} />
          </Badge>
          <Badge badgeContent={4} color="secondary">
            <Envelope size={32} />
          </Badge>
          <Badge badgeContent={4} color="success">
            <Envelope size={32} />
          </Badge>
          <Badge badgeContent={100} color="error" max={99}>
            <Envelope size={32} />
          </Badge>
          <Badge color="error" variant="dot">
            <ShoppingCart size={32} />
          </Badge>
        </Stack>
      </Paper>
    </Stack>
  );
}
