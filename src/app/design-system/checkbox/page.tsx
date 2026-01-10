import { Container, Divider, Stack, Typography } from "@mui/material";
import {
  CheckboxBasicDemo,
  CheckboxColorsDemo,
  CheckboxIconDemo,
  CheckboxIndeterminateDemo,
} from "@/ui/design-system/checkbox";

export default function CheckboxPage() {
  return (
    <Container sx={{ p: 4 }} maxWidth="xl">
      <Stack spacing={4}>
        {/* Basic */}
        <Stack spacing={2}>
          <Typography variant="h6" fontWeight={600}>
            Basic Checkboxes
          </Typography>
          <CheckboxBasicDemo />
        </Stack>

        <Divider />

        {/* Colors */}
        <Stack spacing={2}>
          <Typography variant="h6" fontWeight={600}>
            Colors
          </Typography>
          <CheckboxColorsDemo />
        </Stack>

        <Divider />

        {/* Indeterminate */}
        <Stack spacing={2}>
          <Typography variant="h6" fontWeight={600}>
            Indeterminate
          </Typography>
          <CheckboxIndeterminateDemo />
        </Stack>

        <Divider />

        {/* Custom Icons */}
        <Stack spacing={2}>
          <Typography variant="h6" fontWeight={600}>
            Custom Icons
          </Typography>
          <CheckboxIconDemo />
        </Stack>
      </Stack>
    </Container>
  );
}
