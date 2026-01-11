"use client";

import { alpha, Box, Typography, useTheme } from "@mui/material";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { type MouseEvent, useCallback } from "react";

interface FeatureMainCardProps {
  title: string;
  description: string;
  children: React.ReactNode;
  delay?: number;
}

export function FeatureMainCard({
  title,
  description,
  children,
  delay = 0,
}: FeatureMainCardProps) {
  const theme = useTheme();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = useCallback(
    ({ clientX, clientY, currentTarget }: MouseEvent) => {
      const { left, top } = currentTarget.getBoundingClientRect();
      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    },
    [mouseX, mouseY],
  );

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      onMouseMove={handleMouseMove}
      sx={{
        group: "card",
        position: "relative",
        overflow: "hidden",
        borderRadius: 4,
        bgcolor: alpha(theme.palette.background.paper, 0.03),
        border: `1px solid ${alpha(theme.palette.divider, 0.08)}`,
        backdropFilter: "blur(40px)",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        transition: "border-color 0.3s",
        "&:hover": {
          borderColor: alpha(theme.palette.divider, 0.2),
        },
      }}
    >
      {/* Flashlight Effect */}
      <motion.div
        style={{
          background: useMotionTemplate`
            radial-gradient(
              800px circle at ${mouseX}px ${mouseY}px,
              ${alpha(theme.palette.primary.main, 0.1)},
              transparent 80%
            )
          `,
        }}
        className="absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        sx={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          opacity: 0,
          transition: "opacity 300ms",
          ".card:hover &": {
            opacity: 1,
          },
        }}
      />

      {/* SVG Illustration Container */}
      <Box
        sx={{
          flex: 1,
          minHeight: 240,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          background: `radial-gradient(circle at center, ${alpha(theme.palette.background.paper, 0.2)} 0%, transparent 70%)`,
          p: 4,
        }}
      >
        {children}
      </Box>

      {/* Content */}
      <Box
        sx={{
          p: 4,
          position: "relative",
          zIndex: 10,
          borderTop: `1px solid ${alpha(theme.palette.divider, 0.05)}`,
        }}
      >
        <Typography
          variant="h5"
          fontWeight="bold"
          gutterBottom
          sx={{ fontSize: "1.5rem" }}
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ lineHeight: 1.6 }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
}
