"use client";

import { Paper, Stack, Typography } from "@mui/material";
import { useState } from "react";
import RichTextEditor from "@/ui/components/RichTextEditor";

// # components
export default function RichTextEditorBasicDemo() {
  const [content, setContent] = useState("<p>Hello World! <strong>This is bold</strong> and <em>this is italic</em>.</p>");

  return (
    <Stack spacing={2}>
      <Typography variant="subtitle2" color="text.secondary">
        A fully functional WYSIWYG editor powered by Tiptap.
      </Typography>

      <RichTextEditor
        content={content}
        onChange={setContent}
        placeholder="Type something amazing..."
      />

      <Typography variant="subtitle2" fontWeight={600} mt={2}>
        Output HTML:
      </Typography>
      <Paper sx={{ p: 2, bgcolor: "action.hover", fontFamily: "monospace", fontSize: 12 }}>
        {content}
      </Paper>
    </Stack>
  );
}
