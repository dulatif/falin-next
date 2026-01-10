import { Container, Divider, Stack, Typography } from "@mui/material";
import { Suspense } from "react";
import { RichTextEditorBasicDemo } from "@/ui/design-system/rich-text-editor";

export default function RichTextEditorPage() {
  return (
    <Container sx={{ p: 4 }} maxWidth="xl">
      <Stack spacing={4}>
        {/* Page Header */}
        <Stack spacing={1}>
          <Typography variant="h4" fontWeight={700} gutterBottom>
            Rich Text Editor
          </Typography>
          <Typography variant="body1" color="text.secondary">
            A headless, framework-agnostic text editor framework for the web
            (Tiptap).
          </Typography>
        </Stack>

        <Divider />

        {/* Basic Editor */}
        <Stack spacing={2}>
          <Typography variant="h6" fontWeight={600}>
            Basic Editor
          </Typography>
          <Suspense fallback={<div>Loading editor...</div>}>
            <RichTextEditorBasicDemo />
          </Suspense>
        </Stack>
      </Stack>
    </Container>
  );
}
