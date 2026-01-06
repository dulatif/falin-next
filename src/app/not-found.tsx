"use client";

import { Box, Button, Container, Typography } from "@mui/material";
import { keyframes, styled } from "@mui/material/styles";
import { ArrowLeft } from "phosphor-react";
import React from "react";

// --- Animations ---

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-12px); }
`;

const pulseGlow = keyframes`
  0%, 100% { opacity: 0.5; filter: blur(20px); }
  50% { opacity: 0.8; filter: blur(35px); }
`;

const dashMove = keyframes`
  to {
    stroke-dashoffset: -1000;
  }
`;

// --- Styled Components ---

const IllustrationWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  marginBottom: theme.spacing(6),
  "& svg": {
    maxWidth: "100%",
    height: "auto",
  },
}));

const Glow = styled(Box)({
  position: "absolute",
  width: "200px",
  height: "200px",
  background:
    "radial-gradient(circle, rgba(73, 195, 208, 0.2) 0%, rgba(59, 130, 246, 0) 70%)",
  borderRadius: "50%",
  zIndex: -1,
  animation: `${pulseGlow} 4s ease-in-out infinite`,
});

const AnimatedPath = styled("path")({
  strokeDasharray: "8, 8",
  animation: `${dashMove} 30s linear infinite`,
});

const FloatingElement = styled("g")<{ delay?: string }>(({ delay }) => ({
  animation: `${float} 6s ease-in-out infinite`,
  animationDelay: delay || "0s",
}));

/**
 * 404 Illustration Component (Linear Style)
 */
const NotFoundIllustration: React.FC = () => {
  return (
    <IllustrationWrapper>
      <Glow />
      <svg
        width="400"
        height="280"
        viewBox="0 0 400 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Abstract Grid/Field */}
        <path
          d="M50 200 L350 200"
          stroke="#E2E8F0"
          strokeWidth="1"
          opacity="0.5"
        />
        <path
          d="M50 230 L350 230"
          stroke="#E2E8F0"
          strokeWidth="1"
          opacity="0.3"
        />

        {/* Main "404" Text Graphics */}
        <text
          x="50%"
          y="160"
          textAnchor="middle"
          fontSize="120"
          fontWeight="900"
          fill="#F1F5F9"
          style={{ letterSpacing: "-0.05em", fontFamily: "sans-serif" }}
        >
          404
        </text>

        {/* Broken Connection Path */}
        <AnimatedPath
          d="M80 180C120 180 150 120 200 120C250 120 280 180 320 180"
          stroke="#94A3B8"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />

        {/* Floating UI Elements */}
        <FloatingElement delay="0s">
          <rect
            x="280"
            y="40"
            width="60"
            height="40"
            rx="8"
            fill="white"
            stroke="#E2E8F0"
            strokeWidth="1"
          />
          <rect x="290" y="52" width="30" height="4" rx="2" fill="#F1F5F9" />
          <rect x="290" y="62" width="40" height="4" rx="2" fill="#F1F5F9" />
        </FloatingElement>

        <FloatingElement delay="-2s">
          <circle
            cx="80"
            cy="60"
            r="25"
            fill="white"
            stroke="#E2E8F0"
            strokeWidth="1"
          />
          <path
            d="M72 60L88 60M80 52L80 68"
            stroke="#3B82F6"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </FloatingElement>

        <FloatingElement delay="-4s">
          <rect
            x="180"
            y="190"
            width="40"
            height="40"
            rx="20"
            fill="#3B82F6"
            opacity="0.1"
          />
          <circle cx="200" cy="210" r="6" fill="#3B82F6" />
        </FloatingElement>
      </svg>
    </IllustrationWrapper>
  );
};

/**
 * Main Not Found Page Component
 */
const NotFoundPage: React.FC = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        bgcolor: "background.default", // Changed to theme background to support dark mode
        color: "text.primary", // Changed to theme text
      }}
    >
      <Container maxWidth="sm">
        <Box sx={{ textAlign: "center" }}>
          <NotFoundIllustration />

          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontWeight: 800,
              mb: 2,
              letterSpacing: "-0.02em",
              fontSize: { xs: "2rem", sm: "3rem" },
            }}
          >
            Page not found
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              mb: 5,
              fontSize: "1.1rem",
              maxWidth: "460px",
              mx: "auto",
            }}
          >
            The page you are looking for doesn&apos;t exist or has been moved.
            Check the URL or return home.
          </Typography>

          <Button
            variant="text"
            color="inherit"
            sx={{
              px: 4,
              py: 1.2,
              borderRadius: "8px",
              textTransform: "none",
              fontWeight: 600,
              width: 240,
            }}
            startIcon={
              <ArrowLeft
                size={16}
                weight="bold"
                style={{ marginRight: "8px" }}
              />
            }
            onClick={() => window.history.back()}
          >
            Go Back
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default NotFoundPage;
