import { Container, Divider, Stack, Typography } from "@mui/material";
import { BadgeBasicDemo, BadgeVisibilityDemo } from "@/ui/design-system/badge";

export default function BadgePage() {
  return (
    <Container sx={{ p: 4 }} maxWidth="xl">
      <Stack spacing={4}>
        {/* Basic */}
        <Stack spacing={2}>
          <Typography variant="h6" fontWeight={600}>
            Basic Badge
          </Typography>
          <BadgeBasicDemo />
        </Stack>

        <Divider />

        {/* Visibility */}
        <Stack spacing={2}>
          <Typography variant="h6" fontWeight={600}>
            Badge Visibility
          </Typography>
          <BadgeVisibilityDemo />
        </Stack>
      </Stack>
    </Container>
  );
}
