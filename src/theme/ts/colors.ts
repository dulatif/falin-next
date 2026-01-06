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

/* ===================================
   Light Mode Color Scheme
   ===================================
*/

export const neutral = {
  25: "#f9fafb",
  50: "#f8fafc",
  100: "#f1f5f9",
  200: "#e2e8f0",
  300: "#cbd5e1",
  400: "#94a3b8",
  500: "#64748b",
  600: "#475569",
  700: "#334155",
  800: "#1e293b",
  900: "#0f172a",
  950: "#020617",
};

export const primary = {
  25: "#f5f8ff",
  50: "#eff6ff",
  100: "#dbeafe",
  200: "#bfdbfe",
  300: "#93c5fd",
  400: "#60a5fa",
  500: "#3b82f6",
  600: "#2563eb",
  700: "#1d4ed8",
  800: "#1e40af",
  900: "#1e3a8a",
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
  25: "#f6fef9",
  50: "#ecfdf3",
  100: "#d1fadf",
  200: "#a6f4c5",
  300: "#6ce9a6",
  400: "#32d583",
  500: "#12b76a",
  600: "#039855",
  700: "#027a48",
  800: "#05603a",
  900: "#054f31",
};

export const info = {
  25: "#fafeff",
  50: "#f0f9ff",
  100: "#e0f2fe",
  200: "#bae6fd",
  300: "#7dd3fc",
  400: "#38bdf8",
  500: "#0ea5e9",
  600: "#0284c7",
  700: "#0369a1",
  800: "#075985",
  900: "#0c4a6e",
};

export const warning = {
  25: "#fffcf5",
  50: "#fff7ed",
  100: "#ffedd5",
  200: "#fed7aa",
  300: "#fdba74",
  400: "#fb923c",
  500: "#f97316",
  600: "#ea580c",
  700: "#c2410c",
  800: "#9a3412",
  900: "#7c2d12",
};

export const error = {
  25: "#fffbfa",
  50: "#fef2f2",
  100: "#fee2e2",
  200: "#fecaca",
  300: "#fca5a5",
  400: "#f87171",
  500: "#ef4444",
  600: "#dc2626",
  700: "#b91c1c",
  800: "#991b1b",
  900: "#7f1d1d",
};

// Alias for backwards compatibility
export const danger = error;

// ========================================
// Mode-Aware Color Factory Function
// ========================================

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
        25: "#1e3a8a",
        50: "#1e40af",
        100: "#1d4ed8",
        200: "#2563eb",
        300: "#3b82f6",
        400: "#60a5fa",
        500: "#93c5fd",
        600: "#bfdbfe",
        700: "#dbeafe",
        800: "#eff6ff",
        900: "#f5f8ff",
      },
      secondary: {
        25: "#781d4b",
        50: "#923058",
        100: "#b54d6e",
        200: "#d86f87",
        300: "#fc99a6",
        400: "#fdb2b5",
        500: "#fec5c2",
        600: "#fedcd6",
        700: "#feefea",
        800: "#fff5f1",
        900: "#fff9f7",
      },
      success: {
        25: "#054f31",
        50: "#05603a",
        100: "#027a48",
        200: "#039855",
        300: "#12b76a",
        400: "#32d583",
        500: "#6ce9a6",
        600: "#a6f4c5",
        700: "#d1fadf",
        800: "#ecfdf3",
        900: "#f6fef9",
      },
      info: {
        25: "#0c4a6e",
        50: "#075985",
        100: "#0369a1",
        200: "#0284c7",
        300: "#0ea5e9",
        400: "#38bdf8",
        500: "#7dd3fc",
        600: "#bae6fd",
        700: "#e0f2fe",
        800: "#f0f9ff",
        900: "#fafeff",
      },
      warning: {
        25: "#7c2d12",
        50: "#9a3412",
        100: "#c2410c",
        200: "#ea580c",
        300: "#f97316",
        400: "#fb923c",
        500: "#fdba74",
        600: "#fed7aa",
        700: "#ffedd5",
        800: "#fff7ed",
        900: "#fffcf5",
      },
      error: {
        25: "#7f1d1d",
        50: "#991b1b",
        100: "#b91c1c",
        200: "#dc2626",
        300: "#ef4444",
        400: "#f87171",
        500: "#fca5a5",
        600: "#fecaca",
        700: "#fee2e2",
        800: "#fef2f2",
        900: "#fffbfa",
      },
      danger: {
        25: "#7f1d1d",
        50: "#991b1b",
        100: "#b91c1c",
        200: "#dc2626",
        300: "#ef4444",
        400: "#f87171",
        500: "#fca5a5",
        600: "#fecaca",
        700: "#fee2e2",
        800: "#fef2f2",
        900: "#fffbfa",
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
