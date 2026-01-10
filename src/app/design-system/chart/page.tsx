import { Container, Grid, Stack, Typography } from "@mui/material";
import {
  ChartAreaDemo,
  ChartColumnDemo,
  ChartLineDemo,
  ChartPieDemo,
} from "@/ui/design-system/chart";

export default function ChartPage() {
  return (
    <Container sx={{ p: 4 }} maxWidth="xl">
      <Stack spacing={4}>
        <Grid container spacing={4}>
          {/* Line Chart */}
          <Grid size={{ xs: 12, lg: 6 }}>
            <Stack spacing={2}>
              <Typography variant="h6" fontWeight={600}>
                Line Chart
              </Typography>
              <ChartLineDemo />
            </Stack>
          </Grid>

          {/* Area Chart */}
          <Grid size={{ xs: 12, lg: 6 }}>
            <Stack spacing={2}>
              <Typography variant="h6" fontWeight={600}>
                Area Chart
              </Typography>
              <ChartAreaDemo />
            </Stack>
          </Grid>

          {/* Column Chart */}
          <Grid size={{ xs: 12, lg: 6 }}>
            <Stack spacing={2}>
              <Typography variant="h6" fontWeight={600}>
                Column Chart
              </Typography>
              <ChartColumnDemo />
            </Stack>
          </Grid>

          {/* Pie Chart */}
          <Grid size={{ xs: 12, lg: 6 }}>
            <Stack spacing={2}>
              <Typography variant="h6" fontWeight={600}>
                Pie Chart
              </Typography>
              <ChartPieDemo />
            </Stack>
          </Grid>
        </Grid>
      </Stack>
    </Container>
  );
}
