"use client";

import {
  alpha,
  Box,
  Button,
  Container,
  Grid,
  keyframes,
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

  // --- Animations ---
  const streamRight = keyframes`
    0% { transform: translateX(-100%); opacity: 0; }
    20% { opacity: 1; }
    80% { opacity: 1; }
    100% { transform: translateX(100%); opacity: 0; }
  `;
  const streamLeft = keyframes`
    0% { transform: translateX(100%); opacity: 0; }
    20% { opacity: 1; }
    80% { opacity: 1; }
    100% { transform: translateX(-100%); opacity: 0; }
  `;
  const blink = keyframes`
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  `;
  const float = keyframes`
    0%, 100% { transform: translateY(0) translateZ(30px); }
    50% { transform: translateY(-10px) translateZ(30px); }
  `;
  const floatSlow = keyframes`
    0%, 100% { transform: translateY(0) translateZ(10px); }
    50% { transform: translateY(-5px) translateZ(10px); }
  `;
  const gridMove = keyframes`
    0% { background-position: 0 0; }
    100% { background-position: 20px 20px; }
  `;
  const scrollUp = keyframes`
    0% { transform: translateY(0); }
    100% { transform: translateY(-50%); }
  `;

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
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  position: "relative",
                  overflow: "hidden",
                  perspective: "1000px",
                }}
              >
                {/* Layer 1: Code Background */}
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    opacity: 0.2,
                    pointerEvents: "none",
                    overflow: "hidden",
                    transition: "opacity 0.5s",
                    ".card:hover &": { opacity: 0.1 },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 1,
                      p: 2,
                      fontFamily: "monospace",
                      fontSize: "10px",
                      color: "text.secondary",
                      animation: `${scrollUp} 15s linear infinite`,
                    }}
                  >
                    {[...Array(2)].map((_, i) => (
                      <Box
                        key={i}
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 0.5,
                        }}
                      >
                        <Box>:root &#123;</Box>
                        <Box pl={2}>--foreground: #000;</Box>
                        <Box pl={2}>--background: #fff;</Box>
                        <Box pl={2}>
                          --primary: {theme.palette.primary.main};
                        </Box>
                        <Box>&#125;</Box>
                        <Box>[data-theme=&apos;dark&apos;] &#123;</Box>
                        <Box pl={2}>--foreground: #fff;</Box>
                        <Box pl={2}>--background: #000;</Box>
                        <Box>&#125;</Box>
                      </Box>
                    ))}
                  </Box>
                </Box>

                {/* Layer 2: 3D Scene */}
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transformStyle: "preserve-3d",
                    transition: "transform 0.5s",
                    ".card:hover &": { transform: "scale(1.05)" },
                  }}
                >
                  {/* Floating Swatches Left */}
                  <Box
                    sx={{
                      position: "absolute",
                      left: 24,
                      top: 48,
                      display: "flex",
                      flexDirection: "column",
                      gap: 1.5,
                      transform: "translateZ(20px)",
                      transition: "all 0.5s",
                      ".card:hover &": {
                        transform: "translateZ(20px) translate(-8px, -8px)",
                      },
                    }}
                  >
                    {["#3b82f6", "#a855f7"].map((color, i) => (
                      <Box
                        key={i}
                        sx={{
                          width: 40,
                          height: 40,
                          borderRadius: 2,
                          bgcolor: "background.paper",
                          boxShadow: theme.shadows[4],
                          border: `1px solid ${theme.palette.divider}`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          transition: "all 0.5s",
                          transitionDelay: `${i * 75}ms`,
                          ".card:hover &": {
                            bgcolor: "#333",
                            borderColor: "#444",
                          },
                        }}
                      >
                        <Box
                          sx={{
                            width: 24,
                            height: 24,
                            borderRadius: 1,
                            bgcolor: color,
                          }}
                        />
                      </Box>
                    ))}
                  </Box>

                  {/* Main Toggle Switch */}
                  <Box
                    sx={{ position: "relative", transform: "translateZ(50px)" }}
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        inset: -16,
                        background:
                          "linear-gradient(to right, #60a5fa, #c084fc)",
                        opacity: 0,
                        filter: "blur(20px)",
                        borderRadius: "50%",
                        transition: "opacity 0.5s",
                        ".card:hover &": { opacity: 0.2 },
                      }}
                    />
                    <Box
                      sx={{
                        width: 128,
                        height: 64,
                        bgcolor: alpha(theme.palette.background.paper, 0.9),
                        backdropFilter: "blur(12px)",
                        borderRadius: 32,
                        boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                        border: `1px solid ${alpha(theme.palette.common.white, 0.5)}`,
                        display: "flex",
                        alignItems: "center",
                        p: 0.75,
                        transition: "all 0.5s",
                        overflow: "hidden",
                        ".card:hover &": {
                          bgcolor: alpha("#1f2937", 0.9),
                          borderColor: "#374151",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          width: 48,
                          height: 48,
                          bgcolor: "common.white",
                          borderRadius: "50%",
                          boxShadow: theme.shadows[2],
                          transform: "translateX(0)",
                          transition:
                            "transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          zIndex: 10,
                          ".card:hover &": { transform: "translateX(64px)" },
                        }}
                      >
                        <ToggleLeft
                          size={24}
                          weight="fill"
                          color={theme.palette.warning.main}
                        />
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </FeatureMainCard>
          </Grid>

          {/* State & Data Fetching */}
          <Grid size={{ xs: 12, md: 4 }} sx={{ display: "flex" }}>
            <FeatureMainCard
              title="State & Data Fetching"
              description="Efficient client-state management with Zustand and powerful server-state synchronization with TanStack Query."
              delay={0.1}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  position: "relative",
                  overflow: "hidden",
                  perspective: "1000px",
                }}
              >
                {/* Layer 1: Grid Background */}
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: `radial-gradient(${alpha(theme.palette.text.secondary, 0.2)} 1px, transparent 1px)`,
                    backgroundSize: "20px 20px",
                    opacity: 0.3,
                    animation: `${gridMove} 3s linear infinite`,
                  }}
                />

                {/* Layer 2: Waterfall Graph (Static Background) */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: 128,
                    px: 4,
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "space-between",
                    opacity: 0.1,
                    gap: 1,
                    transform: "skewX(12deg) translateZ(10px)",
                  }}
                >
                  {[40, 70, 50, 30, 80].map((h, i) => (
                    <Box
                      key={i}
                      sx={{
                        width: "100%",
                        height: `${h}%`,
                        bgcolor: i % 2 ? "primary.main" : "secondary.main",
                        borderRadius: "4px 4px 0 0",
                      }}
                    />
                  ))}
                </Box>

                {/* Layer 3: Main 3D Scene */}
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    px: 5,
                    transformStyle: "preserve-3d",
                    transition: "transform 0.7s",
                    ".card:hover &": {
                      transform: "rotateY(3deg) rotateX(3deg)",
                    },
                  }}
                >
                  {/* Server Block */}
                  <Box
                    sx={{
                      position: "relative",
                      transform: "translateZ(20px)",
                      transition: "transform 0.5s",
                      ".card:hover &": { transform: "translateZ(40px)" },
                    }}
                  >
                    <Box sx={{ width: 80, height: 96, position: "relative" }}>
                      <Box
                        sx={{
                          position: "absolute",
                          inset: 0,
                          bgcolor: "background.paper",
                          borderRadius: 1,
                          border: `1px solid ${theme.palette.divider}`,
                          boxShadow: theme.shadows[4],
                          zIndex: 20,
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: 1,
                        }}
                      >
                        {[1, 2, 3].map((i) => (
                          <Box
                            key={i}
                            sx={{
                              width: 48,
                              height: 6,
                              bgcolor: alpha(theme.palette.text.secondary, 0.2),
                              borderRadius: 4,
                            }}
                          />
                        ))}
                      </Box>
                      <Box
                        sx={{
                          position: "absolute",
                          top: 4,
                          left: 4,
                          width: "100%",
                          height: "100%",
                          bgcolor: alpha(theme.palette.text.secondary, 0.1),
                          borderRadius: 1,
                          zIndex: -10,
                        }}
                      />
                    </Box>
                    <Typography
                      variant="caption"
                      display="block"
                      align="center"
                      sx={{
                        mt: 1,
                        fontWeight: "bold",
                        bgcolor: "background.paper",
                        borderRadius: 1,
                        px: 1,
                      }}
                    >
                      SERVER
                    </Typography>
                  </Box>

                  {/* Data Stream */}
                  <Box
                    sx={{
                      position: "absolute",
                      left: 100,
                      right: 100,
                      height: 80,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      gap: 2,
                      transform: "translateZ(10px)",
                    }}
                  >
                    <Box
                      sx={{
                        height: 2,
                        width: "100%",
                        bgcolor: alpha(theme.palette.divider, 0.5),
                        position: "relative",
                        borderRadius: 4,
                        overflow: "hidden",
                      }}
                    >
                      <Box
                        sx={{
                          position: "absolute",
                          inset: 0,
                          width: "33%",
                          background: `linear-gradient(90deg, transparent, ${theme.palette.primary.main}, transparent)`,
                          animation: `${streamRight} 2s cubic-bezier(0.4, 0, 0.2, 1) infinite`,
                        }}
                      />
                    </Box>
                    <Box
                      sx={{
                        height: 2,
                        width: "100%",
                        bgcolor: alpha(theme.palette.divider, 0.5),
                        position: "relative",
                        borderRadius: 4,
                        overflow: "hidden",
                      }}
                    >
                      <Box
                        sx={{
                          position: "absolute",
                          inset: 0,
                          width: "33%",
                          background: `linear-gradient(-90deg, transparent, ${theme.palette.secondary.main}, transparent)`,
                          animation: `${streamLeft} 2s cubic-bezier(0.4, 0, 0.2, 1) infinite`,
                        }}
                      />
                    </Box>
                    <Typography
                      variant="caption"
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: "33%",
                        opacity: 0,
                        transition: "opacity 0.3s",
                        animation: `${floatSlow} 8s ease-in-out infinite`,
                        ".card:hover &": { opacity: 1 },
                      }}
                    >
                      &#123;data&#125;
                    </Typography>
                  </Box>

                  {/* Client Block */}
                  <Box
                    sx={{
                      position: "relative",
                      transform: "translateZ(20px)",
                      transition: "transform 0.5s",
                      ".card:hover &": { transform: "translateZ(40px)" },
                    }}
                  >
                    <Box sx={{ width: 80, height: 96, position: "relative" }}>
                      <Box
                        sx={{
                          position: "absolute",
                          inset: 0,
                          bgcolor: "background.paper",
                          borderRadius: 1,
                          border: `1px solid ${theme.palette.divider}`,
                          boxShadow: theme.shadows[4],
                          zIndex: 20,
                          p: 1,
                        }}
                      >
                        <Box sx={{ display: "flex", gap: 0.5, mb: 1 }}>
                          <Box
                            sx={{
                              width: 6,
                              height: 6,
                              borderRadius: "50%",
                              bgcolor: "grey.300",
                            }}
                          />
                          <Box
                            sx={{
                              width: 6,
                              height: 6,
                              borderRadius: "50%",
                              bgcolor: "grey.300",
                            }}
                          />
                        </Box>
                        <Box
                          sx={{
                            width: "100%",
                            height: 32,
                            bgcolor: alpha(theme.palette.primary.main, 0.1),
                            borderRadius: 0.5,
                            mb: 0.5,
                          }}
                        />
                        <Box
                          sx={{
                            width: "70%",
                            height: 8,
                            bgcolor: "grey.100",
                            borderRadius: 0.5,
                          }}
                        />
                      </Box>
                      <Box
                        sx={{
                          position: "absolute",
                          top: 4,
                          left: 4,
                          width: "100%",
                          height: "100%",
                          bgcolor: alpha(theme.palette.text.secondary, 0.1),
                          borderRadius: 1,
                          zIndex: -10,
                        }}
                      />
                    </Box>
                    <Typography
                      variant="caption"
                      display="block"
                      align="center"
                      sx={{
                        mt: 1,
                        fontWeight: "bold",
                        bgcolor: "background.paper",
                        borderRadius: 1,
                        px: 1,
                      }}
                    >
                      CLIENT
                    </Typography>
                  </Box>
                </Box>
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
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  position: "relative",
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* Layer 1: Abstract Shapes */}
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    opacity: 0.1,
                  }}
                >
                  <Box
                    sx={{
                      width: 256,
                      height: 256,
                      border: `1px solid ${theme.palette.primary.main}`,
                      borderRadius: "50%",
                      transform: "scale(0.5)",
                      transition: "transform 1s",
                      ".card:hover &": { transform: "scale(1)" },
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      width: 192,
                      height: 192,
                      border: `1px solid ${theme.palette.secondary.main}`,
                      borderRadius: "50%",
                      transform: "scale(0.5)",
                      transition: "transform 1s",
                      transitionDelay: "100ms",
                      ".card:hover &": { transform: "scale(1)" },
                    }}
                  />
                </Box>

                {/* Layer 2: Code Editor */}
                <Box
                  sx={{
                    position: "relative",
                    width: 220,
                    bgcolor: "#1e1e1e",
                    borderRadius: 1,
                    boxShadow: theme.shadows[10],
                    border: "1px solid #333",
                    transform: "rotate(2deg)",
                    transition: "all 0.5s",
                    zIndex: 20,
                    ".card:hover &": { transform: "rotate(0deg)" },
                  }}
                >
                  {/* Title Bar */}
                  <Box
                    sx={{
                      bgcolor: "#252526",
                      px: 1.5,
                      py: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      borderBottom: "1px solid #333",
                      borderRadius: "4px 4px 0 0",
                    }}
                  >
                    <Box sx={{ display: "flex", gap: 0.75 }}>
                      <Box
                        sx={{
                          width: 10,
                          height: 10,
                          borderRadius: "50%",
                          bgcolor: "#ff5f56",
                        }}
                      />
                      <Box
                        sx={{
                          width: 10,
                          height: 10,
                          borderRadius: "50%",
                          bgcolor: "#ffbd2e",
                        }}
                      />
                      <Box
                        sx={{
                          width: 10,
                          height: 10,
                          borderRadius: "50%",
                          bgcolor: "#27c93f",
                        }}
                      />
                    </Box>
                    <Typography
                      variant="caption"
                      sx={{
                        fontFamily: "monospace",
                        color: "grey.500",
                        fontSize: 10,
                      }}
                    >
                      user.ts
                    </Typography>
                  </Box>

                  {/* Code Content */}
                  <Box
                    sx={{
                      p: 2,
                      fontFamily: "monospace",
                      fontSize: "10px",
                      lineHeight: 1.6,
                      color: "#d4d4d4",
                    }}
                  >
                    <Box sx={{ ml: 1 }}>
                      <Box>
                        <span style={{ color: "#c586c0" }}>interface</span>{" "}
                        <span style={{ color: "#4ec9b0" }}>User</span>{" "}
                        <span style={{ color: "#ffd700" }}>&#123;</span>
                      </Box>
                      <Box sx={{ pl: 2 }}>
                        <span style={{ color: "#9cdcfe" }}>id</span>
                        <span style={{ color: "#d4d4d4" }}>:</span>{" "}
                        <span style={{ color: "#4ec9b0" }}>string</span>;
                      </Box>
                      <Box
                        sx={{ pl: 2, display: "flex", alignItems: "center" }}
                      >
                        <span style={{ color: "#9cdcfe" }}>role</span>
                        <span style={{ color: "#d4d4d4" }}>:</span>&nbsp;
                        <span style={{ color: "#ce9178" }}>
                          &apos;admin&apos;
                        </span>
                        ;
                        <Box
                          sx={{
                            width: 6,
                            height: 12,
                            bgcolor: "#60a5fa",
                            ml: 0.5,
                            animation: `${blink} 1s step-end infinite`,
                          }}
                        />
                      </Box>
                      <Box>
                        <span style={{ color: "#ffd700" }}>&#125;</span>
                      </Box>
                    </Box>
                  </Box>

                  {/* Floating Badge */}
                  <Box
                    sx={{
                      position: "absolute",
                      right: -16,
                      bottom: -16,
                      bgcolor: "primary.main",
                      color: "common.white",
                      fontSize: 10,
                      fontWeight: "bold",
                      px: 1.5,
                      py: 0.5,
                      borderRadius: 10,
                      boxShadow: theme.shadows[4],
                      transform: "rotate(12deg) translateZ(50px)",
                      transition: "transform 0.3s",
                      display: "flex",
                      alignItems: "center",
                      gap: 0.5,
                      ".card:hover &": { transform: "rotate(0deg)" },
                    }}
                  >
                    <ShieldCheck size={12} weight="bold" />
                    Safe
                  </Box>
                </Box>
              </Box>
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
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="xl" sx={{ position: "relative" }}>
          {/* 1. CPU / Motherboard Badge */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mb: 0,
              position: "relative",
              zIndex: 2,
            }}
          >
            <Box
              sx={{
                bgcolor: "grey.900",
                color: "common.white",
                fontFamily: "monospace",
                fontWeight: "bold",
                fontSize: 12,
                py: 1.5,
                px: 4,
                borderRadius: 1,
                boxShadow: theme.shadows[10],
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                position: "relative",
                border: "1px solid",
                borderColor: "grey.700",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  inset: -4,
                  border: "2px solid",
                  borderColor: alpha(theme.palette.grey[100], 0.1),
                  borderRadius: 1.5,
                },
              }}
            >
              {/* Decorative Pins */}
              <Box
                sx={{
                  position: "absolute",
                  left: -6,
                  top: 8,
                  bottom: 8,
                  width: 4,
                  background:
                    "linear-gradient(to bottom, #fbbf24, #fef3c7, #f59e0b)",
                  borderRadius: "4px 0 0 4px",
                  opacity: 0.8,
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  right: -6,
                  top: 8,
                  bottom: 8,
                  width: 4,
                  background:
                    "linear-gradient(to bottom, #fbbf24, #fef3c7, #f59e0b)",
                  borderRadius: "0 4px 4px 0",
                  opacity: 0.8,
                }}
              />
              {/* LED Lights */}
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  bgcolor: "success.main",
                  borderRadius: "50%",
                  boxShadow: `0 0 10px ${theme.palette.success.main}`,
                  animation: `${blink} 2s infinite`,
                }}
              />
              POWERED BY
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  bgcolor: "success.main",
                  borderRadius: "50%",
                  boxShadow: `0 0 10px ${theme.palette.success.main}`,
                  animation: `${blink} 2s infinite`,
                  animationDelay: "1s",
                }}
              />
              {/* Bottom Connector Stub */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: -4,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: 32,
                  height: 4,
                  bgcolor: "grey.700",
                  borderRadius: "0 0 4px 4px",
                }}
              />
            </Box>
          </Box>

          {/* 2. Circuit Board Lines (SVG) */}
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: 96,
              mt: -0.5,
              mb: -0.5,
              zIndex: 0,
              display: { xs: "none", md: "block" },
            }}
          >
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 1200 100"
              preserveAspectRatio="none"
              style={{ overflow: "visible" }}
            >
              <defs>
                <linearGradient
                  id="circuit-gradient"
                  x1="0%"
                  y1="100%"
                  x2="0%"
                  y2="0%"
                >
                  <stop
                    offset="0%"
                    stopColor={theme.palette.primary.light}
                    stopOpacity="0"
                  />
                  <stop
                    offset="50%"
                    stopColor={theme.palette.primary.main}
                    stopOpacity="1"
                  />
                  <stop
                    offset="100%"
                    stopColor={theme.palette.primary.light}
                    stopOpacity="1"
                  />
                </linearGradient>
              </defs>
              {/* Paths for 4 items based on 1200px width. Centers: 150, 450, 750, 1050. Origin: 600. */}
              {[
                "M 175 100 V 50 H 580 V 0",
                "M 470 100 V 50 H 590 V 0",
                "M 740 100 V 50 H 610 V 0",
                "M 1025 100 V 50 H 620 V 0",
              ].map((d, i) => (
                <g key={i}>
                  <path
                    d={d}
                    fill="none"
                    stroke={alpha(theme.palette.divider, 0.1)}
                    strokeWidth="2"
                    vectorEffect="non-scaling-stroke"
                  />
                  <path
                    d={d}
                    fill="none"
                    stroke="url(#circuit-gradient)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeDasharray="50 300"
                    strokeDashoffset="350"
                    vectorEffect="non-scaling-stroke"
                    style={{
                      animation: `circuitFlow 3s linear infinite`,
                      animationDelay: `${i * 0.5}s`,
                    }}
                  />
                  {/* Dot at bottom */}
                  <circle
                    cx={[175, 470, 740, 1025][i]}
                    cy="100"
                    r="4"
                    fill={theme.palette.text.disabled}
                  />
                </g>
              ))}
            </svg>
          </Box>

          <style>
            {`
              @keyframes circuitFlow {
                to { stroke-dashoffset: 0; }
              }
              @keyframes ripple {
                0% { transform: scale(0.8); opacity: 1; }
                100% { transform: scale(2); opacity: 0; }
              }
            `}
          </style>

          {/* 3. Tech Stack Grid */}
          <Grid container spacing={4} sx={{ position: "relative", zIndex: 10 }}>
            {/* TypeScript Card */}
            <Grid size={{ xs: 12, md: 3 }}>
              <Box
                className="card group"
                sx={{ height: "100%", perspective: "1000px" }}
              >
                <Box
                  sx={{
                    position: "relative",
                    borderRadius: 3,
                    border: `1px solid ${theme.palette.divider}`,
                    bgcolor: "background.paper",
                    overflow: "hidden",
                    transition: "all 0.5s",
                    "&:hover": {
                      boxShadow: `0 10px 40px -10px ${alpha("#3178C6", 0.3)}`,
                      borderColor: "#3178C6",
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: { xs: "none", md: "block" },
                      position: "absolute",
                      top: -4,
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: 48,
                      height: 4,
                      bgcolor: "grey.300",
                      borderRadius: "0 0 4px 4px",
                      zIndex: 20,
                    }}
                  />

                  <Box
                    sx={{
                      height: 200,
                      position: "relative",
                      overflow: "hidden",
                      bgcolor: "grey.50",
                      transition: "background-color 0.5s",
                      ".card:hover &": { bgcolor: "#3178C6" },
                    }}
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        inset: 0,
                        opacity: 0.3,
                        backgroundImage: `radial-gradient(${alpha("#000", 0.1)} 1px, transparent 1px)`,
                        backgroundSize: "20px 20px",
                      }}
                    />
                    {/* Orbiting Text */}
                    <Box
                      sx={{
                        position: "absolute",
                        top: 40,
                        left: 40,
                        fontFamily: "monospace",
                        fontSize: 10,
                        color: "text.secondary",
                        animation: `${float} 6s ease-in-out infinite`,
                        ".card:hover &": { color: "blue.100" },
                      }}
                    >
                      interface &#123;&#125;
                    </Box>
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: 40,
                        right: 40,
                        fontFamily: "monospace",
                        fontSize: 10,
                        color: "text.secondary",
                        animation: `${float} 6s ease-in-out infinite`,
                        animationDelay: "1s",
                        ".card:hover &": { color: "blue.100" },
                      }}
                    >
                      type Props
                    </Box>

                    {/* Logo Block */}
                    <Box
                      sx={{
                        position: "absolute",
                        inset: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transformStyle: "preserve-3d",
                        transition: "transform 0.5s",
                        ".card:hover &": { transform: "scale(1.1)" },
                      }}
                    >
                      <Box
                        sx={{
                          width: 80,
                          height: 80,
                          bgcolor: "#3178C6",
                          borderRadius: 2,
                          boxShadow: theme.shadows[4],
                          border: "2px solid rgba(255,255,255,0.2)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "white",
                          fontWeight: "bold",
                          fontSize: 32,
                          transform: "translateZ(20px)",
                          animation: `${float} 6s ease-in-out infinite`,
                          transition: "all 0.5s",
                          ".card:hover &": {
                            bgcolor: "white",
                            color: "#3178C6",
                          },
                        }}
                      >
                        TS
                        <Box
                          sx={{
                            position: "absolute",
                            inset: 0,
                            background:
                              "linear-gradient(to top right, rgba(255,255,255,0.2), transparent)",
                            borderRadius: 2,
                            pointerEvents: "none",
                          }}
                        />
                      </Box>
                    </Box>
                  </Box>
                  <Box sx={{ p: 3 }}>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                      TypeScript
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Statically typed superset of JavaScript.
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>

            {/* Next.js Card */}
            <Grid size={{ xs: 12, md: 3 }}>
              <Box
                className="card group"
                sx={{ height: "100%", perspective: "1000px" }}
              >
                <Box
                  sx={{
                    position: "relative",
                    borderRadius: 3,
                    border: `1px solid ${theme.palette.divider}`,
                    bgcolor: "background.paper",
                    overflow: "hidden",
                    transition: "all 0.5s",
                    "&:hover": {
                      boxShadow: theme.shadows[10],
                      borderColor: "common.black",
                    },
                  }}
                >
                  {/* Top connector node (desktop only) */}
                  <Box
                    sx={{
                      display: { xs: "none", md: "block" },
                      position: "absolute",
                      top: -4,
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: 48,
                      height: 4,
                      bgcolor: "grey.300",
                      borderRadius: "0 0 4px 4px",
                      zIndex: 20,
                    }}
                  />

                  <Box
                    sx={{
                      height: 200,
                      position: "relative",
                      overflow: "hidden",
                      bgcolor: "grey.50",
                      transition: "background-color 0.5s",
                      ".card:hover &": { bgcolor: "common.black" },
                    }}
                  >
                    {/* Stream Lines */}
                    <Box
                      sx={{
                        position: "absolute",
                        inset: 0,
                        opacity: 0,
                        transition: "opacity 0.5s",
                        ".card:hover &": { opacity: 0.3 },
                      }}
                    >
                      {[1, 2, 3].map((i) => (
                        <Box
                          key={i}
                          sx={{
                            position: "absolute",
                            top: `${i * 25}%`,
                            left: 0,
                            width: "100%",
                            height: 1,
                            background:
                              "linear-gradient(90deg, transparent, #fff, transparent)",
                            animation: `${streamRight} 1.5s linear infinite`,
                            animationDelay: `${i * 0.2}s`,
                          }}
                        />
                      ))}
                    </Box>
                    {/* 3D Logo */}
                    <Box
                      sx={{
                        position: "absolute",
                        inset: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transformStyle: "preserve-3d",
                        transition: "transform 0.7s",
                        ".card:hover &": { transform: "rotateY(12deg)" },
                      }}
                    >
                      <Box
                        sx={{
                          width: 80,
                          height: 80,
                          bgcolor: "common.white",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          boxShadow: theme.shadows[4],
                          transform: "translateZ(30px)",
                          transition: "all 0.5s",
                          ".card:hover &": {
                            bgcolor: "common.black",
                            border: "1px solid rgba(255,255,255,0.2)",
                          },
                        }}
                      >
                        <Code
                          size={40}
                          weight="bold"
                          color={theme.palette.text.primary}
                          style={{ transition: "color 0.5s" }}
                          className="icon"
                        />
                        <Box
                          component="span"
                          sx={{
                            position: "absolute",
                            inset: 0,
                            bgcolor: "common.black",
                            opacity: 0,
                            transition: "opacity 0.5s",
                            borderRadius: "50%",
                            ".card:hover &": { opacity: 1 },
                            zIndex: -1,
                          }}
                        />
                        <style>{`.card:hover .icon { color: white !important; }`}</style>
                      </Box>
                    </Box>
                  </Box>
                  <Box sx={{ p: 3 }}>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                      Next.js
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      The React Framework for the Web.
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>

            {/* MUI Card */}
            <Grid size={{ xs: 12, md: 3 }}>
              <Box
                className="card"
                sx={{ height: "100%", perspective: "1000px" }}
              >
                <Box
                  sx={{
                    position: "relative",
                    borderRadius: 3,
                    border: `1px solid ${theme.palette.divider}`,
                    bgcolor: "background.paper",
                    overflow: "hidden",
                    transition: "all 0.5s",
                    "&:hover": {
                      boxShadow: `0 10px 40px -10px ${alpha("#007FFF", 0.3)}`,
                      borderColor: "#007FFF",
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: { xs: "none", md: "block" },
                      position: "absolute",
                      top: -4,
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: 48,
                      height: 4,
                      bgcolor: "grey.300",
                      borderRadius: "0 0 4px 4px",
                      zIndex: 20,
                    }}
                  />
                  <Box
                    sx={{
                      height: 200,
                      position: "relative",
                      overflow: "hidden",
                      bgcolor: "grey.50",
                      transition: "background-color 0.5s",
                      ".card:hover &": { bgcolor: "#007FFF" },
                    }}
                  >
                    {/* Ripple */}
                    <Box
                      sx={{
                        position: "absolute",
                        inset: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        opacity: 0,
                        transition: "opacity 0.5s",
                        ".card:hover &": { opacity: 0.2 },
                      }}
                    >
                      <Box
                        sx={{
                          position: "absolute",
                          width: 160,
                          height: 160,
                          border: "1px solid white",
                          borderRadius: "50%",
                          animation: `ripple 3s linear infinite`,
                        }}
                      />
                      <Box
                        sx={{
                          position: "absolute",
                          width: 160,
                          height: 160,
                          border: "1px solid white",
                          borderRadius: "50%",
                          animation: `ripple 3s linear infinite`,
                          animationDelay: "1.5s",
                        }}
                      />
                    </Box>
                    {/* Stacked Layers */}
                    <Box
                      sx={{
                        position: "absolute",
                        inset: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transformStyle: "preserve-3d",
                        transition: "transform 0.7s",
                        ".card:hover &": {
                          transform: "rotateX(12deg) rotateY(12deg)",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          width: 64,
                          height: 64,
                          bgcolor: alpha("#007FFF", 0.2),
                          borderRadius: 2,
                          position: "absolute",
                          transform: "translateZ(10px) translate(16px, 16px)",
                        }}
                      />
                      <Box
                        sx={{
                          width: 64,
                          height: 64,
                          bgcolor: alpha("#007FFF", 0.5),
                          borderRadius: 2,
                          position: "absolute",
                          transform: "translateZ(20px) translate(8px, 8px)",
                        }}
                      />
                      <Box
                        sx={{
                          width: 64,
                          height: 64,
                          bgcolor: "#007FFF",
                          borderRadius: 2,
                          position: "absolute",
                          transform: "translateZ(30px)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          ".card:hover &": { bgcolor: "white" },
                        }}
                      >
                        <PaintBrush
                          size={32}
                          weight="fill"
                          color="white"
                          style={{ transition: "color 0.5s" }}
                          className="mui-icon"
                        />
                        <style>{`.card:hover .mui-icon { color: #007FFF !important; }`}</style>
                      </Box>
                    </Box>
                  </Box>
                  <Box sx={{ p: 3 }}>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                      MUI v6
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Comprehensive UI component library.
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>

            {/* TanStack Query Card */}
            <Grid size={{ xs: 12, md: 3 }}>
              <Box
                className="card"
                sx={{ height: "100%", perspective: "1000px" }}
              >
                <Box
                  sx={{
                    position: "relative",
                    borderRadius: 3,
                    border: `1px solid ${theme.palette.divider}`,
                    bgcolor: "background.paper",
                    overflow: "hidden",
                    transition: "all 0.5s",
                    "&:hover": {
                      boxShadow: `0 10px 40px -10px ${alpha("#FF4154", 0.3)}`,
                      borderColor: "#FF4154",
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: { xs: "none", md: "block" },
                      position: "absolute",
                      top: -4,
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: 48,
                      height: 4,
                      bgcolor: "grey.300",
                      borderRadius: "0 0 4px 4px",
                      zIndex: 20,
                    }}
                  />
                  <Box
                    sx={{
                      height: 200,
                      position: "relative",
                      overflow: "hidden",
                      bgcolor: "grey.50",
                      transition: "background-color 0.5s",
                      ".card:hover &": { bgcolor: "#FF4154" },
                    }}
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage: `radial-gradient(${alpha("#000", 0.1)} 1px, transparent 1px)`,
                        backgroundSize: "20px 20px",
                        opacity: 0.3,
                      }}
                    />
                    {/* Floating Elements */}
                    <Box
                      sx={{
                        position: "absolute",
                        inset: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transformStyle: "preserve-3d",
                        transition: "transform 0.7s",
                        ".card:hover &": { transform: "scale(1.1)" },
                      }}
                    >
                      <Box
                        sx={{
                          position: "absolute",
                          top: 40,
                          left: 40,
                          color: "text.secondary",
                          fontSize: 10,
                          fontFamily: "monospace",
                          animation: `${float} 4s ease-in-out infinite`,
                          ".card:hover &": { color: "white" },
                        }}
                      >
                        useQuery()
                      </Box>
                      <Box
                        sx={{
                          width: 80,
                          height: 80,
                          bgcolor: "#FF4154",
                          borderRadius: 2,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          transform: "translateZ(30px)",
                          boxShadow: theme.shadows[4],
                          border: "2px solid rgba(255,255,255,0.2)",
                          animation: `${float} 6s ease-in-out infinite`,
                          ".card:hover &": { bgcolor: "white" },
                        }}
                      >
                        <Lightning
                          size={40}
                          weight="fill"
                          color="white"
                          className="query-icon"
                        />
                        <style>{`.card:hover .query-icon { color: #FF4154 !important; }`}</style>
                      </Box>
                    </Box>
                  </Box>
                  <Box sx={{ p: 3 }}>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                      TanStack Query
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Powerful asynchronous state management.
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
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
