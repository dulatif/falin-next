"use client";

import { Paper, Stack, Typography } from "@mui/material";

// # constants
const FONT_WEIGHTS = [
  { weight: 400, label: "Regular", key: "fontWeightRegular" },
  { weight: 500, label: "Medium", key: "fontWeightMedium" },
  { weight: 600, label: "SemiBold", key: "fontWeightSemiBold" },
  { weight: 700, label: "Bold", key: "fontWeightBold" },
] as const;

const SAMPLE_TEXT = "The quick brown fox jumps over the lazy dog";

// # components
export default function FontWeightDemo() {
  return (
    <Stack spacing={2}>
      <Typography variant="h5" fontWeight={600}>
        Font Weights
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        Available font weight variations. Use the <code>fontWeight</code> prop
        to apply different weights.
      </Typography>

      <Stack spacing={2}>
        {FONT_WEIGHTS.map(({ weight, label, key }) => (
          <Paper
            key={key}
            elevation={0}
            sx={{
              p: 3,
              border: 1,
              borderColor: "divider",
              borderRadius: 2,
            }}
          >
            <Stack spacing={1.5}>
              {/* Header */}
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography
                  variant="caption"
                  color="text.secondary"
                  fontWeight={600}
                >
                  {label} ({weight})
                </Typography>
                <Typography
                  variant="caption"
                  fontFamily="monospace"
                  sx={{
                    px: 1,
                    py: 0.5,
                    bgcolor: "action.hover",
                    borderRadius: 1,
                  }}
                >
                  fontWeight={`{${weight}}`}
                </Typography>
              </Stack>

              {/* Sample Text */}
              <Typography variant="h6" fontWeight={weight}>
                {SAMPLE_TEXT}
              </Typography>
            </Stack>
          </Paper>
        ))}
      </Stack>
    </Stack>
  );
}
