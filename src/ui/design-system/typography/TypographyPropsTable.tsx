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
const PROPS_DATA = [
  {
    prop: "variant",
    type: "string",
    default: '"body1"',
    description:
      "h1, h2, h3, h4, h5, h6, subtitle1, subtitle2, body1, body2, caption, overline",
  },
  {
    prop: "fontWeight",
    type: "number | string",
    default: "—",
    description: "400 (regular), 500 (medium), 600 (semiBold), 700 (bold)",
  },
  {
    prop: "color",
    type: "string",
    default: '"inherit"',
    description:
      "text.primary, text.secondary, text.disabled, primary, secondary, error",
  },
  {
    prop: "align",
    type: "string",
    default: '"inherit"',
    description: "left, center, right, justify",
  },
  {
    prop: "gutterBottom",
    type: "boolean",
    default: "false",
    description: "Adds margin-bottom to the text",
  },
  {
    prop: "noWrap",
    type: "boolean",
    default: "false",
    description: "Prevents text wrapping and adds ellipsis on overflow",
  },
  {
    prop: "component",
    type: "elementType",
    default: "—",
    description: "Override the rendered HTML element (e.g., 'span', 'div')",
  },
] as const;

// # components
export default function TypographyPropsTable() {
  return (
    <Stack spacing={2}>
      <Typography variant="h5" fontWeight={600}>
        Props Reference
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        Common props available on the Typography component.
      </Typography>

      <TableContainer
        component={Paper}
        elevation={0}
        sx={{ border: 1, borderColor: "divider", borderRadius: 2 }}
      >
        <Table>
          <TableHead>
            <TableRow sx={{ bgcolor: "action.hover" }}>
              <TableCell sx={{ fontWeight: 600 }}>Prop</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Type</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Default</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {PROPS_DATA.map((row) => (
              <TableRow
                key={row.prop}
                sx={{ "&:last-child td": { borderBottom: 0 } }}
              >
                <TableCell>
                  <Typography
                    variant="body2"
                    fontFamily="monospace"
                    fontWeight={500}
                    color="primary"
                  >
                    {row.prop}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body2" fontFamily="monospace">
                    {row.type}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body2" fontFamily="monospace">
                    {row.default}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body2" color="text.secondary">
                    {row.description}
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
