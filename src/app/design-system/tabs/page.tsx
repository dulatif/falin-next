import { Container, Divider, Stack, Typography } from "@mui/material";
import {
  TabsBasicDemo,
  TabsButtonGroupDemo,
  TabsFilledDemo,
} from "@/ui/design-system/tabs";

export default function TabsPage() {
  return (
    <Container sx={{ p: 4 }} maxWidth="xl">
      <Stack spacing={4}>
        {/* Page Header */}
        <Stack spacing={1}>
          <Typography variant="h4" fontWeight={700} gutterBottom>
            Tabs
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Tabs make it easy to explore and switch between different views.
          </Typography>
        </Stack>

        <Divider />

        {/* Basic */}
        <Stack spacing={2}>
          <Typography variant="h6" fontWeight={600}>
            Basic (Underlined)
          </Typography>
          <TabsBasicDemo />
        </Stack>

        <Divider />

        {/* Filled */}
        <Stack spacing={2}>
          <Typography variant="h6" fontWeight={600}>
            Filled (Segmented)
          </Typography>
          <TabsFilledDemo />
        </Stack>

        <Divider />

        {/* Button Group */}
        <Stack spacing={2}>
          <Typography variant="h6" fontWeight={600}>
            Button Group
          </Typography>
          <TabsButtonGroupDemo />
        </Stack>
      </Stack>
    </Container>
  );
}
