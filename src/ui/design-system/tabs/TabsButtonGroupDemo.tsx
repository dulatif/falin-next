"use client";

import {
  Paper,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { List, SquaresFour, Table } from "phosphor-react";
import { useState } from "react";

// # components
export default function TabsButtonGroupDemo() {
  const [view, setView] = useState("list");
  const [alignment, setAlignment] = useState("left");

  const handleViewChange = (
    event: React.MouseEvent<HTMLElement>,
    nextView: string,
  ) => {
    if (nextView !== null) {
      setView(nextView);
    }
  };

  const handleAlignmentChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  return (
    <Stack spacing={2}>
      <Typography variant="subtitle2" color="text.secondary">
        Using ToggleButtonGroup as tabs for switching views or states.
      </Typography>

      <Paper
        elevation={0}
        sx={{ p: 4, border: 1, borderColor: "divider", borderRadius: 2 }}
      >
        <Stack spacing={4}>
          <Stack direction="row" spacing={4} alignItems="center">
            <Typography variant="body2" sx={{ minWidth: 100 }}>
              View Mode:
            </Typography>
            <ToggleButtonGroup
              value={view}
              exclusive
              onChange={handleViewChange}
              aria-label="view mode"
              color="primary"
            >
              <ToggleButton value="list" aria-label="list view">
                <List size={20} weight="bold" style={{ marginRight: 8 }} />
                List
              </ToggleButton>
              <ToggleButton value="module" aria-label="module view">
                <SquaresFour
                  size={20}
                  weight="bold"
                  style={{ marginRight: 8 }}
                />
                Grid
              </ToggleButton>
              <ToggleButton value="quilt" aria-label="quilt view">
                <Table size={20} weight="bold" style={{ marginRight: 8 }} />
                Table
              </ToggleButton>
            </ToggleButtonGroup>
          </Stack>

          <Stack direction="row" spacing={4} alignItems="center">
            <Typography variant="body2" sx={{ minWidth: 100 }}>
              Text Only:
            </Typography>
            <ToggleButtonGroup
              value={alignment}
              exclusive
              onChange={handleAlignmentChange}
              aria-label="text alignment"
              size="small"
            >
              <ToggleButton value="left" aria-label="left aligned">
                Map
              </ToggleButton>
              <ToggleButton value="center" aria-label="centered">
                Satellite
              </ToggleButton>
              <ToggleButton value="right" aria-label="right aligned">
                Hybrid
              </ToggleButton>
            </ToggleButtonGroup>
          </Stack>
        </Stack>
      </Paper>
    </Stack>
  );
}
