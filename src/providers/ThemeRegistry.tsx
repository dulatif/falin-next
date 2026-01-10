// app/components/ThemeRegistry.tsx

"use client";

import { Alert, Snackbar } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import * as React from "react";
import { useSnackbar } from "@/hooks";
import { createAppTheme } from "@/theme/theme"; // Adjust the path to your theme file

import { ThemeModeProvider, useThemeMode } from "./ThemeContext";

// Inner component to access ThemeContext
const ThemeProviderWrapper = ({ children }: { children: React.ReactNode }) => {
  const { mode } = useThemeMode();
  const theme = React.useMemo(() => createAppTheme(mode), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <React.Suspense fallback={null}>
        <ProgressBar
          height="2px"
          shallowRouting
          style={`
            .nprogress {
              pointer-events: none;
              z-index: 9999 !important;
            }
            .nprogress .bar {
              z-index: 9999 !important;
              background: var(--primary-300) !important;
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              height: 3px !important;
            }
          `}
        />
      </React.Suspense>
      {children}
    </ThemeProvider>
  );
};

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const snackbarState = useSnackbar();

  return (
    <ThemeModeProvider>
      <AppRouterCacheProvider>
        <ThemeProviderWrapper>
          {children}
          <Snackbar
            anchorOrigin={{
              vertical: snackbarState.vertical,
              horizontal: snackbarState.horizontal,
            }}
            open={snackbarState.show}
            onClose={snackbarState.close}
            autoHideDuration={snackbarState.color === "error" ? null : 5000}
          >
            <Alert
              onClose={snackbarState.close}
              className="alert-mobile"
              severity={snackbarState.color}
            >
              {snackbarState.message}
            </Alert>
          </Snackbar>
        </ThemeProviderWrapper>
      </AppRouterCacheProvider>
    </ThemeModeProvider>
  );
}
