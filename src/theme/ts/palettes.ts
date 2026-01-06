import { PaletteOptions } from "@mui/material";
import {
  error,
  info,
  neutral,
  primary,
  secondary,
  success,
  warning,
} from "./colors";

export const lightPalette: PaletteOptions = {
  mode: "light",
  primary: {
    main: primary[600],
    light: primary[50],
    dark: primary[800],
    contrastText: "#ffffff",
  },
  secondary: {
    main: secondary[500],
    light: secondary[100],
    dark: secondary[700],
    contrastText: "#ffffff",
  },
  background: {
    default: neutral[50], // neutral-50
    paper: "#ffffff",
  },
  text: {
    primary: neutral[900], // neutral-900
    secondary: neutral[500], // neutral-500
    disabled: neutral[300], // neutral-300
  },
  error,
  warning,
  info,
  success,
  divider: neutral[200], // neutral-200
};

export const darkPalette: PaletteOptions = {
  mode: "dark",
  primary: {
    main: primary[500], // Brighter for dark mode
    light: primary[200],
    dark: primary[800],
    contrastText: "#000000",
  },
  secondary: {
    main: secondary[400],
    light: secondary[100],
    dark: secondary[700],
    contrastText: "#000000",
  },
  background: {
    default: neutral[950], // Very dark
    paper: neutral[900], // Slightly lighter
  },
  text: {
    primary: neutral[50], // neutral-50
    secondary: neutral[300], // neutral-300
    disabled: neutral[600],
  },
  error,
  warning,
  info,
  success,
  divider: neutral[800], // neutral-800
};
