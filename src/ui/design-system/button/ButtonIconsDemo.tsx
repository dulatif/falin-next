"use client";

import { Button, Grid, Paper, Stack, Typography } from "@mui/material";
import { Smiley } from "phosphor-react";

// # components
export default function ButtonIconsDemo() {
  return (
    <Stack spacing={2}>
      <Typography variant="subtitle2" color="text.secondary">
        Buttons with icons and icon-only buttons.
      </Typography>

      <Paper
        elevation={0}
        sx={{ p: 4, border: 1, borderColor: "divider", borderRadius: 2 }}
      >
        <Grid container spacing={4}>
          <Grid size={{ md: 6 }}>
            <Typography fontWeight={"semiBold"} color="text.secondary" mb={1}>
              Button With Icon
            </Typography>
            <Stack direction="column" spacing={2}>
              <Stack direction="row" spacing={2}>
                <Button startIcon={<Smiley size={22} weight="bold" />}>
                  Button
                </Button>
                <Button endIcon={<Smiley size={22} weight="bold" />}>
                  Button
                </Button>
                <Button
                  startIcon={<Smiley size={22} weight="bold" />}
                  endIcon={<Smiley size={22} weight="bold" />}
                >
                  Button
                </Button>
              </Stack>
              <Stack direction="row" spacing={2}>
                <Button
                  variant="text"
                  startIcon={<Smiley size={22} weight="bold" />}
                >
                  Button
                </Button>
                <Button
                  variant="text"
                  endIcon={<Smiley size={22} weight="bold" />}
                >
                  Button
                </Button>
                <Button
                  variant="text"
                  startIcon={<Smiley size={22} weight="bold" />}
                  endIcon={<Smiley size={22} weight="bold" />}
                >
                  Button
                </Button>
              </Stack>
              <Stack direction="row" spacing={2}>
                <Button
                  variant="outlined"
                  startIcon={<Smiley size={22} weight="bold" />}
                >
                  Button
                </Button>
                <Button
                  variant="outlined"
                  endIcon={<Smiley size={22} weight="bold" />}
                >
                  Button
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<Smiley size={22} weight="bold" />}
                  endIcon={<Smiley size={22} weight="bold" />}
                >
                  Button
                </Button>
              </Stack>
            </Stack>
          </Grid>
          <Grid size={{ md: 6 }}>
            <Typography fontWeight={"semiBold"} color="text.secondary" mb={1}>
              Only Icon Button
            </Typography>
            <Stack direction="column" spacing={2}>
              <Stack direction="row" spacing={2}>
                <Button data-shape="icon" color="inherit">
                  <Smiley size={22} weight="bold" />
                </Button>
                <Button data-shape="icon" color="primary">
                  <Smiley size={22} weight="bold" />
                </Button>
                <Button data-shape="icon" color="secondary">
                  <Smiley size={22} weight="bold" />
                </Button>
                <Button data-shape="icon" color="success">
                  <Smiley size={22} weight="bold" />
                </Button>
                <Button data-shape="icon" color="info">
                  <Smiley size={22} weight="bold" />
                </Button>
                <Button data-shape="icon" color="warning">
                  <Smiley size={22} weight="bold" />
                </Button>
                <Button data-shape="icon" color="error">
                  <Smiley size={22} weight="bold" />
                </Button>
              </Stack>
              <Stack direction="row" spacing={2}>
                <Button variant="text" data-shape="icon" color="inherit">
                  <Smiley size={22} weight="bold" />
                </Button>
                <Button variant="text" data-shape="icon" color="primary">
                  <Smiley size={22} weight="bold" />
                </Button>
                <Button variant="text" data-shape="icon" color="secondary">
                  <Smiley size={22} weight="bold" />
                </Button>
                <Button variant="text" data-shape="icon" color="success">
                  <Smiley size={22} weight="bold" />
                </Button>
                <Button variant="text" data-shape="icon" color="info">
                  <Smiley size={22} weight="bold" />
                </Button>
                <Button variant="text" data-shape="icon" color="warning">
                  <Smiley size={22} weight="bold" />
                </Button>
                <Button variant="text" data-shape="icon" color="error">
                  <Smiley size={22} weight="bold" />
                </Button>
              </Stack>
              <Stack direction="row" spacing={2}>
                <Button variant="outlined" data-shape="icon" color="inherit">
                  <Smiley size={22} weight="bold" />
                </Button>
                <Button variant="outlined" data-shape="icon" color="primary">
                  <Smiley size={22} weight="bold" />
                </Button>
                <Button variant="outlined" data-shape="icon" color="secondary">
                  <Smiley size={22} weight="bold" />
                </Button>
                <Button variant="outlined" data-shape="icon" color="success">
                  <Smiley size={22} weight="bold" />
                </Button>
                <Button variant="outlined" data-shape="icon" color="info">
                  <Smiley size={22} weight="bold" />
                </Button>
                <Button variant="outlined" data-shape="icon" color="warning">
                  <Smiley size={22} weight="bold" />
                </Button>
                <Button variant="outlined" data-shape="icon" color="error">
                  <Smiley size={22} weight="bold" />
                </Button>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Paper>
    </Stack>
  );
}
