import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import {
  FontWeightDemo,
  TypographyPropsTable,
  TypographyScaleDemo,
} from "@/ui/design-system/typography";

export default function TypographyPage() {
  return (
    <Container sx={{ p: 4 }} maxWidth="xl">
      <Stack spacing={4}>
        {/* Page Header */}
        <Box>
          <Typography variant="h4" fontWeight={700} gutterBottom>
            Typography
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Documentation and examples for the typography system. Built on top
            of Material UI Typography with custom styling using the Inter font
            family.
          </Typography>
        </Box>

        <Divider />

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
