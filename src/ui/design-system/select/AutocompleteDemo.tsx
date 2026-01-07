"use client";

import {
  Autocomplete,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

// # components
const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
];

export default function AutocompleteDemo() {
  const [value, setValue] = useState<string | null>(top100Films[0].label);
  const [inputValue, setInputValue] = useState("");

  const [multiValue, setMultiValue] = useState([
    top100Films[0],
    top100Films[1],
  ]);

  return (
    <Stack spacing={2}>
      <Typography variant="subtitle2" color="text.secondary">
        Material UI Autocomplete for searchable selects and multi-selects.
      </Typography>

      <Paper
        elevation={0}
        sx={{ p: 4, border: 1, borderColor: "divider", borderRadius: 2 }}
      >
        <Stack spacing={4}>
          {/* Combo Box */}
          <Stack spacing={1}>
            <Typography variant="subtitle2" fontWeight={600}>
              Combo Box (Single)
            </Typography>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={top100Films}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Movie" />}
            />
          </Stack>

          {/* Multiple Values */}
          <Stack spacing={1}>
            <Typography variant="subtitle2" fontWeight={600}>
              Multiple Values
            </Typography>
            <Autocomplete
              multiple
              id="tags-standard"
              options={top100Films}
              getOptionLabel={(option) => option.label}
              defaultValue={[top100Films[0], top100Films[1]]}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  label="Favorite Movies"
                  placeholder="Favorites"
                />
              )}
            />
          </Stack>
        </Stack>
      </Paper>
    </Stack>
  );
}
