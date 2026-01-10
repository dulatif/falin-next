import { Container, Stack, Typography } from "@mui/material";
import { Suspense } from "react";
import { RichTextEditorBasicDemo } from "@/ui/design-system/rich-text-editor";

export default function RichTextEditorPage() {
  return (
    <Container sx={{ p: 4 }} maxWidth="xl">
      <Stack spacing={4}>
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
