import { Container, Divider, Stack, Typography } from "@mui/material";
import {
  ShadowComparisonDemo,
  ShadowScaleDemo,
  ShadowUsageTable,
} from "@/ui/design-system/shadow";

export default function ShadowPage() {
  return (
    <Container sx={{ p: 4 }} maxWidth="xl">
      <Stack spacing={4}>
        {/* Page Header */}
        <Stack spacing={1}>
          <Typography variant="h4" fontWeight={700} gutterBottom>
            Shadows
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Documentation and examples for the shadow system. Provides 7
            elevation levels using consistent dark gray tints for depth and
            hierarchy.
          </Typography>
        </Stack>

        <Divider />

        {/* Shadow Comparison */}
        <ShadowComparisonDemo />

        <Divider />

        {/* Shadow Scale Section */}
        <ShadowScaleDemo />

        <Divider />

        {/* Usage Guidelines */}
        <ShadowUsageTable />
      </Stack>
    </Container>
  );
}
