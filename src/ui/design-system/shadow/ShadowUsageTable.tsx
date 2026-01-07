"use client";

import {
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

// # constants
const USAGE_DATA = [
  {
    level: "xs",
    usage: "Buttons, input focus states, subtle depth",
    example: "Button hover, form inputs",
  },
  {
    level: "sm",
    usage: "Cards, dropdowns, tooltips",
    example: "Card components, menu dropdowns",
  },
  {
    level: "md",
    usage: "Elevated cards, popovers, sticky headers",
    example: "Featured cards, popover menus",
  },
  {
    level: "lg",
    usage: "Modals, dialogs, floating panels",
    example: "Modal dialogs, sidebar overlays",
  },
  {
    level: "xl",
    usage: "Hero sections, prominent elements",
    example: "Feature highlights, image galleries",
  },
  {
    level: "2xl",
    usage: "Full-screen overlays, lightboxes",
    example: "Lightbox overlays, focus states",
  },
  {
    level: "3xl",
    usage: "Maximum elevation, dramatic effect",
    example: "Onboarding spotlights, presentation mode",
  },
] as const;

// # components
export default function ShadowUsageTable() {
  return (
    <Stack spacing={2}>
      <Typography variant="h5" fontWeight={600}>
        Usage Guidelines
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        Recommended use cases for each shadow level to maintain visual
        hierarchy.
      </Typography>

      <TableContainer
        component={Paper}
        elevation={0}
        sx={{ border: 1, borderColor: "divider", borderRadius: 2 }}
      >
        <Table>
          <TableHead>
            <TableRow sx={{ bgcolor: "action.hover" }}>
              <TableCell sx={{ fontWeight: 600 }}>Level</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Recommended Usage</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Example</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {USAGE_DATA.map((row) => (
              <TableRow
                key={row.level}
                sx={{ "&:last-child td": { borderBottom: 0 } }}
              >
                <TableCell>
                  <Typography
                    variant="body2"
                    fontFamily="monospace"
                    fontWeight={500}
                    color="primary"
                  >
                    {row.level}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body2">{row.usage}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body2" color="text.secondary">
                    {row.example}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
}
