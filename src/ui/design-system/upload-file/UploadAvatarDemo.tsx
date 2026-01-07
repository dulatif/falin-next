"use client";

import { Avatar, Box, Paper, Stack, Typography } from "@mui/material";
import { Camera, User } from "phosphor-react";
import { useRef, useState } from "react";

export default function UploadAvatarDemo() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleUploadClick = () => {
    inputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const objectUrl = URL.createObjectURL(file);
      setPreview(objectUrl);
    }
  };

  return (
    <Stack spacing={2}>
      <Typography variant="subtitle2" color="text.secondary">
        Avatar upload with hover effect and preview.
      </Typography>

      <Paper elevation={0} sx={{ p: 4, border: 1, borderColor: "divider", borderRadius: 2 }}>
        <input
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            ref={inputRef}
            onChange={handleFileChange}
        />
        <Box
            sx={{
                position: "relative",
                width: 100,
                height: 100,
                borderRadius: "50%",
                cursor: "pointer",
                overflow: "hidden",
                "&:hover .overlay": { opacity: 1 }
            }}
            onClick={handleUploadClick}
        >
            <Avatar
                src={preview || ""}
                sx={{ width: "100%", height: "100%", bgcolor: "action.hover" }}
            >
                {!preview && <User size={48} />}
            </Avatar>

            <Box
                className="overlay"
                sx={{
                    position: "absolute",
                    inset: 0,
                    bgcolor: "rgba(0,0,0,0.5)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    opacity: 0,
                    transition: "opacity 0.2s",
                    color: "white"
                }}
            >
                <Camera size={24} weight="bold" />
            </Box>
        </Box>
      </Paper>
    </Stack>
  );
}
