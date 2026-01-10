import { Container, Divider, Stack } from "@mui/material";
import {
  ShadowComparisonDemo,
  ShadowScaleDemo,
  ShadowUsageTable,
} from "@/ui/design-system/shadow";

export default function ShadowPage() {
  return (
    <Container sx={{ p: 4 }} maxWidth="xl">
      <Stack spacing={4}>
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
