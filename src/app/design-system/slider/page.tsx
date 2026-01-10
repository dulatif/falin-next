import { Container, Divider, Stack, Typography } from "@mui/material";
import {
  SliderAutoplayDemo,
  SliderBannerDemo,
  SliderBasicDemo,
  SliderProductDemo,
} from "@/ui/design-system/slider";

export default function SliderPage() {
  return (
    <Container sx={{ p: 4 }} maxWidth="xl">
      <Stack spacing={4}>
        {/* Basic Slider */}
        <Stack spacing={2}>
          <Typography variant="h6" fontWeight={600}>
            Basic Slider
          </Typography>
          <SliderBasicDemo />
        </Stack>

        <Divider />

        {/* Autoplay Slider */}
        <Stack spacing={2}>
          <Typography variant="h6" fontWeight={600}>
            Autoplay Slider
          </Typography>
          <SliderAutoplayDemo />
        </Stack>

        <Divider />

        {/* Product Slider */}
        <Stack spacing={2}>
          <Typography variant="h6" fontWeight={600}>
            Product Carousel
          </Typography>
          <SliderProductDemo />
        </Stack>

        <Divider />

        {/* Banner Slider */}
        <Stack spacing={2}>
          <Typography variant="h6" fontWeight={600}>
            Hero Banner Carousel
          </Typography>
          <SliderBannerDemo />
        </Stack>
      </Stack>
    </Container>
  );
}
