import { Container, Divider, Stack, Typography } from "@mui/material";
import {
  IconResources,
  MuiIconsDemo,
  PhosphorIconsDemo,
} from "@/ui/design-system/icon";

export default function IconPage() {
  return (
    <Container sx={{ p: 4 }} maxWidth="xl">
      <Stack spacing={4}>
        {/* Page Header */}
        <Stack spacing={1}>
          <Typography variant="h4" fontWeight={700} gutterBottom>
            Icons
          </Typography>
          <Typography variant="body1" color="text.secondary">
            The system supports two icon libraries: Material UI Icons for
            standard system actions and Phosphor Icons for a more modern,
            flexible aesthetic.
          </Typography>
        </Stack>

        <Divider />

        {/* Resources Section */}
        <IconResources />

        <Divider />

        {/* Phosphor Icons Section */}
        <PhosphorIconsDemo />

        <Divider />

        {/* MUI Icons Section */}
        <MuiIconsDemo />
      </Stack>
    </Container>
  );
}
