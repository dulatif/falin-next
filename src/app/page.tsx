"use client";

import {
  alpha,
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import {
  ArrowRight,
  Calendar,
  ChartBar,
  Code,
  Copy,
  Globe,
  Lightning,
  PaintBrush,
  ShieldCheck,
  Table,
  TextAa,
  ToggleLeft,
} from "phosphor-react";
import { useState } from "react";
import { FeatureMainCard } from "@/ui/components/FeatureMainCard";
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
                size="lg"
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
                size="lg"
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

      {/* Main Features Section */}
      <Container maxWidth="lg" sx={{ py: 16 }}>
        <Typography
          variant="h3"
          fontWeight="bold"
          align="center"
          gutterBottom
          sx={{ mb: 8, letterSpacing: "-1.5px" }}
        >
          Core Capabilities
        </Typography>
        <Grid container spacing={3} alignItems="stretch">
          {/* Theme System */}
          <Grid size={{ xs: 12, md: 4 }} sx={{ display: "flex" }}>
            <FeatureMainCard
              title="Theme System"
              description="Comprehensive light/dark mode support with token-based design system powered by MUI v6."
            >
              {/* Abstract Palette Representation */}
              <Box sx={{ position: "relative", width: 120, height: 120 }}>
                <PaintBrush
                  size={120}
                  weight="duotone"
                  color={theme.palette.primary.main}
                  style={{ opacity: 0.8 }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    top: -10,
                    right: -10,
                    p: 1,
                    borderRadius: "50%",
                    bgcolor: theme.palette.background.paper,
                    boxShadow: theme.shadows[4],
                  }}
                >
                  <ToggleLeft
                    size={32}
                    weight="fill"
                    color={theme.palette.secondary.main}
                  />
                </Box>
              </Box>
            </FeatureMainCard>
          </Grid>

          {/* State Management */}
          <Grid size={{ xs: 12, md: 4 }} sx={{ display: "flex" }}>
            <FeatureMainCard
              title="State & Data Fetching"
              description="Efficient client-state management with Zustand and powerful server-state synchronization with TanStack Query."
              delay={0.1}
            >
              <Box sx={{ position: "relative" }}>
                <Lightning
                  size={120}
                  weight="duotone"
                  color={theme.palette.warning.main}
                  style={{ opacity: 0.8 }}
                />
              </Box>
            </FeatureMainCard>
          </Grid>

          {/* Type Safety */}
          <Grid size={{ xs: 12, md: 4 }} sx={{ display: "flex" }}>
            <FeatureMainCard
              title="Type Safety"
              description="End-to-end type safety with TypeScript, Zod schema validation, and React Hook Form integration."
              delay={0.2}
            >
              <ShieldCheck
                size={120}
                weight="duotone"
                color={theme.palette.success.main}
                style={{ opacity: 0.8 }}
              />
            </FeatureMainCard>
          </Grid>
        </Grid>
      </Container>

      {/* Bento Grid Toolset Section */}
      <Container maxWidth="lg" sx={{ pb: 16 }}>
        <Stack spacing={2} alignItems="center" mb={8} textAlign="center">
          <Typography
            variant="h3"
            fontWeight="bold"
            gutterBottom
            sx={{ letterSpacing: "-1.5px" }}
          >
            Everything you need
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ maxWidth: 600 }}
          >
            A comprehensive suite of pre-configured tools to build
            enterprise-grade applications specifically for you.
          </Typography>
        </Stack>

        <Grid container spacing={3} alignItems="stretch">
          {[
            {
              title: "Rich Text Editor",
              description:
                "Headless Tiptap editor for seamless content creation.",
              icon: <TextAa size={32} weight="duotone" />,
            },
            {
              title: "Data Visualization",
              description: "Interactive charts powered by ApexCharts.",
              icon: <ChartBar size={32} weight="duotone" />,
            },
            {
              title: "Data Grid",
              description: "Powerful tables with Material React Table.",
              icon: <Table size={32} weight="duotone" />,
            },
            {
              title: "Forms & Validation",
              description: "Type-safe forms with Zod and React Hook Form.",
              icon: <ShieldCheck size={32} weight="duotone" />,
            },
            {
              title: "Calendar System",
              description: "Full-featured drag-and-drop FullCalendar.",
              icon: <Calendar size={32} weight="duotone" />,
            },
            {
              title: "Maps",
              description:
                "SVG-based map visualizations with React Simple Maps.",
              icon: <Globe size={32} weight="duotone" />,
            },
          ].map((feature, index) => (
            <Grid
              size={{ xs: 12, sm: 6, md: 4 }}
              key={feature.title + index}
              sx={{ display: "flex" }}
            >
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
              <Grid size={{ xs: 6, sm: 3, md: 2 }} key={tech.name}>
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
