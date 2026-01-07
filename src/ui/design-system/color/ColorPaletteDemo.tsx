"use client";

import CheckIcon from "@mui/icons-material/Check";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { Box, Grid, Paper, Stack, Tooltip, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import { getColors } from "@/theme/ts/colors";

// # constants
// # constants
// Helper to generate palettes based on mode
const getPalettes = (mode: "light" | "dark") => {
  const colors = getColors(mode);
  return [
    { name: "Primary", colors: colors.primary, prefix: "primary" },
    { name: "Secondary", colors: colors.secondary, prefix: "secondary" },
    { name: "Neutral", colors: colors.neutral, prefix: "neutral" },
    { name: "Success", colors: colors.success, prefix: "success" },
    { name: "Warning", colors: colors.warning, prefix: "warning" },
    { name: "Error", colors: colors.error, prefix: "error" },
    { name: "Info", colors: colors.info, prefix: "info" },
  ];
};

// # components
interface ColorSwatchProps {
  color: string;
  shade: string;
  name: string;
}

function ColorSwatch({ color, shade, name }: ColorSwatchProps) {
  const [copied, setCopied] = useState(false);
  const theme = useTheme();

  const handleCopy = () => {
    navigator.clipboard.writeText(color);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Calculate contrast color for text
  const getContrastColor = (hexColor: string) => {
    // Simple logic: distinct enough contrast?
    // Using simple YIQ or just hardcoded thresholds based on shade number for simplicity
    // Usually < 500 is dark text, > 500 is light text for simple scaling
    // But better to verify with the actual hex if possible or just use a helper
    // For this design system, let's use a simple heuristic based on the shade number if possible,
    // or just the theme.palette.getContrastText but that requires adding these to the theme first.
    // Let's stick to a simple visual style where the text is below the color block.
    return parseInt(shade) > 500 ? "#fff" : "#000";
  };

  return (
    <Tooltip title={copied ? "Copied!" : "Click to copy hex"} arrow>
      <Paper
        elevation={0}
        onClick={handleCopy}
        sx={{
          p: 0,
          borderRadius: 2,
          overflow: "hidden",
          border: 1,
          borderColor: "divider",
          cursor: "pointer",
          transition: "transform 0.2s, box-shadow 0.2s",
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: theme.shadows[4],
            "& .copy-icon": {
              opacity: 1,
            },
          },
        }}
      >
        {/* Color Block */}
        <Box
          sx={{
            height: 100,
            bgcolor: color,
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            className="copy-icon"
            sx={{
              opacity: 0,
              transition: "opacity 0.2s",
              color: getContrastColor(color), // Adaptive icon color
            }}
          >
            {copied ? <CheckIcon /> : <ContentCopyIcon />}
          </Box>
        </Box>

        {/* Info */}
        <Box sx={{ p: 2 }}>
          <Stack spacing={0.5}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="subtitle2" fontWeight={600}>
                {shade}
              </Typography>
              <Typography
                variant="caption"
                color="text.secondary"
                fontFamily="monospace"
              >
                {color}
              </Typography>
            </Stack>
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{ fontSize: "0.7rem" }}
            >
              {name}-{shade}
            </Typography>
          </Stack>
        </Box>
      </Paper>
    </Tooltip>
  );
}

export default function ColorPaletteDemo() {
  const theme = useTheme();
  const palettes = getPalettes(theme.palette.mode);

  return (
    <Stack spacing={6}>
      {palettes.map((palette) => (
        <Stack key={palette.name} spacing={2}>
          <Box>
            <Typography variant="h5" fontWeight={600} gutterBottom>
              {palette.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Variable prefix: <code>{palette.prefix}</code>
            </Typography>
          </Box>

          <Grid container spacing={2}>
            {Object.entries(palette.colors).map(([shade, color]) => (
              <Grid item xs={6} sm={4} md={2} lg={2} key={shade}>
                <ColorSwatch
                  color={color}
                  shade={shade}
                  name={palette.prefix}
                />
              </Grid>
            ))}
          </Grid>
        </Stack>
      ))}
    </Stack>
  );
}
