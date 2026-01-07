import { Container, Divider, Stack, Typography } from "@mui/material";
import {
  BreadcrumbBasicDemo,
  BreadcrumbCustomSeparatorDemo,
  BreadcrumbIconDemo,
} from "@/ui/design-system/breadcrumb";

export default function BreadcrumbPage() {
  return (
    <Container sx={{ p: 4 }} maxWidth="xl">
      <Stack spacing={4}>
        {/* Page Header */}
        <Stack spacing={1}>
          <Typography variant="h4" fontWeight={700} gutterBottom>
            Breadcrumbs
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Breadcrumbs allow users to inspect their current location within the
            system hierarchy.
          </Typography>
        </Stack>

        <Divider />

        {/* Basic */}
        <Stack spacing={2}>
          <Typography variant="h6" fontWeight={600}>
            Basic Breadcrumbs
          </Typography>
          <BreadcrumbBasicDemo />
        </Stack>

        <Divider />

        {/* With Icons */}
        <Stack spacing={2}>
          <Typography variant="h6" fontWeight={600}>
            With Icons
          </Typography>
          <BreadcrumbIconDemo />
        </Stack>

        <Divider />

        {/* Custom Separator */}
        <Stack spacing={2}>
          <Typography variant="h6" fontWeight={600}>
            Custom Separator
          </Typography>
          <BreadcrumbCustomSeparatorDemo />
        </Stack>
      </Stack>
    </Container>
  );
}
