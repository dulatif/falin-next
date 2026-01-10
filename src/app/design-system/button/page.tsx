import { Container, Divider, Stack, Typography } from "@mui/material";
import {
  ButtonColorsDemo,
  ButtonIconsDemo,
  ButtonLoadingDemo,
  ButtonSizesDemo,
  ButtonStatesDemo,
  ButtonVariantsDemo,
} from "@/ui/design-system/button";

export default function ButtonPage() {
  return (
    <Container sx={{ p: 4 }} maxWidth="xl">
      <Stack spacing={4}>
        {/* Page Header */}
        <Stack spacing={1}>
          <Typography variant="h4" fontWeight={700} gutterBottom>
            Button
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Buttons allow users to take actions, and make choices, with a single
            tap. Material UI buttons are used to communicate actions that users
            can take.
          </Typography>
        </Stack>

        <Divider />

        {/* Variants */}
        <Stack spacing={2}>
          <Typography variant="h6" fontWeight={600}>
            Variants
          </Typography>
          <ButtonVariantsDemo />
        </Stack>

        <Divider />

        {/* Colors */}
        <Stack spacing={2}>
          <Typography variant="h6" fontWeight={600}>
            Colors
          </Typography>
          <ButtonColorsDemo />
        </Stack>

        <Divider />

        {/* Sizes */}
        <Stack spacing={2}>
          <Typography variant="h6" fontWeight={600}>
            Sizes
          </Typography>
          <ButtonSizesDemo />
        </Stack>

        <Divider />

        {/* Icons */}
        <Stack spacing={2}>
          <Typography variant="h6" fontWeight={600}>
            With Icons
          </Typography>
          <ButtonIconsDemo />
        </Stack>

        <Divider />

        {/* States */}
        <Stack spacing={2}>
          <Typography variant="h6" fontWeight={600}>
            States
          </Typography>
          <ButtonStatesDemo />
        </Stack>

        <Divider />

        {/* Loading State */}
        <Stack spacing={2}>
          <Typography variant="h6" fontWeight={600}>
            Loading
          </Typography>
          <ButtonLoadingDemo />
        </Stack>
      </Stack>
    </Container>
  );
}
