"use client";

import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "phosphor-react";
import GithubButton from "@/ui/components/GithubButton";

export default function Home() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: `linear-gradient(45deg, var(--mui-palette-background-default) 0%, var(--mui-palette-background-paper) 100%)`,
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={4} alignItems="center" textAlign="center">
          <Image
            src="/falin-logo.png"
            width={100}
            height={100}
            alt="Logo"
            style={{
              filter: "drop-shadow(4px 12px 24px rgba(0, 82, 233, 0.32))",
            }}
          />

          <Typography variant="h2" component="h1" fontWeight="bold">
            Falin Next TS
          </Typography>

          <Typography
            variant="h6"
            color="text.secondary"
            fontWeight={"regular"}
            sx={{ maxWidth: 600 }}
          >
            A powerful, clean, and opinionated starter template with Next.js 16,
            Material UI v6, React Query, and TypeScript.
          </Typography>

          <Stack direction="row" spacing={2} pt={4}>
            <Link href="/design-system/dashboard" passHref>
              <Button variant="contained" size="lg" endIcon={<ArrowRight />}>
                Go to Dashboard
              </Button>
            </Link>
            <GithubButton />
          </Stack>

          <Box
            sx={{
              mt: 8,
              p: 3,
              borderRadius: 2,
              bgcolor: "background.paper",
              border: `1px solid var(--mui-palette-divider)`,
              width: "100%",
            }}
          >
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={4}
              justifyContent="space-around"
            >
              {[
                { label: "Material UI v6", value: "Design System" },
                { label: "TanStack Query", value: "Data Fetching" },
                { label: "Zustand", value: "State Management" },
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
