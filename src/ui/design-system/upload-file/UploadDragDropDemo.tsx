"use client";

import { Paper, Stack, Typography } from "@mui/material";
import { useState } from "react";
import UploadFile from "@/ui/components/UploadFile";

export default function UploadDragDropDemo() {
  const [file, setFile] = useState<File | null>(null);

  return (
    <Stack spacing={2}>
      <Typography variant="subtitle2" color="text.secondary">
        Standard drag and drop zone (using existing <code>UploadFile</code> component).
      </Typography>

      <Paper elevation={0} sx={{ p: 4, border: 1, borderColor: "divider", borderRadius: 2 }}>
        <UploadFile
            onChange={setFile}
            value={file || undefined}
            placeholder="Support: JPG, PNG, PDF"
        />
      </Paper>
    </Stack>
  );
}
