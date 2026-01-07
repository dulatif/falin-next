"use client";

import { Box, Paper, Stack, Typography } from "@mui/material";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

// # components
function Slide({ index }: { index: number }) {
    return (
        <Box
            sx={{
                flex: "0 0 100%",
                minWidth: 0,
                height: 300,
                position: "relative",
                borderRadius: 2,
                overflow: "hidden"
            }}
        >
           <img
             src={`https://picsum.photos/800/400?random=${index}`}
             alt={`Slide ${index}`}
             style={{ width: "100%", height: "100%", objectFit: "cover" }}
           />
           <Box
             sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                p: 2,
                bgcolor: "rgba(0,0,0,0.5)",
                color: "white"
             }}
           >
                <Typography variant="h6">Featured Image {index + 1}</Typography>
           </Box>
        </Box>
    )
}

export default function SliderAutoplayDemo() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 3000 })]);

  return (
    <Stack spacing={2}>
      <Typography variant="subtitle2" color="text.secondary">
        Carousel with Autoplay and Loop enabled.
      </Typography>

      <Paper elevation={0} sx={{ p: 4, border: 1, borderColor: "divider", borderRadius: 2 }}>
        <Box sx={{ overflow: "hidden" }} ref={emblaRef}>
            <Box sx={{ display: "flex" }}>
                {[0, 1, 2, 3].map((index) => (
                    <Slide key={index} index={index} />
                ))}
            </Box>
        </Box>
      </Paper>
    </Stack>
  );
}
