// ========================================
// TypeScript Color Definitions
// ========================================
// IMPORTANT: These use hardcoded hex values because MUI theme
// does NOT support CSS variables like "var(--color-500)".
//
// For SCSS files, use the CSS variables defined in:
// - src/theme/scss/colors.scss (which maps to globals.css)
//
// This dual approach allows:
// - MUI components: Use these hardcoded theme values
// - SCSS components: Use CSS variables for runtime theme switching

export const neutral = {
  25: "#fcfcfd",
  50: "#f9fafb",
  100: "#f2f4f7",
  200: "#eaecf0",
  300: "#d0d5dd",
  400: "#98a2b3",
  500: "#667085",
  600: "#475467",
  700: "#344054",
  800: "#1d2939",
  900: "#101828",
  950: "#0c111d",
};

export const primary = {
  25: "#effffa",
  50: "#e9fff8",
  100: "#e0fef4",
  200: "#c2fdef",
  300: "#a3fbed",
  400: "#8bf7f0",
  500: "#65f1f3",
  600: "#49c3d0",
  700: "#3297ae",
  800: "#206f8c",
  900: "#135174",
};

export const secondary = {
  25: "#fff9f7",
  50: "#fff5f1",
  100: "#feefea",
  200: "#fedcd6",
  300: "#fec5c2",
  400: "#fdb2b5",
  500: "#fc99a6",
  600: "#d86f87",
  700: "#b54d6e",
  800: "#923058",
  900: "#781d4b",
};

export const success = {
  25: "#fbffe1",
  50: "#fafcf1",
  100: "#f5fccc",
  200: "#e8f99b",
  300: "#d2ed66",
  400: "#b8db40",
  500: "#96c40b",
  600: "#7ca808",
  700: "#648d05",
  800: "#4d7103",
  900: "#3d5e02",
};

export const info = {
  25: "#f3f4ff",
  50: "#ebeeff",
  100: "#dee2ff",
  200: "#bec5ff",
  300: "#9ea7ff",
  400: "#8691ff",
  500: "#606af0",
  600: "#444fdb",
  700: "#2f38b7",
  800: "#1d2493",
  900: "#12167a",
};

export const warning = {
  25: "#fffdf3",
  50: "#fffbe8",
  100: "#fff7cc",
  200: "#ffec99",
  300: "#ffde66",
  400: "#ffd13f",
  500: "#ffbb00",
  600: "#db9a00",
  700: "#b77c00",
  800: "#936000",
  900: "#7a4c00",
};

export const error = {
  25: "#fff9f5",
  50: "#fff3ea",
  100: "#ffe9d9",
  200: "#ffcdb4",
  300: "#ffac8e",
  400: "#ff8c72",
  500: "#ff5744",
  600: "#db3531",
  700: "#b7222b",
  800: "#931527",
  900: "#7a0d25",
};

// Alias for backwards compatibility
export const danger = error;

// ========================================
// Mode-Aware Color Factory Function
// ========================================
// This function returns colors that adapt to the current theme mode
// Usage: const colors = getColors(theme.palette.mode);
//        colors.neutral[100] will be light in light mode, dark in dark mode

export const getColors = (mode: "light" | "dark") => {
  if (mode === "dark") {
    // Dark mode: inverted neutral colors, adjusted other colors
    return {
      neutral: {
        25: "#0c111d",
        50: "#101828",
        100: "#1d2939",
        200: "#344054",
        300: "#475467",
        400: "#667085",
        500: "#98a2b3",
        600: "#d0d5dd",
        700: "#eaecf0",
        800: "#f2f4f7",
        900: "#f9fafb",
        950: "#fcfcfd",
      },
      primary: {
        25: "#0c1e21",
        50: "#0f2a30",
        100: "#1a3d47",
        200: "#2d5a68",
        300: "#43788a",
        400: "#5c97ab",
        500: "#75b6cc",
        600: "#8fd4ee",
        700: "#abe3f7",
        800: "#c7eefb",
        900: "#e3f8fd",
      },
      secondary: {
        25: "#2b1618",
        50: "#3d1f23",
        100: "#5a2d34",
        200: "#7d3d49",
        300: "#a15562",
        400: "#c5707e",
        500: "#e98e9d",
        600: "#f3abb8",
        700: "#f7c5cf",
        800: "#fbdde4",
        900: "#fef2f5",
      },
      success: {
        25: "#1a1f0d",
        50: "#242b11",
        100: "#374119",
        200: "#4e5c24",
        300: "#6a7c32",
        400: "#899d43",
        500: "#abc157",
        600: "#c8de75",
        700: "#daea9b",
        800: "#e9f3bd",
        900: "#f5fae0",
      },
      info: {
        25: "#0f1129",
        50: "#15183d",
        100: "#1f2359",
        200: "#2e3479",
        300: "#424b9d",
        400: "#5b66c4",
        500: "#7885ea",
        600: "#99a4f5",
        700: "#b4bdf8",
        800: "#ced5fb",
        900: "#e7eafd",
      },
      warning: {
        25: "#2b2109",
        50: "#3d2f0d",
        100: "#5a4513",
        200: "#7d611c",
        300: "#a58328",
        400: "#d1a937",
        500: "#ffd24a",
        600: "#ffe070",
        700: "#ffea99",
        800: "#fff2bd",
        900: "#fffae0",
      },
      error: {
        25: "#2b0f0f",
        50: "#3d1515",
        100: "#5a1f1f",
        200: "#7d2b2b",
        300: "#a53b3b",
        400: "#d14f4f",
        500: "#ff6868",
        600: "#ff8888",
        700: "#ffabab",
        800: "#ffcccc",
        900: "#ffebeb",
      },
      danger: {
        25: "#2b0f0f",
        50: "#3d1515",
        100: "#5a1f1f",
        200: "#7d2b2b",
        300: "#a53b3b",
        400: "#d14f4f",
        500: "#ff6868",
        600: "#ff8888",
        700: "#ffabab",
        800: "#ffcccc",
        900: "#ffebeb",
      },
    };
  }

  // Light mode: standard colors
  return {
    neutral,
    primary,
    secondary,
    success,
    info,
    warning,
    error,
    danger,
  };
};
