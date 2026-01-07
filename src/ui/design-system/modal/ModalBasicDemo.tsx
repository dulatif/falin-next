"use client";

import { Button, Paper, Stack, Typography } from "@mui/material";
import { Info } from "phosphor-react";
import { useState } from "react";
import { Modal } from "@/ui/layouts/Modal";

// # components
export default function ModalBasicDemo() {
  const [openBasic, setOpenBasic] = useState(false);
  const [openDivider, setOpenDivider] = useState(false);

  return (
    <Stack spacing={2}>
      <Typography variant="subtitle2" color="text.secondary">
        Standard modal using the layout components.
      </Typography>

      <Paper
        elevation={0}
        sx={{ p: 4, border: 1, borderColor: "divider", borderRadius: 2 }}
      >
        <Stack direction="row" spacing={2}>
          <Button variant="contained" onClick={() => setOpenBasic(true)}>
            Basic Modal
          </Button>
          <Button variant="outlined" onClick={() => setOpenDivider(true)}>
            With Divider
          </Button>
        </Stack>

        {/* Basic Modal */}
        <Modal open={openBasic} onClose={() => setOpenBasic(false)}>
          <Modal.Header
            title="Terms of Service"
            subtitle="Please read carefully"
          />
          <Modal.Body>
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              non urna erot. Suspendisse potenti. Vivamus eget mi eu purus
              blandit ullamcorper. Nunc scelerisque dui non nulla efficitur, ut
              egestas ante fringilla.
            </Typography>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="outlined"
              color="inherit"
              onClick={() => setOpenBasic(false)}
            >
              Cancel
            </Button>
            <Button variant="contained" onClick={() => setOpenBasic(false)}>
              I Agree
            </Button>
          </Modal.Footer>
        </Modal>

        {/* With Divider */}
        <Modal open={openDivider} onClose={() => setOpenDivider(false)}>
          <Modal.Header title="Confirmation" subtitle="Are you sure?" divider />
          <Modal.Body>
            <Typography variant="body2" color="text.secondary">
              You are about to modify the system settings. This action cannot be
              undone lightly. Please confirm your choice below.
            </Typography>
          </Modal.Body>
          <Modal.Footer divider>
            <Button
              variant="text"
              color="inherit"
              onClick={() => setOpenDivider(false)}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              color="warning"
              onClick={() => setOpenDivider(false)}
            >
              Confirm
            </Button>
          </Modal.Footer>
        </Modal>
      </Paper>
    </Stack>
  );
}
