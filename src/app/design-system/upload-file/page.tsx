import { Container, Divider, Stack, Typography } from "@mui/material";
import {
  UploadAvatarDemo,
  UploadButtonDemo,
  UploadCardDemo,
  UploadDragDropDemo,
  UploadPictureWallDemo,
} from "@/ui/design-system/upload-file";

export default function UploadFilePage() {
  return (
    <Container sx={{ p: 4 }} maxWidth="xl">
      <Stack spacing={4}>
        {/* Page Header */}
        <Stack spacing={1}>
          <Typography variant="h4" fontWeight={700} gutterBottom>
            Upload File
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Various methods for uploading files, from simple buttons to complex picture walls.
          </Typography>
        </Stack>

        <Divider />

        {/* Drag & Drop */}
        <Stack spacing={2}>
          <Typography variant="h6" fontWeight={600}>
            Drag & Drop
          </Typography>
          <UploadDragDropDemo />
        </Stack>

        <Divider />

        {/* Upload Button */}
        <Stack spacing={2}>
          <Typography variant="h6" fontWeight={600}>
            Upload by Click
          </Typography>
          <UploadButtonDemo />
        </Stack>

        <Divider />

        {/* Upload Avatar */}
        <Stack spacing={2}>
          <Typography variant="h6" fontWeight={600}>
            Avatar Upload
          </Typography>
          <UploadAvatarDemo />
        </Stack>

        <Divider />

        {/* Picture Wall */}
        <Stack spacing={2}>
          <Typography variant="h6" fontWeight={600}>
            Picture Wall
          </Typography>
           <Typography variant="body2" color="text.secondary">
            Multiple image upload with preview and delete actions.
          </Typography>
          <UploadPictureWallDemo />
        </Stack>

        <Divider />

         {/* Card Upload */}
         <Stack spacing={2}>
          <Typography variant="h6" fontWeight={600}>
            Card Upload
          </Typography>
          <UploadCardDemo />
        </Stack>

      </Stack>
    </Container>
  );
}
