"use client";

import { Paper, Stack, Typography } from "@mui/material";
import SelectGroup from "@/ui/components/SelectGroup";

// # components
const listOptions = [
  { label: "Islam", value: "Islam" },
  { label: "Kristen", value: "Kristen" },
  { label: "Katholik", value: "Katholik" },
  { label: "Budha", value: "Budha" },
];

export default function SelectGroupDemo() {
  return (
    <Stack spacing={2}>
      <Typography variant="subtitle2" color="text.secondary">
        Custom <code>SelectGroup</code> component that wraps Label, Select, and
        HelperText.
      </Typography>

      <Paper
        elevation={0}
        sx={{ p: 4, border: 1, borderColor: "divider", borderRadius: 2 }}
      >
        <Stack spacing={3}>
          <SelectGroup
            label="Basic SelectGroup"
            options={listOptions}
            placeholder="Select Religion"
          />

          <SelectGroup
            label="Required Select"
            options={listOptions}
            required
            placeholder="Select One"
          />

          <SelectGroup
            label="Error State"
            options={listOptions}
            error
            helperText="This field is invalid"
            placeholder="Select One"
          />

          <SelectGroup
            label="Disabled State"
            options={listOptions}
            disabled
            defaultValue="Islam"
          />
        </Stack>
      </Paper>
    </Stack>
  );
}
