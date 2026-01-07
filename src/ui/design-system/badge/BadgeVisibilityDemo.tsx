"use client";

import { Badge, Button, Paper, Stack, Typography } from "@mui/material";
import { Envelope } from "phosphor-react";
import { useState } from "react";

// # components
export default function BadgeVisibilityDemo() {
  const [count, setCount] = useState(1);
  const [invisible, setInvisible] = useState(false);

  const handleBadgeVisibility = () => {
    setInvisible(!invisible);
  };

  return (
    <Stack spacing={2}>
      <Typography variant="subtitle2" color="text.secondary">
        The visibility of badges can be controlled.
      </Typography>

      <Paper
        elevation={0}
        sx={{ p: 4, border: 1, borderColor: "divider", borderRadius: 2 }}
      >
        <Stack spacing={4} direction="row" alignItems="center">
          <Badge color="secondary" badgeContent={count} invisible={invisible}>
            <Envelope size={32} />
          </Badge>
          <Stack spacing={1} direction="row">
            <Button
              aria-label="reduce"
              onClick={() => {
                setCount(Math.max(count - 1, 0));
              }}
              variant="outlined"
              size="small"
            >
              -
            </Button>
            <Button
              aria-label="increase"
              onClick={() => {
                setCount(count + 1);
              }}
              variant="outlined"
              size="small"
            >
              +
            </Button>
            <Button
              onClick={handleBadgeVisibility}
              variant="contained"
              size="small"
            >
              Toggle Visibility
            </Button>
          </Stack>
        </Stack>
      </Paper>
    </Stack>
  );
}
