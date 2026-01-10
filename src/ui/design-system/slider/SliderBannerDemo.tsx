"use client";

import { Box, Button, IconButton, Paper, Stack, Typography } from "@mui/material";
import {alpha} from '@mui/material/styles'
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { CaretLeft, CaretRight, Circle } from "phosphor-react";
import { useCallback, useEffect, useState } from "react";

// # entity
const slides = [
    {
        id: 1,
        title: "Summer Collection 2024",
        subtitle: "Up to 50% Off on Selected Items",
        image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    },
    {
        id: 2,
        title: "New Arrivals",
        subtitle: "Discover the Latest Trends",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    },
     {
        id: 3,
        title: "Exclusive Deal",
        subtitle: "Limited Time Offer",
        image: "https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80",
    },
];

export default function SliderBannerDemo() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <Stack spacing={2}>
      <Typography variant="subtitle2" color="text.secondary">
        Full-width banner carousel with navigation controls.
      </Typography>

      <Paper elevation={0} sx={{ p: 0, border: 1, borderColor: "divider", borderRadius: 2, overflow: "hidden", position: 'relative' }}>
         <Box sx={{ overflow: "hidden" }} ref={emblaRef}>
            <Box sx={{ display: "flex" }}>
                {slides.map((slide) => (
                    <Box
                        key={slide.id}
                        sx={{
                            flex: "0 0 100%",
                            minWidth: 0,
                            position: "relative",
                            height: 400,
                        }}
                    >
                       <img
                            src={slide.image}
                            alt={slide.title}
                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                        <Box
                            sx={{
                                position: "absolute",
                                inset: 0,
                                bgcolor: alpha("#000", 0.3),
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                textAlign: "center",
                                color: "white",
                                p: 4
                            }}
                        >
                            <Typography variant="h3" fontWeight={800} gutterBottom sx={{ textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}>
                                {slide.title}
                            </Typography>
                             <Typography variant="h6" gutterBottom sx={{ mb: 3, textShadow: "0 1px 2px rgba(0,0,0,0.5)" }}>
                                {slide.subtitle}
                            </Typography>
                            <Button variant="contained" size="lg" color="primary">
                                Shop Now
                            </Button>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>

        {/* Arrows */}
        <IconButton
            onClick={scrollPrev}
            sx={{
                position: 'absolute',
                left: 16,
                top: '50%',
                transform: 'translateY(-50%)',
                bgcolor: 'rgba(255,255,255,0.8)',
                '&:hover': { bgcolor: 'white' }
            }}
        >
            <CaretLeft />
        </IconButton>
         <IconButton
            onClick={scrollNext}
            sx={{
                position: 'absolute',
                right: 16,
                top: '50%',
                transform: 'translateY(-50%)',
                bgcolor: 'rgba(255,255,255,0.8)',
                '&:hover': { bgcolor: 'white' }
            }}
        >
            <CaretRight />
        </IconButton>

        {/* Dots */}
        <Stack
            direction="row"
            spacing={1}
            sx={{
                position: 'absolute',
                bottom: 16,
                left: '50%',
                transform: 'translateX(-50%)'
            }}
        >
            {scrollSnaps.map((_, index) => (
                 <IconButton
                    key={index}
                    size="sm"
                    onClick={() => scrollTo(index)}
                    sx={{
                        p: 0,
                        opacity: index === selectedIndex ? 1 : 0.5,
                        transition: 'opacity 0.2s',
                        color: 'white'
                    }}
                 >
                    <Circle weight="fill" size={12} />
                 </IconButton>
            ))}
        </Stack>

      </Paper>
    </Stack>
  );
}
