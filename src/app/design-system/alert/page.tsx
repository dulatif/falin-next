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
        {/* Page Header */}
        <Stack spacing={1}>
          <Typography variant="h4" fontWeight={700} gutterBottom>
            Alert
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Alerts display a short, important message in a way that attracts the
            user's attention without interrupting the user's task.
          </Typography>
        </Stack>

        <Divider />

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
