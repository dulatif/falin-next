import { Container, Divider, Stack, Typography } from "@mui/material";
import {
  ChipBasicDemo,
  ChipColorsDemo,
  ChipIconDemo,
} from "@/ui/design-system/chip";

export default function ChipPage() {
  return (
    <Container sx={{ p: 4 }} maxWidth="xl">
      <Stack spacing={4}>
        {/* Page Header */}
        <Stack spacing={1}>
          <Typography variant="h4" fontWeight={700} gutterBottom>
            Chip
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Chips allow users to enter information, make selections, filter
            content, or trigger actions.
          </Typography>
        </Stack>

        <Divider />

        {/* Basic */}
        <Stack spacing={2}>
          <Typography variant="h6" fontWeight={600}>
            Basic Chips
          </Typography>
          <ChipBasicDemo />
        </Stack>

        <Divider />

        {/* Colors */}
        <Stack spacing={2}>
          <Typography variant="h6" fontWeight={600}>
            Colors
          </Typography>
          <ChipColorsDemo />
        </Stack>

        <Divider />

        {/* With Icon/Avatar */}
        <Stack spacing={2}>
          <Typography variant="h6" fontWeight={600}>
            With Icon or Avatar
          </Typography>
          <ChipIconDemo />
        </Stack>
      </Stack>
    </Container>
  );
}
