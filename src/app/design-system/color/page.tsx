import { Container, Divider, Stack, Typography } from "@mui/material";
import { ColorPaletteDemo } from "@/ui/design-system/color";

export default function ColorPage() {
  return (
    <Container sx={{ p: 4 }} maxWidth="xl">
      <Stack spacing={4}>
        {/* Page Header */}
        <Stack spacing={1}>
          <Typography variant="h4" fontWeight={700} gutterBottom>
            Colors
          </Typography>
          <Typography variant="body1" color="text.secondary">
            The application uses a comprehensive color system with defined
            palettes for consistency. Each color scale ranges from 25 to
            900/950.
          </Typography>
        </Stack>

        <Divider />

        {/* Color Palettes Section */}
        <ColorPaletteDemo />
      </Stack>
    </Container>
  );
}
