import { Container, Divider, Stack, Typography } from "@mui/material";
import { MapWorldDemo } from "@/ui/design-system/map";

export default function MapPage() {
  return (
    <Container sx={{ p: 4 }} maxWidth="xl">
      <Stack spacing={4}>
        {/* World Map */}
        <Stack spacing={2}>
          <Typography variant="h6" fontWeight={600}>
            World Map
          </Typography>
          <Typography variant="body2" color="text.secondary">
            A simple world map visualization using{" "}
            <code>react-simple-maps</code>.
          </Typography>
          <MapWorldDemo />
        </Stack>
      </Stack>
    </Container>
  );
}
