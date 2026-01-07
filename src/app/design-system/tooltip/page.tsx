import { Container, Divider, Stack, Typography } from "@mui/material";
import {
  TooltipArrowDemo,
  TooltipPositionDemo,
} from "@/ui/design-system/tooltip";

export default function TooltipPage() {
  return (
    <Container sx={{ p: 4 }} maxWidth="xl">
      <Stack spacing={4}>
        {/* Page Header */}
        <Stack spacing={1}>
          <Typography variant="h4" fontWeight={700} gutterBottom>
            Tooltip
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Tooltips display informative text when users hover over, focus on,
            or tap an element.
          </Typography>
        </Stack>

        <Divider />

        {/* Positions */}
        <Stack spacing={2}>
          <Typography variant="h6" fontWeight={600}>
            Positioning
          </Typography>
          <TooltipPositionDemo />
        </Stack>

        <Divider />

        {/* Arrow */}
        <Stack spacing={2}>
          <Typography variant="h6" fontWeight={600}>
            With Arrow
          </Typography>
          <TooltipArrowDemo />
        </Stack>
      </Stack>
    </Container>
  );
}
