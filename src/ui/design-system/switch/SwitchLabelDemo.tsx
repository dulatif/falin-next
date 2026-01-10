"use client";

import { Box, FormControlLabel, FormGroup, Switch } from "@mui/material";

export default function SwitchLabelDemo() {
  return (
    <FormGroup>
      <FormControlLabel control={<Switch defaultChecked />} label="Label" />
      <FormControlLabel disabled control={<Switch />} label="Disabled" />
    </FormGroup>
  );
}
