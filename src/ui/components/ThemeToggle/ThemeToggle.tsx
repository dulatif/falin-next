"use client";

import { Button, Tooltip } from "@mui/material";
import { Moon, Sun } from "phosphor-react";
import { useThemeMode } from "@/providers/ThemeContext";

export const ThemeToggle = () => {
  const { mode, toggleTheme } = useThemeMode();

  return (
    <Tooltip
      title={mode === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
    >
      <Button
        data-shape="icon"
        onClick={toggleTheme}
        variant="text"
        color="inherit"
        size="lg"
        sx={{
          svg: {
            width: "24px !important",
            height: "24px !important",
          },
        }}
      >
        {mode === "light" ? (
          <Moon weight="duotone" size={24} />
        ) : (
          <Sun weight="duotone" size={24} />
        )}
      </Button>
    </Tooltip>
  );
};
