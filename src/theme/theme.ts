import { createTheme } from "@mui/material/styles";
import { createComponents } from "./ts/components";
import { darkPalette, lightPalette } from "./ts/palettes";
import { shadowsArray } from "./ts/shadows";
import { typography } from "./ts/typography";

export const createAppTheme = (mode: "light" | "dark") => {
  return createTheme({
    palette: mode === "light" ? lightPalette : darkPalette,
    typography,
    components: createComponents(mode),
    spacing: 8,
    shape: {
      borderRadius: 8,
    },
    shadows: shadowsArray,
  });
};

// Keep a default theme for static contexts if needed
export const theme = createAppTheme("light");
