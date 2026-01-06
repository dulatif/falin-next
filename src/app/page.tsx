"use client";

import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Link from "next/link";
import { ArrowRight, GithubLogo, Palette } from "phosphor-react";

export default function Home() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: `linear-gradient(45deg, ${theme.palette.background.default} 0%, ${theme.palette.background.paper} 100%)`,
      }}
    >
      <Container maxWidth="md">
        <Stack spacing={4} alignItems="center" textAlign="center">
          <Box
            sx={{
              p: 2,
              borderRadius: "50%",
              bgcolor: "primary.main",
              color: "primary.contrastText",
              boxShadow: theme.shadows[10],
            }}
          >
            <Palette size={48} weight="duotone" />
          </Box>

          <Typography variant="h2" component="h1" fontWeight="bold">
            Next.js MUI Boilerplate
          </Typography>

          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ maxWidth: 600 }}
          >
            A powerful, clean, and opinionated starter template with Next.js 15,
            Material UI v6, React Query, and TypeScript.
          </Typography>

          <Stack direction="row" spacing={2} pt={4}>
            <Link href="/admin/dashboard" passHref>
              <Button
                variant="contained"
                size="lg"
                endIcon={<ArrowRight />}
                sx={{ px: 4, py: 1.5, borderRadius: 2 }}
              >
                Go to Dashboard
              </Button>
            </Link>
            <Button
              variant="outlined"
              size="lg"
              startIcon={<GithubLogo />}
              sx={{ px: 4, py: 1.5, borderRadius: 2 }}
              onClick={() => window.open("https://github.com/", "_blank")}
            >
              GitHub
            </Button>
          </Stack>

          <Box
            sx={{
              mt: 8,
              p: 3,
              borderRadius: 4,
              bgcolor: "background.paper",
              border: `1px solid ${theme.palette.divider}`,
              width: "100%",
            }}
          >
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={4}
              justifyContent="center"
            >
              {[
                { label: "Material UI v6", value: "Design System" },
                { label: "TanStack Query", value: "Data Fetching" },
                { label: "Zustand", value: "State Mgmt" },
                { label: "React Hook Form", value: "Forms" },
              ].map((item) => (
                <Box key={item.label}>
                  <Typography variant="subtitle2" color="text.secondary">
                    {item.value}
                  </Typography>
                  <Typography variant="h6" fontWeight="bold">
                    {item.label}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
