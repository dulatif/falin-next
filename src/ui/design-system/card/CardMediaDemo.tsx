"use client";

import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { Play, SkipBack, SkipForward } from "phosphor-react";

// # components
export default function CardMediaDemo() {
  return (
    <Stack spacing={2}>
      <Typography variant="subtitle2" color="text.secondary">
        Card with media and controls.
      </Typography>

      <Paper
        elevation={0}
        sx={{ p: 4, border: 1, borderColor: "divider", borderRadius: 2 }}
      >
        <Card sx={{ display: "flex", maxWidth: 400 }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
                Live From Space
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                Mac Miller
              </Typography>
            </CardContent>
            <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
              <IconButton aria-label="previous">
                <SkipBack weight="fill" />
              </IconButton>
              <IconButton aria-label="play/pause">
                <Play weight="fill" />
              </IconButton>
              <IconButton aria-label="next">
                <SkipForward weight="fill" />
              </IconButton>
            </Box>
          </Box>
          <CardMedia
            component="img"
            sx={{ width: 151 }}
            image="https://mui.com/static/images/cards/live-from-space.jpg"
            alt="Live from space album cover"
          />
        </Card>
      </Paper>
    </Stack>
  );
}
