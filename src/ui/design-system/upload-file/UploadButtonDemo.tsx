"use client";

import {
  Box,
  Button,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { File as FileIcon, FilePdf, Trash, UploadSimple } from "phosphor-react";
import { useRef, useState } from "react";

export default function UploadButtonDemo() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<File[]>([]);

  const handleUploadClick = () => {
    inputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files);
      setFiles((prev) => [...prev, ...newFiles]);
    }
    // Reset input so the same file can be selected again if needed
    if (inputRef.current) inputRef.current.value = "";
  };

  const handleDelete = (indexToDelete: number) => {
    setFiles((prev) => prev.filter((_, index) => index !== indexToDelete));
  };

  return (
    <Stack spacing={2}>
      <Typography variant="subtitle2" color="text.secondary">
        Simple button click to upload multiple files with preview.
      </Typography>

      <Paper
        elevation={0}
        sx={{ p: 4, border: 1, borderColor: "divider", borderRadius: 2 }}
      >
        <input
          type="file"
          multiple
          style={{ display: "none" }}
          ref={inputRef}
          onChange={handleFileChange}
        />

        <Stack spacing={3} alignItems="flex-start">
          <Button
            variant="outlined"
            startIcon={<UploadSimple weight="bold" />}
            onClick={handleUploadClick}
          >
            Click to Upload
          </Button>

          <Stack spacing={2} sx={{ width: "100%", maxWidth: 500 }}>
            {files.map((file, index) => {
              const isImage = file.type.startsWith("image/");
              const preview = isImage ? URL.createObjectURL(file) : null;

              return (
                <Paper
                  key={`${file.name}-${index}`}
                  variant="outlined"
                  sx={{ p: 2, display: "flex", alignItems: "center", gap: 2 }}
                >
                  {/* Preview / Icon */}
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: 1,
                      overflow: "hidden",
                      bgcolor: "action.hover",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      color: "text.secondary",
                    }}
                  >
                    {isImage && preview ? (
                      <img
                        src={preview}
                        alt="preview"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    ) : file.type === "application/pdf" ? (
                      <FilePdf size={32} weight="duotone" />
                    ) : (
                      <FileIcon size={32} weight="duotone" />
                    )}
                  </Box>

                  {/* Meta */}
                  <Box sx={{ flexGrow: 1, minWidth: 0 }}>
                    <Typography variant="subtitle2" noWrap>
                      {file.name}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {(file.size / 1024).toFixed(2)} KB
                    </Typography>
                  </Box>

                  {/* Action */}
                  <IconButton
                    size="sm"
                    color="error"
                    onClick={() => handleDelete(index)}
                  >
                    <Trash />
                  </IconButton>
                </Paper>
              );
            })}
          </Stack>
        </Stack>
      </Paper>
    </Stack>
  );
}
