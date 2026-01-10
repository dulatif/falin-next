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
