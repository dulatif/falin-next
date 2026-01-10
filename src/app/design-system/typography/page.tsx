import { Container, Divider, Stack } from "@mui/material";
import {
  FontWeightDemo,
  TypographyPropsTable,
  TypographyScaleDemo,
} from "@/ui/design-system/typography";

export default function TypographyPage() {
  return (
    <Container sx={{ p: 4 }} maxWidth="xl">
      <Stack spacing={4}>
        {/* Typography Scale Section */}
        <TypographyScaleDemo />

        <Divider />

        {/* Font Weights Section */}
        <FontWeightDemo />

        <Divider />

        {/* Props Reference Section */}
        <TypographyPropsTable />
      </Stack>
    </Container>
  );
}
