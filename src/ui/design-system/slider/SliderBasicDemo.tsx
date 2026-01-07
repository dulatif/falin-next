"use client";

import { Box, Paper, Stack, Typography } from "@mui/material";
import useEmblaCarousel from "embla-carousel-react";

// # components
function Slide({ index }: { index: number }) {
    return (
        <Box
            sx={{
                flex: "0 0 100%",
                minWidth: 0,
                height: 200,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: index % 2 === 0 ? "primary.light" : "secondary.light",
                color: index % 2 === 0 ? "primary.contrastText" : "secondary.contrastText",
                borderRadius: 2,
                fontSize: "2rem",
                fontWeight: 600,
            }}
        >
            Slide {index + 1}
        </Box>
    )
}

export default function SliderBasicDemo() {
  const [emblaRef] = useEmblaCarousel();

  return (
    <Stack spacing={2}>
      <Typography variant="subtitle2" color="text.secondary">
        Basic drag-to-scroll carousel.
      </Typography>

      <Paper elevation={0} sx={{ p: 4, border: 1, borderColor: "divider", borderRadius: 2 }}>
        <Box sx={{ overflow: "hidden" }} ref={emblaRef}>
            <Box sx={{ display: "flex", gap: 2 }}>
                {[0, 1, 2, 3, 4].map((index) => (
                    <Slide key={index} index={index} />
                ))}
            </Box>
        </Box>
      </Paper>
    </Stack>
  );
}
