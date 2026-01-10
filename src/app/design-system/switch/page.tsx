import { Container, Divider, Stack, Typography } from "@mui/material";
import {
  SwitchActiveInactiveDemo,
  SwitchBasicDemo,
  SwitchGradientDemo,
  SwitchLabelDemo,
} from "@/ui/design-system/switch";

export default function SwitchPage() {
  return (
    <Container sx={{ p: 4 }} maxWidth="xl">
      <Stack spacing={4}>
        {/* Page Header */}
        <Stack spacing={1}>
          <Typography variant="h4" fontWeight={700} gutterBottom>
            Switch
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Switches allow users to toggle settings on or off. The option that
            the switch controls, as well as the state it's in, should be made
            clear from the accompanying inline label.
          </Typography>
        </Stack>

        <Divider />

        {/* Basic Switch */}
        <Stack spacing={2}>
          <Typography variant="h6" fontWeight={600}>
            Basic Switch
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Standard switch toggle, overridden to match iOS style.
          </Typography>
          <SwitchBasicDemo />
        </Stack>

        <Divider />

        {/* Label Switch */}
        <Stack spacing={2}>
          <Typography variant="h6" fontWeight={600}>
            Labeled Switch
          </Typography>
          <Typography variant="body2" color="text.secondary">
            You can provide a label to the <code>Switch</code> thanks to the{" "}
            <code>FormControlLabel</code> component.
          </Typography>
          <SwitchLabelDemo />
        </Stack>

        <Divider />

        {/* Gradient Switch */}
        <Stack spacing={2}>
          <Typography variant="h6" fontWeight={600}>
            Gradient Switch
          </Typography>
          <Typography variant="body2" color="text.secondary">
            A vibrant gradient variant for creative use cases.
          </Typography>
          <SwitchGradientDemo />
        </Stack>

        <Divider />

        {/* Active/Inactive Switch */}
        <Stack spacing={2}>
          <Typography variant="h6" fontWeight={600}>
            Active / Inactive Variants
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Switches that visually demonstrate the state using icons (e.g.,
            Dark/Light mode) or explicit labels.
          </Typography>
          <SwitchActiveInactiveDemo />
        </Stack>
      </Stack>
    </Container>
  );
}
