import { Container, Divider, Stack, Typography } from "@mui/material";
import { SpacingScaleDemo, SpacingUsageDemo } from "@/ui/design-system/spacing";

export default function SpacingPage() {
  return (
    <Container sx={{ p: 4 }} maxWidth="xl">
      <Stack spacing={4}>
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
