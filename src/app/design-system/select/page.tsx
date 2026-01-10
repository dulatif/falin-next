import { Container, Divider, Stack, Typography } from "@mui/material";
import {
  AutocompleteDemo,
  SelectBasicDemo,
  SelectGroupDemo,
} from "@/ui/design-system/select";

export default function SelectPage() {
  return (
    <Container sx={{ p: 4 }} maxWidth="xl">
      <Stack spacing={4}>
        {/* Basic Select */}
        <Stack spacing={2}>
          <Typography variant="h6" fontWeight={600}>
            Basic Select
          </Typography>
          <SelectBasicDemo />
        </Stack>

        <Divider />

        {/* SelectGroup */}
        <Stack spacing={2}>
          <Typography variant="h6" fontWeight={600}>
            Select Group (Custom Wrapper)
          </Typography>
          <SelectGroupDemo />
        </Stack>

        <Divider />

        {/* Autocomplete */}
        <Stack spacing={2}>
          <Typography variant="h6" fontWeight={600}>
            Autocomplete
          </Typography>
          <AutocompleteDemo />
        </Stack>
      </Stack>
    </Container>
  );
}
