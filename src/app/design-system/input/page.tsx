import { Container, Divider, Stack, Typography } from "@mui/material";
import {
  InputAdornmentsDemo,
  InputStatesDemo,
  SelectDemo,
  TextFieldVariantsDemo,
} from "@/ui/design-system/input";

export default function InputPage() {
  return (
    <Container sx={{ p: 4 }} maxWidth="xl">
      <Stack spacing={4}>
        {/* Page Header */}
        <Stack spacing={1}>
          <Typography variant="h4" fontWeight={700} gutterBottom>
            Input
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Text fields allow users to enter text into a UI. They typically
            appear in forms and dialogs.
          </Typography>
        </Stack>

        <Divider />

        {/* Variants */}
        <Stack spacing={2}>
          <Typography variant="h6" fontWeight={600}>
            Variants
          </Typography>
          <TextFieldVariantsDemo />
        </Stack>

        <Divider />

        {/* States */}
        <Stack spacing={2}>
          <Typography variant="h6" fontWeight={600}>
            States
          </Typography>
          <InputStatesDemo />
        </Stack>

        <Divider />

        {/* Adornments */}
        <Stack spacing={2}>
          <Typography variant="h6" fontWeight={600}>
            Adornments
          </Typography>
          <InputAdornmentsDemo />
        </Stack>

        <Divider />

        {/* Select & Multiline */}
        <Stack spacing={2}>
          <Typography variant="h6" fontWeight={600}>
            Select & Text Area
          </Typography>
          <SelectDemo />
        </Stack>
      </Stack>
    </Container>
  );
}
