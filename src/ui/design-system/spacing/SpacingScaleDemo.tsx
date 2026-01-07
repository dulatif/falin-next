"use client";

import {
  Box,
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
import { useTheme } from "@mui/material/styles";
import { getColors } from "@/theme/ts/colors";
import { spacing } from "@/theme/ts/spacing";

// # components
export default function SpacingScaleDemo() {
  const theme = useTheme();
  const colors = getColors(theme.palette.mode);

  return (
    <TableContainer
      component={Paper}
      elevation={0}
      sx={{ border: 1, borderColor: "divider", borderRadius: 2 }}
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Space Level</TableCell>
            <TableCell>Pixels</TableCell>
            <TableCell>Rem</TableCell>
            <TableCell sx={{ minWidth: 300 }}>Visual</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {spacing.map((value, index) => (
            <TableRow key={index} hover>
              <TableCell>
                <Typography
                  variant="body2"
                  fontFamily="monospace"
                  fontWeight={600}
                >
                  {index}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body2" color="text.secondary">
                  {value}px
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body2" color="text.secondary">
                  {value / 16}rem
                </Typography>
              </TableCell>
              <TableCell>
                <Stack direction={{ xs: "column", md: "row" }} spacing={index}>
                  <Box
                    sx={{
                      width: 24,
                      height: 24,
                      bgcolor: colors.primary[500],
                      opacity: 0.8,
                      borderRadius: 0.5,
                    }}
                  />
                  <Box
                    sx={{
                      width: 24,
                      height: 24,
                      bgcolor: colors.primary[300],
                      opacity: 0.8,
                      borderRadius: 0.5,
                    }}
                  />
                  <Box
                    sx={{
                      width: 24,
                      height: 24,
                      bgcolor: colors.primary[200],
                      opacity: 0.8,
                      borderRadius: 0.5,
                    }}
                  />
                  <Box
                    sx={{
                      width: 24,
                      height: 24,
                      bgcolor: colors.primary[100],
                      opacity: 0.8,
                      borderRadius: 0.5,
                    }}
                  />
                </Stack>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
