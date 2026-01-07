"use client";

import {
  InputAdornment,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Envelope, Lock, MagnifyingGlass } from "phosphor-react";

// # components
export default function InputAdornmentsDemo() {
  return (
    <Stack spacing={2}>
      <Typography variant="subtitle2" color="text.secondary">
        Inputs with icons, prefixes, or suffixes.
      </Typography>

      <Paper
        elevation={0}
        sx={{ p: 4, border: 1, borderColor: "divider", borderRadius: 2 }}
      >
        <Stack direction="column" spacing={3} maxWidth={400}>
          <TextField
            variant="standard"
            placeholder="Search..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <MagnifyingGlass size={20} />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            label="Email"
            variant="standard"
            placeholder="example@email.com"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Envelope size={20} />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            label="Password"
            variant="standard"
            type="password"
            defaultValue="123456"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Lock size={20} />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            label="Weight"
            variant="standard"
            InputProps={{
              endAdornment: <InputAdornment position="end">kg</InputAdornment>,
            }}
          />
        </Stack>
      </Paper>
    </Stack>
  );
}
