"use client";

import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { Bookmark, Heart } from "phosphor-react";

// # components
export default function CheckboxIconDemo() {
  return (
    <Stack spacing={2}>
      <Typography variant="subtitle2" color="text.secondary">
        Checkboxes using custom icons.
      </Typography>

      <Paper
        elevation={0}
        sx={{ p: 4, border: 1, borderColor: "divider", borderRadius: 2 }}
      >
        <FormGroup row>
          <FormControlLabel
            control={
              <Checkbox
                icon={<Heart size={24} />}
                checkedIcon={<Heart size={24} weight="fill" />}
              />
            }
            label="Heart"
          />
          <FormControlLabel
            control={
              <Checkbox
                icon={<Bookmark size={24} />}
                checkedIcon={<Bookmark size={24} weight="fill" />}
              />
            }
            label="Bookmark"
          />
        </FormGroup>
      </Paper>
    </Stack>
  );
}
