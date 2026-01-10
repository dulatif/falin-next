"use client";

import {
  Box,
  Button,
  Paper,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import { useState } from "react";

const steps = [
  "Select campaign settings",
  "Create an ad group",
  "Create an ad",
];

export default function StepperBasicDemo() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: { optional?: React.ReactNode } = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <Paper
          elevation={0}
          sx={{ p: 4, mt: 4, bgcolor: "action.hover", textAlign: "center" }}
        >
          <Typography variant="h6" gutterBottom>
            All steps completed - you&apos;re finished
          </Typography>
          <Button onClick={handleReset} variant="contained" sx={{ mt: 1 }}>
            Reset
          </Button>
        </Paper>
      ) : (
        <Box sx={{ mt: 4 }}>
          <Paper
            elevation={0}
            sx={{
              p: 4,
              minHeight: 150,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: 1,
              borderColor: "divider",
              bgcolor: "background.paper",
              mb: 3,
            }}
          >
            <Typography variant="h5" color="text.secondary">
              Step {activeStep + 1}: {steps[activeStep]}
            </Typography>
          </Paper>

          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
              variant="outlined"
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />

            <Button onClick={handleNext} variant="contained">
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
}
