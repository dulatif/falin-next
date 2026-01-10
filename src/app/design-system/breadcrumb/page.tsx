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
