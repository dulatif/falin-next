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
        {/* Page Header */}
        <Stack spacing={1}>
          <Typography variant="h4" fontWeight={700} gutterBottom>
            Select & Autocomplete
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Select components allow users to choose one or multiple items from a
            list.
          </Typography>
        </Stack>

        <Divider />

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
