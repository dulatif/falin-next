import { Container, Divider, Stack, Typography } from "@mui/material";
import {
  SnackbarBasicDemo,
  SnackbarPositionDemo,
} from "@/ui/design-system/snackbar";

export default function SnackbarPage() {
  return (
    <Container sx={{ p: 4 }} maxWidth="xl">
      <Stack spacing={4}>
        {/* Basic */}
        <Stack spacing={2}>
          <Typography variant="h6" fontWeight={600}>
            Basic Snackbar
          </Typography>
          <SnackbarBasicDemo />
        </Stack>

        <Divider />

        {/* Positioning */}
        <Stack spacing={2}>
          <Typography variant="h6" fontWeight={600}>
            Positioning
          </Typography>
          <SnackbarPositionDemo />
        </Stack>
      </Stack>
    </Container>
  );
}
