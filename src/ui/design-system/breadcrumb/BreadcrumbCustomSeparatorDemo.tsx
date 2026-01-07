"use client";

import { Breadcrumbs, Link, Paper, Stack, Typography } from "@mui/material";
import { CaretRight } from "phosphor-react";

// # components
export default function BreadcrumbCustomSeparatorDemo() {
  function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }

  return (
    <Stack spacing={2}>
      <Typography variant="subtitle2" color="text.secondary">
        Breadcrumbs with custom separators.
      </Typography>

      <Paper
        elevation={0}
        sx={{ p: 4, border: 1, borderColor: "divider", borderRadius: 2 }}
      >
        <Stack spacing={2}>
          <Breadcrumbs separator="›" aria-label="breadcrumb">
            <Link
              underline="hover"
              key="1"
              color="inherit"
              href="/"
              onClick={handleClick}
            >
              MUI
            </Link>
            <Link
              underline="hover"
              key="2"
              color="inherit"
              href="/material-ui/getting-started/installation/"
              onClick={handleClick}
            >
              Core
            </Link>
            <Typography key="3" color="text.primary">
              Breadcrumb
            </Typography>
          </Breadcrumbs>
          <Breadcrumbs
            separator={<CaretRight size={12} weight="bold" />}
            aria-label="breadcrumb"
          >
            <Link
              underline="hover"
              key="1"
              color="inherit"
              href="/"
              onClick={handleClick}
            >
              MUI
            </Link>
            <Link
              underline="hover"
              key="2"
              color="inherit"
              href="/material-ui/getting-started/installation/"
              onClick={handleClick}
            >
              Core
            </Link>
            <Typography key="3" color="text.primary">
              Breadcrumb
            </Typography>
          </Breadcrumbs>
        </Stack>
      </Paper>
    </Stack>
  );
}
