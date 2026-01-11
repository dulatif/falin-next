"use client";

import { alpha, Box, Typography, useTheme } from "@mui/material";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { type MouseEvent, useCallback } from "react";

interface LinearCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export function LinearCard({ title, description, icon }: LinearCardProps) {
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
      onMouseMove={handleMouseMove}
      className="card"
      sx={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 3,
        bgcolor: alpha(theme.palette.background.paper, 0.05),
        border: `1px solid ${alpha(theme.palette.common.white, 0.08)}`,
        backdropFilter: "blur(10px)",
        p: 4,
        height: "100%",
        transition: "transform 0.2s",
        "&:hover": {
          transform: "translateY(-2px)",
        },
      }}
    >
      {/* Flashlight Effect */}
      <motion.div
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              ${alpha(theme.palette.primary.main, 0.15)},
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

      {/* Content */}
      <Box sx={{ position: "relative", zIndex: 10 }}>
        {icon && (
          <Box
            sx={{
              display: "inline-flex",
              p: 1.5,
              borderRadius: 2,
              bgcolor: alpha(theme.palette.primary.main, 0.1),
              color: theme.palette.primary.main,
              mb: 3,
            }}
          >
            {icon}
          </Box>
        )}
        <Typography variant="h5" fontWeight="600" gutterBottom>
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
