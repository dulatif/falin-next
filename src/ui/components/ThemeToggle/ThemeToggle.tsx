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
        size="md"
        sx={{
          svg: {
            width: "20px !important",
            height: "20px !important",
          },
        }}
      >
        {mode === "light" ? (
          <Moon weight="duotone" size={20} />
        ) : (
          <Sun weight="duotone" size={20} />
        )}
      </Button>
    </Tooltip>
  );
};
