import { Container, Divider, Stack, Typography } from "@mui/material";
import {
  AlertActionDemo,
  AlertSeverityDemo,
  AlertVariantDemo,
} from "@/ui/design-system/alert";

export default function AlertPage() {
  return (
    <Container sx={{ p: 4 }} maxWidth="xl">
      <Stack spacing={4}>
        {/* Severity */}
        <Stack spacing={2}>
          <Typography variant="h6" fontWeight={600}>
            Severity
          </Typography>
          <AlertSeverityDemo />
        </Stack>

        <Divider />

        {/* Variants */}
        <Stack spacing={2}>
          <Typography variant="h6" fontWeight={600}>
            Variants
          </Typography>
          <AlertVariantDemo />
        </Stack>

        <Divider />

        {/* Actions */}
        <Stack spacing={2}>
          <Typography variant="h6" fontWeight={600}>
            Actions
          </Typography>
          <AlertActionDemo />
        </Stack>
      </Stack>
    </Container>
  );
}
