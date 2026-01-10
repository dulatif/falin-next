"use client";

import { Paper, Stack, Typography } from "@mui/material";
import { typography } from "@/theme/ts/typography";

// # constants
const TYPOGRAPHY_VARIANTS = [
  { variant: "h1", label: "Heading 1", sample: "The quick brown fox" },
  { variant: "h2", label: "Heading 2", sample: "The quick brown fox" },
  { variant: "h3", label: "Heading 3", sample: "The quick brown fox" },
  { variant: "h4", label: "Heading 4", sample: "The quick brown fox jumps" },
  {
    variant: "h5",
    label: "Heading 5",
    sample: "The quick brown fox jumps over",
  },
  {
    variant: "h6",
    label: "Heading 6",
    sample: "The quick brown fox jumps over the lazy dog",
  },
  {
    variant: "subtitle1",
    label: "Subtitle 1",
    sample: "The quick brown fox jumps over the lazy dog",
  },
  {
    variant: "subtitle2",
    label: "Subtitle 2",
    sample: "The quick brown fox jumps over the lazy dog",
  },
  {
    variant: "body1",
    label: "Body 1",
    sample:
      "The quick brown fox jumps over the lazy dog. This is the default body text style.",
  },
  {
    variant: "body2",
    label: "Body 2",
    sample:
      "The quick brown fox jumps over the lazy dog. This is a smaller body text style.",
  },
  {
    variant: "caption",
    label: "Caption",
    sample: "The quick brown fox jumps over the lazy dog",
  },
  {
    variant: "overline",
    label: "Overline",
    sample: "THE QUICK BROWN FOX",
  },
] as const;

type TypographyVariant = (typeof TYPOGRAPHY_VARIANTS)[number]["variant"];

// # logic
function getVariantSpecs(variant: TypographyVariant) {
  const config = typography[variant];
  if (!config) return null;

  const fontSize = parseFloat(config.fontSize);
  const lineHeight = parseFloat(config.lineHeight);
  const lineHeightPercent = Math.round((lineHeight / fontSize) * 100);

  return {
    fontSize: config.fontSize,
    lineHeight: config.lineHeight,
    lineHeightPercent,
    letterSpacing: "letterSpacing" in config ? config.letterSpacing : "normal",
  };
}

// # components
interface VariantCardProps {
  variant: TypographyVariant;
  label: string;
  sample: string;
}

function VariantCard({ variant, label, sample }: VariantCardProps) {
  const specs = getVariantSpecs(variant);

  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        border: 1,
        borderColor: "divider",
        borderRadius: 2,
      }}
    >
      <Stack spacing={2}>
        {/* Header */}
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="caption" color="text.secondary" fontWeight={600}>
            {label}
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
            variant="{variant}"
          </Typography>
        </Stack>

        {/* Sample Text */}
        <Typography variant={variant} sx={{ wordBreak: "break-word" }}>
          {sample}
        </Typography>

        {/* Specs */}
        {specs && (
          <Stack direction="row" spacing={2}>
            <Typography variant="caption" color="text.secondary">
              <strong>Size:</strong> {specs.fontSize}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              <strong>Line Height:</strong> {specs.lineHeight} (
              {specs.lineHeightPercent}%)
            </Typography>
            {specs.letterSpacing !== "normal" && (
              <Typography variant="caption" color="text.secondary">
                <strong>Letter Spacing:</strong> {specs.letterSpacing}
              </Typography>
            )}
          </Stack>
        )}
      </Stack>
    </Paper>
  );
}

export default function TypographyScaleDemo() {
  return (
    <Stack spacing={2}>
      <Typography variant="h5" fontWeight={600}>
        Typography Scale
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        The complete typography scale used throughout the application. All
        variants are based on the Inter font family.
      </Typography>

      <Stack spacing={2}>
        {TYPOGRAPHY_VARIANTS.map(({ variant, label, sample }) => (
          <VariantCard
            key={variant}
            variant={variant}
            label={label}
            sample={sample}
          />
        ))}
      </Stack>
    </Stack>
  );
}
