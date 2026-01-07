import { Container, Divider, Stack, Typography } from "@mui/material";
import {
  AvatarGroupDemo,
  AvatarIconDemo,
  AvatarImageDemo,
  AvatarLetterDemo,
} from "@/ui/design-system/avatar";

export default function AvatarPage() {
  return (
    <Container sx={{ p: 4 }} maxWidth="xl">
      <Stack spacing={4}>
        {/* Page Header */}
        <Stack spacing={1}>
          <Typography variant="h4" fontWeight={700} gutterBottom>
            Avatar
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Avatars are found throughout material design with uses in everything
            from tables to dialog menus.
          </Typography>
        </Stack>

        <Divider />

        {/* Image Avatars */}
        <Stack spacing={2}>
          <Typography variant="h6" fontWeight={600}>
            Image Avatars
          </Typography>
          <AvatarImageDemo />
        </Stack>

        <Divider />

        {/* Letter Avatars */}
        <Stack spacing={2}>
          <Typography variant="h6" fontWeight={600}>
            Letter Avatars
          </Typography>
          <AvatarLetterDemo />
        </Stack>

        <Divider />

        {/* Icon Avatars */}
        <Stack spacing={2}>
          <Typography variant="h6" fontWeight={600}>
            Icon Avatars
          </Typography>
          <AvatarIconDemo />
        </Stack>

        <Divider />

        {/* Grouped Avatars */}
        <Stack spacing={2}>
          <Typography variant="h6" fontWeight={600}>
            Grouped
          </Typography>
          <AvatarGroupDemo />
        </Stack>
      </Stack>
    </Container>
  );
}
