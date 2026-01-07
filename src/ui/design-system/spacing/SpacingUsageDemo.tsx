"use client";

import { Box, Paper, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { getColors } from "@/theme/ts/colors";

// # components
function ExampleCard({ spacing, label }: { spacing: number; label: string }) {
  const theme = useTheme();
  const colors = getColors(theme.palette.mode);

  return (
    <Paper
      elevation={0}
      sx={{
        p: 2,
        border: 1,
        borderColor: "divider",
        borderRadius: 2,
        flex: 1,
      }}
    >
      <Typography variant="subtitle2" gutterBottom>
        {label} ({spacing}px)
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: `${spacing}px`,
          bgcolor: "action.hover",
          p: 1,
          borderRadius: 1,
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            width: 40,
            height: 40,
            bgcolor: colors.primary[500],
            borderRadius: 0.5,
          }}
        />
        <Box
          sx={{
            width: 40,
            height: 40,
            bgcolor: colors.neutral[400],
            borderRadius: 0.5,
          }}
        />
        <Box
          sx={{
            width: 40,
            height: 40,
            bgcolor: colors.primary[500],
            borderRadius: 0.5,
          }}
        />
      </Box>
    </Paper>
  );
}

export default function SpacingUsageDemo() {
  return (
    <Stack spacing={4}>
      <Box>
        <Typography variant="h6" fontWeight={600} gutterBottom>
          Common Spacing Patterns
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Examples of how different spacing values affect component layout.
        </Typography>
      </Box>

      <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
        <ExampleCard spacing={8} label="Small Gap" />
        <ExampleCard spacing={16} label="Medium Gap" />
        <ExampleCard spacing={32} label="Large Gap" />
      </Stack>
    </Stack>
  );
}
