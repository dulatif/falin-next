"use client";

import UploadFile from "@/ui/components/UploadFile";
import { Button, Card, CardContent, Paper, Stack, Typography } from "@mui/material";
import { useState } from "react";

export default function UploadCardDemo() {
  const [file, setFile] = useState<File | null>(null);

  // Example of using the same logic but wrapped in a Card UI context
  return (
    <Stack spacing={2}>
      <Typography variant="subtitle2" color="text.secondary">
        Upload component embedded within a Card.
      </Typography>

      <Paper elevation={0} sx={{ p: 4, border: 1, borderColor: "divider", borderRadius: 2, bgcolor: "background.default" }}>
         <Card sx={{ maxWidth: 400, mx: "auto" }}>
            <CardContent>
                <Typography variant="h6" gutterBottom fontWeight={700}>
                    Update Profile Picture
                </Typography>
                <Typography variant="body2" color="text.secondary" mb={2}>
                    Upload a new photo for your profile. Supported formats: JPG, PNG.
                </Typography>

                <UploadFile
                    onChange={setFile}
                    value={file || undefined}
                    height={180}
                />

                <Stack direction="row" justifyContent="flex-end" spacing={1} mt={2}>
                    <Button variant="outlined" color="inherit">Cancel</Button>
                    <Button variant="contained">Save Changes</Button>
                </Stack>
            </CardContent>
         </Card>
      </Paper>
    </Stack>
  );
}
