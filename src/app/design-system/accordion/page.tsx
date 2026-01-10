import { Container, Divider, Stack, Typography } from "@mui/material";
import {
  AccordionBasicDemo,
  AccordionControlledDemo,
} from "@/ui/design-system/accordion";

export default function AccordionPage() {
  return (
    <Container sx={{ p: 4 }} maxWidth="xl">
      <Stack spacing={4}>
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
