"use client";

import { Box, Switch } from "@mui/material";

export default function SwitchBasicDemo() {
  return (
    <Box>
      <Switch defaultChecked />
      <Switch />
      <Switch size="small" defaultChecked />
      <Switch size="small" />
      <Switch disabled defaultChecked />
      <Switch disabled />
    </Box>
  );
}
