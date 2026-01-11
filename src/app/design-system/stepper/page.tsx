import { Container, Divider, Stack, Typography } from "@mui/material";
import {
  StepperAlternativeLabelDemo,
  StepperBasicDemo,
  StepperCustomIconDemo,
  StepperMobileDemo,
  StepperVerticalDemo,
} from "@/ui/design-system/stepper";

export default function StepperPage() {
  return (
    <Container sx={{ p: 4 }} maxWidth="xl">
      <Stack spacing={4}>
        {/* Basic Horizontal Stepper */}
        <Stack spacing={2}>
          <Typography variant="h6" fontWeight={600}>
            Horizontal Stepper
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Linear steppers require users to complete steps in order.
          </Typography>
          <StepperBasicDemo />
        </Stack>

        <Divider />

        {/* Alternative Label */}
        <Stack spacing={2}>
          <Typography variant="h6" fontWeight={600}>
            Alternative Label
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Labels can be placed below the step icon.
          </Typography>
          <StepperAlternativeLabelDemo />
        </Stack>

        <Divider />

        {/* Custom Icon */}
        <Stack spacing={2}>
          <Typography variant="h6" fontWeight={600}>
            Customized Stepper
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Example of customizing the stepper sequence with gradient connectors
            and Phosphor icons.
          </Typography>
          <StepperCustomIconDemo />
        </Stack>

        <Divider />

        {/* Vertical Stepper */}
        <Stack spacing={2}>
          <Typography variant="h6" fontWeight={600}>
            Vertical Stepper
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Vertical steppers are designed for narrow screen sizes. They are
            ideal for mobile.
          </Typography>
          <StepperVerticalDemo />
        </Stack>

        <Divider />

        {/* Mobile Stepper */}
        <Stack spacing={2}>
          <Typography variant="h6" fontWeight={600}>
            Mobile Stepper
          </Typography>
          <Typography variant="body2" color="text.secondary">
            A specialized component suitable for mobile views or small
            interfaces.
          </Typography>
          <StepperMobileDemo />
        </Stack>
      </Stack>
    </Container>
  );
}
