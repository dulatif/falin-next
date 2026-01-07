"use client";

import { Button, Paper, Stack, Typography } from "@mui/material";
import { CheckCircle, Trash, UploadSimple } from "phosphor-react";
import { useState } from "react";
import { Modal } from "@/ui/layouts/Modal";

// # components
export default function ModalIconDemo() {
  const [showContained, setShowContained] = useState(false);
  const [showOutlined, setShowOutlined] = useState(false);
  const [showSimple, setShowSimple] = useState(false);

  return (
    <Stack spacing={2}>
      <Typography variant="subtitle2" color="text.secondary">
        Modals with icons in the header, either contained, outlined, or
        standalone.
      </Typography>

      <Paper
        elevation={0}
        sx={{ p: 4, border: 1, borderColor: "divider", borderRadius: 2 }}
      >
        <Stack
          direction="row"
          spacing={2}
          flexWrap="wrap"
          useFlexGap
          sx={{ gap: 2 }}
        >
          <Button
            variant="contained"
            color="success"
            onClick={() => setShowContained(true)}
          >
            Contained Icon
          </Button>
          <Button variant="outlined" onClick={() => setShowOutlined(true)}>
            Outlined Icon
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={() => setShowSimple(true)}
          >
            No Title (Simple)
          </Button>
        </Stack>

        {/* Contained Icon */}
        <Modal
          open={showContained}
          onClose={() => setShowContained(false)}
          containerProps={{ sx: { maxWidth: "540px !important" } }}
        >
          <Modal.Header
            title="Success"
            subtitle="Operation completed successfully"
            icon={{
              icon: <CheckCircle weight="bold" />,
              color: "success",
              variant: "contained",
            }}
          />
          <Modal.Body>
            <Typography>
              Your data has been saved to the server. You can now close this
              window safely.
            </Typography>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="contained"
              color="success"
              onClick={() => setShowContained(false)}
            >
              Great!
            </Button>
          </Modal.Footer>
        </Modal>

        {/* Outlined Icon */}
        <Modal
          open={showOutlined}
          onClose={() => setShowOutlined(false)}
          containerProps={{ sx: { maxWidth: "540px !important" } }}
        >
          <Modal.Header
            title="Upload File"
            subtitle="Select a file to upload"
            divider
            icon={{
              icon: <UploadSimple weight="bold" />,
              variant: "outlined",
              color: "neutral", // Using neutral or default color
            }}
          />
          <Modal.Body>
            <Typography variant="body2" color="text.secondary">
              Drag and drop your files here or click to browse. Supported
              formats: .jpg, .png.
            </Typography>
          </Modal.Body>
          <Modal.Footer divider onCancel={() => setShowOutlined(false)}>
            <Button variant="contained">Upload</Button>
          </Modal.Footer>
        </Modal>

        {/* Simple (No Title) */}
        <Modal
          containerProps={{ sx: { maxWidth: "400px !important" } }}
          open={showSimple}
          onClose={() => setShowSimple(false)}
        >
          <Modal.Header
            icon={{
              icon: <Trash weight="bold" />,
              color: "error",
              variant: "contained",
            }}
          />
          <Modal.Body>
            <Typography variant="h6" fontWeight={700} gutterBottom>
              Delete Item?
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Are you sure you want to delete this item? This action is
              irreversible.
            </Typography>
          </Modal.Body>
          <Modal.Footer onCancel={() => setShowSimple(false)}>
            <Button
              variant="contained"
              color="error"
              onClick={() => setShowSimple(false)}
            >
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </Paper>
    </Stack>
  );
}
