"use client";

import { Grid, Paper, Stack, Typography } from "@mui/material";
import { shadows } from "@/theme/ts/shadows";

// # constants
const SHADOW_KEYS = ["xs", "sm", "md", "lg", "xl", "2xl", "3xl"] as const;

// # components
export default function ShadowComparisonDemo() {
  return (
    <Stack spacing={2}>
      <Typography variant="h5" fontWeight={600}>
        Shadow Comparison
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        Compare all shadow levels side by side to choose the right elevation for
        your design.
      </Typography>

      <Grid container spacing={3}>
        {SHADOW_KEYS.map((key) => (
          <Grid size={{ xs: 6, sm: 4, md: 12 / 7 }} key={key}>
            <Stack spacing={1} alignItems="center">
              <Paper
                elevation={0}
                sx={{
                  width: "100%",
                  aspectRatio: "1",
                  borderRadius: 2,
                  boxShadow: shadows[key],
                  bgcolor: "background.paper",
                }}
              />
              <Typography
                variant="caption"
                fontWeight={600}
                color="text.secondary"
              >
                {key}
              </Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}
