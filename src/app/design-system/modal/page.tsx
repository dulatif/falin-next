import { Container, Divider, Stack, Typography } from "@mui/material";
import {
  ModalBasicDemo,
  ModalErrorDemo,
  ModalIconDemo,
} from "@/ui/design-system/modal";

export default function ModalPage() {
  return (
    <Container sx={{ p: 4 }} maxWidth="xl">
      <Stack spacing={4}>
        {/* Basic (Custom Layout) */}
        <Stack spacing={2}>
          <Typography variant="h6" fontWeight={600}>
            Basic Modal
          </Typography>
          <ModalBasicDemo />
        </Stack>

        <Divider />

        {/* Icon Modal */}
        <Stack spacing={2}>
          <Typography variant="h6" fontWeight={600}>
            Icon Variants
          </Typography>
          <ModalIconDemo />
        </Stack>

        <Divider />

        {/* Error Modal */}
        <Stack spacing={2}>
          <Typography variant="h6" fontWeight={600}>
            Error Modal
          </Typography>
          <ModalErrorDemo />
        </Stack>
      </Stack>
    </Container>
  );
}
