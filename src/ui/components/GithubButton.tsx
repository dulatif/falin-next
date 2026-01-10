"use client";

import { Button } from "@mui/material";
import { GithubLogo } from "phosphor-react";

export default function GithubButton() {
  return (
    <Button
      variant="text"
      size="lg"
      color="inherit"
      startIcon={<GithubLogo />}
      onClick={() => window.open("https://github.com/", "_blank")}
    >
      GitHub
    </Button>
  );
}
