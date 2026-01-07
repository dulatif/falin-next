import { Container, Divider, Stack, Typography } from "@mui/material";
import {
  CardBasicDemo,
  CardMediaDemo,
  CardProductDemo,
  CardStatsDemo,
} from "@/ui/design-system/card";

export default function CardPage() {
  return (
    <Container sx={{ p: 4 }} maxWidth="xl">
      <Stack spacing={4}>
        {/* Page Header */}
        <Stack spacing={1}>
          <Typography variant="h4" fontWeight={700} gutterBottom>
            Card
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Cards contain content and actions about a single subject.
          </Typography>
        </Stack>

        <Divider />

        {/* Basic */}
        <Stack spacing={2}>
          <Typography variant="h6" fontWeight={600}>
            Basic Card
          </Typography>
          <CardBasicDemo />
        </Stack>

        <Divider />

        {/* Media */}
        <Stack spacing={2}>
          <Typography variant="h6" fontWeight={600}>
            Card Media
          </Typography>
          <CardMediaDemo />
        </Stack>

        <Divider />

        {/* Product Card */}
        <Stack spacing={2}>
          <Typography variant="h6" fontWeight={600}>
            Product Card
          </Typography>
          <CardProductDemo />
        </Stack>

        <Divider />

        {/* Stats Card */}
        <Stack spacing={2}>
          <Typography variant="h6" fontWeight={600}>
            Stats Card
          </Typography>
          <CardStatsDemo />
        </Stack>
      </Stack>
    </Container>
  );
}
