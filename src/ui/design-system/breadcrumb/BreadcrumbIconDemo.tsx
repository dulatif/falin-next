"use client";

import { Grain } from "@mui/icons-material";
import { Breadcrumbs, Link, Paper, Stack, Typography } from "@mui/material";
import { House, ListDashes } from "phosphor-react";

// # components
export default function BreadcrumbIconDemo() {
  function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }

  return (
    <Stack spacing={2}>
      <Typography variant="subtitle2" color="text.secondary">
        Breadcrumbs with icons.
      </Typography>

      <Paper
        elevation={0}
        sx={{ p: 4, border: 1, borderColor: "divider", borderRadius: 2 }}
      >
        <div role="presentation" onClick={handleClick}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
              color="inherit"
              href="/"
            >
              <House size={20} />
              MUI
            </Link>
            <Link
              underline="hover"
              sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
              color="inherit"
              href="/material-ui/getting-started/installation/"
            >
              <ListDashes size={20} />
              Core
            </Link>
            <Typography
              sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
              color="text.primary"
            >
              <Grain fontSize="inherit" />
              Breadcrumb
            </Typography>
          </Breadcrumbs>
        </div>
      </Paper>
    </Stack>
  );
}
