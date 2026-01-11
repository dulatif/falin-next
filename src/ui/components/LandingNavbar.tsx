"use client";

import {
  AppBar,
  alpha,
  Box,
  Button,
  Container,
  Stack,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export function LandingNavbar() {
  const theme = useTheme();

  return (
    <AppBar
      position="fixed"
      color="transparent"
      elevation={0}
      sx={{
        borderBottom: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
        backdropFilter: "blur(12px)",
        background: alpha(theme.palette.background.default, 0.7),
        zIndex: 100,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ height: 64 }}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            width="100%"
          >
            {/* Brand + Links */}
            <Stack direction="row" spacing={6} alignItems="center">
              <Link href="/" style={{ textDecoration: "none" }}>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Box sx={{ position: "relative", width: 32, height: 32 }}>
                    <Image
                      src="/falin-logo.png"
                      fill
                      alt="Logo"
                      style={{ objectFit: "contain" }}
                    />
                  </Box>
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    color="text.primary"
                    sx={{ letterSpacing: "-0.5px" }}
                  >
                    Falin Next TS
                  </Typography>
                </Stack>
              </Link>

              {/* Navbar Links */}
              <Stack
                direction="row"
                spacing={1}
                sx={{ display: { xs: "none", md: "flex" } }}
              >
                {["Docs", "Blogs", "Templates"].map((item) => (
                  <Button
                    key={item}
                    href="#"
                    variant="text"
                    color="inherit"
                    size="sm"
                    sx={{
                      color: "text.secondary",
                      fontSize: "0.9rem",
                      "&:hover": {
                        color: "text.primary",
                        bgcolor: alpha(theme.palette.text.primary, 0.05),
                      },
                    }}
                  >
                    {item}
                  </Button>
                ))}
              </Stack>
            </Stack>

            {/* Actions */}
            <Stack direction="row" spacing={2} alignItems="center">
              <ThemeToggle />
              <Link href="/design-system/dashboard">
                <Button variant="outlined" size="sm" sx={{ borderRadius: 1.5 }}>
                  Dashboard
                </Button>
              </Link>
              <Button
                variant="contained"
                size="sm"
                href="https://github.com/dulatif/falin-next"
                target="_blank"
                sx={{ borderRadius: 1.5 }}
              >
                GitHub
              </Button>
            </Stack>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
