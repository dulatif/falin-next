"use client";

import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import {
  ArrowDownRight,
  ArrowUpRight,
  CurrencyDollar,
  TrendUp,
  Users,
} from "phosphor-react";

// # components
export default function CardStatsDemo() {
  return (
    <Stack spacing={2}>
      <Typography variant="subtitle2" color="text.secondary">
        Cards used for displaying dashboard statistics. Hierarchy: Title &rarr;
        Value &rarr; Trend.
      </Typography>

      <Grid container spacing={3}>
        {/* Stat Card 1 */}
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <Card>
            <CardContent>
              <Stack spacing={3}>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    fontWeight={600}
                  >
                    Total Revenue
                  </Typography>
                  <Avatar
                    sx={{
                      bgcolor: "primary.light",
                      color: "primary.main",
                      width: 40,
                      height: 40,
                    }}
                  >
                    <CurrencyDollar size={20} weight="bold" />
                  </Avatar>
                </Stack>
                <Box>
                  <Typography variant="h3" fontWeight={700}>
                    $24,500
                  </Typography>
                  <Stack direction="row" alignItems="center" spacing={1} mt={1}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        color: "success.main",
                        bgcolor: "success.light",
                        px: 0.5,
                        borderRadius: 0.5,
                      }}
                    >
                      <ArrowUpRight size={14} weight="bold" />
                      <Typography variant="caption" fontWeight={700} ml={0.5}>
                        +12.5%
                      </Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                      last week
                    </Typography>
                  </Stack>
                </Box>
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        {/* Stat Card 2 */}
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <Card>
            <CardContent>
              <Stack spacing={3}>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    fontWeight={600}
                  >
                    Active Users
                  </Typography>
                  <Avatar
                    sx={{
                      bgcolor: "info.light",
                      color: "info.main",
                      width: 40,
                      height: 40,
                    }}
                  >
                    <Users size={20} weight="bold" />
                  </Avatar>
                </Stack>
                <Box>
                  <Typography variant="h3" fontWeight={700}>
                    1,240
                  </Typography>
                  <Stack direction="row" alignItems="center" spacing={1} mt={1}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        color: "error.main",
                        bgcolor: "error.light",
                        px: 0.5,
                        borderRadius: 0.5,
                      }}
                    >
                      <ArrowDownRight size={14} weight="bold" />
                      <Typography variant="caption" fontWeight={700} ml={0.5}>
                        -2.4%
                      </Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                      since yesterday
                    </Typography>
                  </Stack>
                </Box>
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        {/* Stat Card 3 */}
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <Card>
            <CardContent>
              <Stack spacing={3}>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    fontWeight={600}
                  >
                    Growth Rate
                  </Typography>
                  <Avatar
                    sx={{
                      bgcolor: "warning.light",
                      color: "warning.main",
                      width: 40,
                      height: 40,
                    }}
                  >
                    <TrendUp size={20} weight="bold" />
                  </Avatar>
                </Stack>
                <Box>
                  <Typography variant="h3" fontWeight={700}>
                    84.2%
                  </Typography>
                  <Stack direction="row" alignItems="center" spacing={1} mt={1}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        color: "success.main",
                        bgcolor: "success.light",
                        px: 0.5,
                        borderRadius: 0.5,
                      }}
                    >
                      <ArrowUpRight size={14} weight="bold" />
                      <Typography variant="caption" fontWeight={700} ml={0.5}>
                        +8.4%
                      </Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                      vs last month
                    </Typography>
                  </Stack>
                </Box>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Stack>
  );
}
