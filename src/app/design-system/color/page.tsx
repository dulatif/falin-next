import { Container, Stack } from "@mui/material";
import { ColorPaletteDemo } from "@/ui/design-system/color";

export default function ColorPage() {
  return (
    <Container sx={{ p: 4 }} maxWidth="xl">
      <Stack spacing={4}>
        {/* Color Palettes Section */}
        <ColorPaletteDemo />
      </Stack>
    </Container>
  );
}
