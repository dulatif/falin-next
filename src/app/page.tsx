"use client";

import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
  alpha,
  useTheme,
} from "@mui/material";
import {
  ArrowRight,
  Code,
  Copy,
  Lightning,
  PaintBrush,
  ShieldCheck,
} from "phosphor-react";
import { useState } from "react";
import { LandingNavbar } from "@/ui/components/LandingNavbar";
import { LinearCard } from "@/ui/components/LinearCard";

export default function Home() {
  const theme = useTheme();
  const [copied, setCopied] = useState(false);

  // Custom "Common" colors for deep dark cold tone
  const deepDarkBg = "#0B0E14";

  const handleCopyCommand = () => {
    navigator.clipboard.writeText("npx create-falin-next");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor:
          theme.palette.mode === "dark" ? deepDarkBg : "background.default",
        color: "text.primary",
        overflowX: "hidden",
      }}
    >
      <LandingNavbar />

      {/* Hero Section */}
      <Box
        component="section"
        sx={{
          pt: { xs: 16, md: 24 },
          pb: { xs: 12, md: 16 },
          position: "relative",
          textAlign: "center",
        }}
      >
        {/* Background Glow */}
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "120%",
            height: "100%",
            backgroundImage: `radial-gradient(circle at center, ${alpha(
              theme.palette.primary.main,
              0.08,
            )} 0%, transparent 60%)`,
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Stack spacing={4} alignItems="center">
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "48px", md: "76px" },
                fontWeight: 600,
                lineHeight: 1,
                letterSpacing: "-3.8px",
                background:
                  theme.palette.mode === "dark"
                    ? "linear-gradient(180deg, #FFFFFF 0%, #A1A1A1 100%)"
                    : "linear-gradient(180deg, #000000 0%, #666666 100%)",
                backgroundClip: "text",
                textFillColor: "transparent",
                color: "transparent",
              }}
            >
              Falin Next TS
            </Typography>

            <Typography
              variant="h5"
              sx={{
                maxWidth: 800,
                color: theme.palette.text.secondary,
                fontWeight: 400,
                fontSize: "20px",
                lineHeight: 1.6,
              }}
            >
              Falin Next enables you to create high-quality web applications
              with the power of React components. Designed to be{" "}
              <Box
                component="span"
                sx={{ color: theme.palette.primary.main, fontWeight: 600 }}
              >
                time efficient
              </Box>{" "}
              and{" "}
              <Box
                component="span"
                sx={{ color: theme.palette.primary.main, fontWeight: 600 }}
              >
                boost productivity
              </Box>{" "}
              for enterprise teams.
            </Typography>

            <Stack direction="row" spacing={2} pt={2}>
              <Button
                variant="contained"
                size="large"
                endIcon={<ArrowRight />}
                sx={{
                  borderRadius: 2,
                  px: 4,
                  py: 1.5,
                  fontSize: "1rem",
                  textTransform: "none",
                }}
              >
                Get Started
              </Button>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  borderRadius: 2,
                  px: 4,
                  py: 1.5,
                  fontSize: "1rem",
                  textTransform: "none",
                  borderColor: alpha(theme.palette.divider, 0.2),
                }}
              >
                Documentation
              </Button>
            </Stack>

            {/* Terminal Command */}
            <Box
              onClick={handleCopyCommand}
              sx={{
                mt: 6,
                display: "inline-flex",
                alignItems: "center",
                gap: 2,
                py: 1.5,
                px: 3,
                borderRadius: 2,
                bgcolor: alpha(
                  theme.palette.common.black,
                  theme.palette.mode === "dark" ? 0.3 : 0.05,
                ),
                border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                cursor: "pointer",
                transition: "all 0.2s",
                "&:hover": {
                  bgcolor: alpha(
                    theme.palette.common.black,
                    theme.palette.mode === "dark" ? 0.5 : 0.1,
                  ),
                  borderColor: theme.palette.primary.main,
                },
              }}
            >
              <Typography
                variant="body2"
                fontFamily="monospace"
                color="text.secondary"
              >
                <Box
                  component="span"
                  sx={{ color: theme.palette.primary.main, mr: 1 }}
                >
                  $
                </Box>
                npx create-falin-next
              </Typography>
              <Copy
                size={16}
                color={
                  copied
                    ? theme.palette.success.main
                    : theme.palette.text.secondary
                }
              />
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ pb: 16 }}>
        <Grid container spacing={3}>
          {[
            {
              title: "Next.js 16",
              description:
                "Built on the latest stable version of Next.js with App Router and Server Actions.",
              icon: <Lightning size={32} weight="duotone" />,
            },
            {
              title: "Material UI v6",
              description:
                "Beautiful, accessible, and customizable components from the world's most popular React UI framework.",
              icon: <PaintBrush size={32} weight="duotone" />,
            },
            {
              title: "TypeScript",
              description:
                "Type-safe by default, ensuring code quality and better developer experience from day one.",
              icon: <ShieldCheck size={32} weight="duotone" />,
            },
          ].map((feature, index) => (
            <Grid item xs={12} md={4} key={feature.title}>
              <LinearCard {...feature} />
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Powered By Section */}
      <Box
        sx={{
          py: 12,
          bgcolor: alpha(theme.palette.background.paper, 0.02),
          borderTop: `1px solid ${alpha(theme.palette.divider, 0.05)}`,
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            align="center"
            fontWeight="bold"
            gutterBottom
            sx={{ letterSpacing: "-1px", mb: 2 }}
          >
            Powered By
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="text.secondary"
            sx={{ mb: 8, maxWidth: 600, mx: "auto" }}
          >
            Built on a foundation of fast, production-grade tooling
          </Typography>

          <Grid
            container
            spacing={4}
            justifyContent="center"
            alignItems="center"
          >
            {[
              { name: "Next.js", icon: <Code size={32} /> },
              { name: "MUI v6", icon: <PaintBrush size={32} /> },
              { name: "TanStack Query", icon: <Lightning size={32} /> },
              { name: "Zustand", icon: <ShieldCheck size={32} /> },
            ].map((tech) => (
              <Grid item xs={6} sm={3} md={2} key={tech.name}>
                <Stack
                  alignItems="center"
                  spacing={2}
                  sx={{
                    opacity: 0.6,
                    transition: "opacity 0.2s",
                    "&:hover": { opacity: 1 },
                  }}
                >
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: "50%",
                      bgcolor: alpha(theme.palette.text.primary, 0.05),
                      color: theme.palette.text.primary,
                    }}
                  >
                    {tech.icon}
                  </Box>
                  <Typography variant="subtitle2" fontWeight="600">
                    {tech.name}
                  </Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Footer */}
      <Box
        sx={{
          py: 4,
          borderTop: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
          textAlign: "center",
        }}
      >
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} Falin Next TS. MIT License.
        </Typography>
      </Box>
    </Box>
  );
}
