"use client";

import { Box, Dialog, IconButton, Paper, Stack, Typography } from "@mui/material";
import { Eye, Plus, Trash, X } from "phosphor-react";
import { useRef, useState } from "react";

interface UploadedImage {
    id: string;
    url: string;
    file: File;
}

export default function UploadPictureWallDemo() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [images, setImages] = useState<UploadedImage[]>([]);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const handleUploadClick = () => {
    inputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      const newImages = newFiles.map(file => ({
        id: Math.random().toString(36),
        url: URL.createObjectURL(file),
        file
      }));
      setImages(prev => [...prev, ...newImages]);
    }
    // Reset input
    if(inputRef.current) inputRef.current.value = "";
  };

  const handleRemove = (id: string) => {
    setImages(prev => prev.filter(img => img.id !== id));
  };

  return (
    <Stack spacing={2}>
      <Typography variant="subtitle2" color="text.secondary">
        Multiple image upload (Wall style) using grid layout.
      </Typography>

      <Paper elevation={0} sx={{ p: 4, border: 1, borderColor: "divider", borderRadius: 2 }}>
        <input
            type="file"
            accept="image/*"
            multiple
            style={{ display: "none" }}
            ref={inputRef}
            onChange={handleFileChange}
        />

        <Stack direction="row" flexWrap="wrap" gap={2}>
            {images.map((img) => (
                <Box
                    key={img.id}
                    sx={{
                        width: 100,
                        height: 100,
                        borderRadius: 1,
                        border: 1,
                        borderColor: "divider",
                        position: "relative",
                        overflow: "hidden",
                        "&:hover .actions": { opacity: 1 }
                    }}
                >
                    <img
                        src={img.url}
                        alt="uploaded"
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                    <Stack
                        className="actions"
                        direction="row"
                        alignItems="center"
                        justifyContent="center"
                        spacing={0.5}
                        sx={{
                            position: "absolute",
                            inset: 0,
                            bgcolor: "rgba(0,0,0,0.5)",
                            opacity: 0,
                            transition: "opacity 0.2s"
                        }}
                    >
                        <IconButton size="sm" sx={{ color: "white" }} onClick={() => setPreviewImage(img.url)}>
                            <Eye />
                        </IconButton>
                        <IconButton size="sm" sx={{ color: "white" }} onClick={() => handleRemove(img.id)}>
                            <Trash />
                        </IconButton>
                    </Stack>
                </Box>
            ))}

            {/* Upload Trigger */}
            <Box
                sx={{
                    width: 100,
                    height: 100,
                    borderRadius: 1,
                    border: "1px dashed",
                    borderColor: "text.disabled",
                    bgcolor: "action.hover",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    "&:hover": { borderColor: "primary.main", color: "primary.main" }
                }}
                onClick={handleUploadClick}
            >
                <Plus size={24} />
                <Typography variant="caption" mt={1}>Upload</Typography>
            </Box>
        </Stack>

        {/* Modal Preview */}
        <Dialog open={!!previewImage} onClose={() => setPreviewImage(null)}>
            <Box sx={{ position: "relative", p: 1 }}>
                 <IconButton
                    onClick={() => setPreviewImage(null)}
                    sx={{ position: "absolute", top: 8, right: 8, bgcolor: "rgba(0,0,0,0.5)", color: "white", "&:hover":{bgcolor: "rgba(0,0,0,0.7)"} }}
                 >
                    <X />
                 </IconButton>
                <img src={previewImage || ""} alt="preview" style={{ maxWidth: "100%", maxHeight: "80vh" }} />
            </Box>
        </Dialog>
      </Paper>
    </Stack>
  );
}
