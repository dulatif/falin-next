"use client";

import {
  Box,
  Button,
  MobileStepper,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";
import { CaretLeft, CaretRight } from "phosphor-react";
import { useState } from "react";

export default function StepperMobileDemo() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const steps = 5;

  return (
    <Box sx={{ width: "100%", maxWidth: 400, flexGrow: 1 }}>
      <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 2 }}>
        Mobile stepper (Dots variant).
      </Typography>

      <Paper
        square
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          height: 150,
          pl: 2,
          bgcolor: "background.default",
          border: 1,
          borderColor: "divider",
          justifyContent: "center",
        }}
      >
        <Typography>
          Step {activeStep + 1} of {steps}
        </Typography>
      </Paper>

      <MobileStepper
        variant="dots"
        steps={steps}
        position="static"
        activeStep={activeStep}
        sx={{
          bgcolor: "background.paper",
          border: 1,
          borderTop: 0,
          borderColor: "divider",
        }}
        nextButton={
          <Button size="sm" onClick={handleNext} disabled={activeStep === 4}>
            Next
            <CaretRight
              size={16}
              weight="bold"
              style={{ marginLeft: theme.spacing(0.5) }}
            />
          </Button>
        }
        backButton={
          <Button size="sm" onClick={handleBack} disabled={activeStep === 0}>
            <CaretLeft
              size={16}
              weight="bold"
              style={{ marginRight: theme.spacing(0.5) }}
            />
            Back
          </Button>
        }
      />
    </Box>
  );
}
