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
    if (!hexColor || !hexColor.startsWith("#") || hexColor.length < 7) {
      return "#000"; // Fallback for names or invalid
    }
    const hex = hexColor.replace("#", "");
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    const yiq = (r * 299 + g * 587 + b * 114) / 1000;
    return yiq >= 128 ? "#000" : "#fff";
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
      {palettes.map((palette) => {
        // Attempt to get semantic values from the theme if they exist
        // Note: 'neutral' might not be in theme.palette in the standard way, or strictly typed as PaletteColor
        const themePalette = (theme.palette as any)[palette.prefix];
        const hasSemantic =
          themePalette &&
          typeof themePalette === "object" &&
          "main" in themePalette;

        return (
          <Stack key={palette.name} spacing={3}>
            <Box>
              <Typography variant="h5" fontWeight={600} gutterBottom>
                {palette.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Variable prefix: <code>{palette.prefix}</code>
              </Typography>
            </Box>

            {/* Semantic Keys (Main, Light, Dark) */}
            {hasSemantic && (
              <Box>
                <Typography
                  variant="subtitle2"
                  fontWeight={600}
                  gutterBottom
                  sx={{ mb: 2 }}
                >
                  Semantic Values
                </Typography>
                <Grid container spacing={2}>
                  {["main", "light", "dark", "contrastText"].map((key) => {
                    const colorValue = themePalette[key];
                    if (!colorValue) return null;
                    return (
                      <Grid item xs={6} sm={4} md={2} lg={2} key={key}>
                        <ColorSwatch
                          color={colorValue}
                          shade={key}
                          name={palette.prefix}
                        />
                      </Grid>
                    );
                  })}
                </Grid>
              </Box>
            )}

            {/* Numeric Scale */}
            <Box>
              <Typography
                variant="subtitle2"
                fontWeight={600}
                gutterBottom
                sx={{ mb: 2 }}
              >
                Scale
              </Typography>
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
            </Box>
          </Stack>
        );
      })}

      {/* System Colors Section */}
      <Stack spacing={3}>
        <Box>
          <Typography variant="h5" fontWeight={600} gutterBottom>
            System Colors
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Text, Background, and Divider colors.
          </Typography>
        </Box>

        <Box>
          <Typography
            variant="subtitle2"
            fontWeight={600}
            gutterBottom
            sx={{ mb: 2 }}
          >
            Text
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={6} sm={4} md={2} lg={2}>
              <ColorSwatch
                color={theme.palette.text.primary}
                shade="primary"
                name="text"
              />
            </Grid>
            <Grid item xs={6} sm={4} md={2} lg={2}>
              <ColorSwatch
                color={theme.palette.text.secondary}
                shade="secondary"
                name="text"
              />
            </Grid>
            <Grid item xs={6} sm={4} md={2} lg={2}>
              <ColorSwatch
                color={theme.palette.text.disabled}
                shade="disabled"
                name="text"
              />
            </Grid>
          </Grid>
        </Box>

        <Box>
          <Typography
            variant="subtitle2"
            fontWeight={600}
            gutterBottom
            sx={{ mb: 2 }}
          >
            Background
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={6} sm={4} md={2} lg={2}>
              <ColorSwatch
                color={theme.palette.background.default}
                shade="default"
                name="background"
              />
            </Grid>
            <Grid item xs={6} sm={4} md={2} lg={2}>
              <ColorSwatch
                color={theme.palette.background.paper}
                shade="paper"
                name="background"
              />
            </Grid>
          </Grid>
        </Box>

        <Box>
          <Typography
            variant="subtitle2"
            fontWeight={600}
            gutterBottom
            sx={{ mb: 2 }}
          >
            Divider
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={6} sm={4} md={2} lg={2}>
              <ColorSwatch
                color={theme.palette.divider}
                shade="default"
                name="divider"
              />
            </Grid>
          </Grid>
        </Box>
      </Stack>
    </Stack>
  );
}
