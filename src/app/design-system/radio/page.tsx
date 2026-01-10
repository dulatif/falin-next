import { Container, Divider, Stack, Typography } from "@mui/material";
import {
  RadioColorsDemo,
  RadioGroupDemo,
  RadioSizesDemo,
} from "@/ui/design-system/radio";

export default function RadioPage() {
  return (
    <Container sx={{ p: 4 }} maxWidth="xl">
      <Stack spacing={4}>
        {/* Basic */}
        <Stack spacing={2}>
          <Typography variant="h6" fontWeight={600}>
            Basic Usage
          </Typography>
          <RadioGroupDemo />
        </Stack>

        <Divider />

        {/* Colors */}
        <Stack spacing={2}>
          <Typography variant="h6" fontWeight={600}>
            Colors
          </Typography>
          <RadioColorsDemo />
        </Stack>

        {/* Sizes */}
        <Stack spacing={2}>
          <Typography variant="h6" fontWeight={600}>
            Sizes
          </Typography>
          <RadioSizesDemo />
        </Stack>
      </Stack>
    </Container>
  );
}
