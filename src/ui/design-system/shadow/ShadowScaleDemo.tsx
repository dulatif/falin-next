"use client";

import { Paper, Stack, Typography } from "@mui/material";
import { shadows } from "@/theme/ts/shadows";

// # constants
const SHADOW_LEVELS = [
  {
    key: "xs",
    label: "Extra Small",
    description: "Subtle shadow for buttons and small elements",
  },
  { key: "sm", label: "Small", description: "Cards, dropdowns, tooltips" },
  {
    key: "md",
    label: "Medium",
    description: "Modals, popovers, elevated cards",
  },
  { key: "lg", label: "Large", description: "Dialogs, floating panels" },
  {
    key: "xl",
    label: "Extra Large",
    description: "Hero sections, featured cards",
  },
  { key: "2xl", label: "2X Large", description: "Prominent overlays" },
  {
    key: "3xl",
    label: "3X Large",
    description: "Maximum elevation, dramatic effect",
  },
] as const;

type ShadowKey = keyof typeof shadows;

// # components
interface ShadowCardProps {
  shadowKey: ShadowKey;
  label: string;
  description: string;
}

function ShadowCard({ shadowKey, label, description }: ShadowCardProps) {
  const shadowValue = shadows[shadowKey];

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
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={3}
        alignItems={{ md: "center" }}
      >
        {/* Shadow Preview */}
        <Paper
          elevation={0}
          sx={{
            width: 120,
            height: 120,
            borderRadius: 2,
            boxShadow: shadowValue,
            bgcolor: "background.paper",
            flexShrink: 0,
          }}
        />

        {/* Shadow Info */}
        <Stack spacing={1} flex={1}>
          <Stack direction="row" spacing={2} alignItems="center">
            <Typography variant="subtitle1" fontWeight={600}>
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
              shadows.{shadowKey}
            </Typography>
          </Stack>

          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>

          <Typography
            variant="caption"
            fontFamily="monospace"
            color="text.secondary"
            sx={{
              p: 1,
              bgcolor: "action.hover",
              borderRadius: 1,
              wordBreak: "break-all",
            }}
          >
            {shadowValue}
          </Typography>
        </Stack>
      </Stack>
    </Paper>
  );
}

export default function ShadowScaleDemo() {
  return (
    <Stack spacing={2}>
      <Typography variant="h5" fontWeight={600}>
        Shadow Scale
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        The shadow system provides 7 elevation levels, from subtle (xs) to
        dramatic (3xl). All shadows use a consistent dark gray tint for a
        unified look.
      </Typography>

      <Stack spacing={2}>
        {SHADOW_LEVELS.map(({ key, label, description }) => (
          <ShadowCard
            key={key}
            shadowKey={key}
            label={label}
            description={description}
          />
        ))}
      </Stack>
    </Stack>
  );
}
