import { Container, Divider, Stack, Typography } from "@mui/material";
import {
  AccordionBasicDemo,
  AccordionControlledDemo,
} from "@/ui/design-system/accordion";

export default function AccordionPage() {
  return (
    <Container sx={{ p: 4 }} maxWidth="xl">
      <Stack spacing={4}>
        {/* Page Header */}
        <Stack spacing={1}>
          <Typography variant="h4" fontWeight={700} gutterBottom>
            Accordion
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Accordions contain creation flows and allow lightweight editing of
            an element.
          </Typography>
        </Stack>

        <Divider />

        {/* Basic */}
        <Stack spacing={2}>
          <Typography variant="h6" fontWeight={600}>
            Basic Accordion
          </Typography>
          <AccordionBasicDemo />
        </Stack>

        <Divider />

        {/* Controlled */}
        <Stack spacing={2}>
          <Typography variant="h6" fontWeight={600}>
            Controlled Accordion
          </Typography>
          <AccordionControlledDemo />
        </Stack>
      </Stack>
    </Container>
  );
}
