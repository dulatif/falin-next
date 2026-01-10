import { Container, Divider, Stack, Typography } from "@mui/material";
import { SpacingScaleDemo, SpacingUsageDemo } from "@/ui/design-system/spacing";

export default function SpacingPage() {
  return (
    <Container sx={{ p: 4 }} maxWidth="xl">
      <Stack spacing={4}>
        {/* Page Header */}
        <Stack spacing={1}>
          <Typography variant="h4" fontWeight={700} gutterBottom>
            Spacing
          </Typography>
          <Typography variant="body1" color="text.secondary">
            The design system uses a consistent spacing scale to ensure visual
            rhythm and balance. Values are defined in pixels but often converted
            to rem.
          </Typography>
        </Stack>

        <Divider />

        {/* Usage Demo */}
        <SpacingUsageDemo />

        <Divider />

        {/* Full Scale */}
        <Stack spacing={2}>
          <Typography variant="h6" fontWeight={600}>
            Spacing Scale
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Complete referencing table for the spacing system.
          </Typography>
          <SpacingScaleDemo />
        </Stack>
      </Stack>
    </Container>
  );
}
