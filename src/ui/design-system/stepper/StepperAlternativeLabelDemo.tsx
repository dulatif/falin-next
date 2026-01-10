"use client";

import { Box, Step, StepLabel, Stepper, Typography } from "@mui/material";

const steps = [
  "Select master blaster campaign settings",
  "Create an ad group",
  "Create an ad",
];

export default function StepperAlternativeLabelDemo() {
  return (
    <Box sx={{ width: "100%" }}>
      <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 4 }}>
        Labels can be placed below the step icon.
      </Typography>

      <Stepper activeStep={1} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
