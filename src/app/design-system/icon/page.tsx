import { Container, Divider, Stack } from "@mui/material";
import {
  IconResources,
  MuiIconsDemo,
  PhosphorIconsDemo,
} from "@/ui/design-system/icon";

export default function IconPage() {
  return (
    <Container sx={{ p: 4 }} maxWidth="xl">
      <Stack spacing={4}>
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
