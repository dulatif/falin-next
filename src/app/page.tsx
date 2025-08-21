"use client";
import Image from "next/image";
import { Box, Stack, SxProps, Button, Typography } from "@mui/material";
import { GitBranch, FileSearch } from "phosphor-react";
import Link from "next/link";
import { primary } from "@/theme/ts/colors";

const styles: { container: SxProps; icon: SxProps; button: SxProps } = {
  container: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    gap: "100px",
    justifyContent: "center",
    alignItems: "center",
    background: `linear-gradient(180deg, #ffffff 45.16%, ${primary[100]} 131.72%)`,
  },
  icon: {
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "160px",
    height: "160px",
    "& img": { height: "100%" },
  },
  button: {
    width: "200px",
  },
};

export default function Home() {
  return (
    <Box sx={styles.container}>
      <Stack direction="row" spacing={10}>
        <Box
          sx={{
            ...styles.icon,
          }}
        >
          <Image
            src="https://logospng.org/download/vite-js/vite-js-4096-logo.png"
            alt="Vite.js Logo"
            width={160}
            height={160}
            style={{ height: "100%" }}
          />
        </Box>
        <Box
          sx={{
            borderRadius: "50%",
            ...styles.icon,
          }}
        >
          <Image
            src="https://cdn.iconscout.com/icon/free/png-256/free-react-1-282599.png?f=webp"
            alt="React Logo"
            width={160}
            height={160}
            style={{ height: "100%" }}
          />
        </Box>
        <Box
          sx={{
            ...styles.icon,
          }}
        >
          <Image
            src="https://falin.netlify.app/favicon.svg"
            alt="Falin Logo"
            width={160}
            height={160}
            style={{ height: "100%" }}
          />
        </Box>
      </Stack>
      <Box>
        <Typography variant="h3" fontWeight={"semiBold"}>
          Falin UI
        </Typography>
      </Box>
      <Stack direction="row" spacing={4}>
        <Link href="/design-system/home">
          <Button
            size="xl"
            sx={styles.button}
            startIcon={<FileSearch size={26} weight="regular" />}
          >
            Documentation
          </Button>
        </Link>
        <a
          href="https://github.com/BJ-stack-art/falin"
          target="_blank"
          rel="noreferrer"
        >
          <Button
            size="xl"
            sx={styles.button}
            color="inherit"
            startIcon={<GitBranch size={26} weight="regular" />}
          >
            Github
          </Button>
        </a>
      </Stack>
    </Box>
  );
}
