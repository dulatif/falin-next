import { Components } from "@mui/material";
import { CaretDown } from "phosphor-react";
import { getColors } from "./colors";
import { shadows } from "./shadows";

declare module "@mui/material/Button" {
  interface ButtonPropsSizeOverrides {
    small: false;
    medium: false;
    large: false;
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    "2xl": true;
  }
}
declare module "@mui/material/IconButton" {
  interface IconButtonPropsSizeOverrides {
    small: false;
    medium: false;
    large: false;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    "2xl": true;
  }
}

const objColor = (mode: "light" | "dark") => {
  const colors = getColors(mode);
  return {
    primary: colors.primary,
    neutral: colors.neutral,
    success: colors.success,
    info: colors.info,
    warning: colors.warning,
    danger: colors.danger,
  };
};

const fnBtnColorStyle = (
  color: "primary" | "neutral" | "success" | "info" | "warning" | "danger",
  variant: "contained" | "text",
  mode: "light" | "dark",
) => {
  const colors = objColor(mode);

  if (variant === "contained")
    return {
      color: "#fff",
      background: colors[color][600],
      ":hover": {
        background: colors[color][700],
      },
      ":focus": {
        boxShadow: `0px 0px 0px 4px ${colors[color][100]}`,
      },
      ":disabled": {
        background: colors[color][200],
        color: "#fff",
      },
    };
  if (variant === "text")
    return {
      background: colors[color][100],
      color: colors[color][600],
      ":hover": {
        background: colors[color][100],
      },
      ":focus": {
        background: colors[color][50],
        boxShadow: `0px 0px 0px 4px ${colors[color][100]}`,
      },
      ":disabled": {
        background: "none",
        color: colors[color][300],
      },
    };
};

export const createComponents = (mode: "light" | "dark"): Components => {
  // Get mode-aware colors
  const colors = getColors(mode);
  const bgPrimary = mode === "light" ? "#fff" : colors.neutral[100];
  // const bgSecondary = mode === "light" ? neutral[50] : neutral[200];
  const textPrimary =
    mode === "light" ? colors.neutral[700] : colors.neutral[800];
  const textSecondary =
    mode === "light" ? colors.neutral[500] : colors.neutral[400];

  return {
    MuiButton: {
      defaultProps: {
        variant: "contained",
        size: "md",
      },
      styleOverrides: {
        root: {
          borderRadius: "8px",
          textTransform: "capitalize",
          fontWeight: 600,
          boxShadow: "none",

          "&[data-shape='icon']": {
            minWidth: "0px",
            padding: "0px !important",
            "& span.MuiCircularProgress-root": {
              height: "18px !important",
              width: "18px !important",
            },
          },

          "& span.MuiCircularProgress-root": {
            height: "24px !important",
            width: "24px !important",
          },

          // --- size xs ---
          "&.MuiButton-sizeXs": {
            height: "30px",
            fontSize: "11px",
            fontWeight: "semiBold",
            padding: "8px 14px",
            "&[data-shape='icon']": {
              height: "30px",
              width: "30px",
              "& svg": {
                width: "14px",
              },
            },
          },
          // --- size sm ---
          "&.MuiButton-sizeSm": {
            height: "36px",
            fontSize: "14px",
            padding: "8px 14px",
            "&[data-shape='icon']": {
              height: "36px",
              width: "36px",
              "& svg": {
                width: "17px",
              },
            },
          },
          // --- size md ---
          "&.MuiButton-sizeMd": {
            height: "44px",
            fontSize: "14px",
            padding: "10px 16px",
            "&[data-shape='icon']": {
              height: "40px",
              width: "40px",
              "& svg": {
                width: "17px",
              },
            },
          },
          // --- size lg ---
          "&.MuiButton-sizeLg": {
            height: "44px",
            fontSize: "16px",
            padding: "10px 18px",
            "&[data-shape='icon']": {
              height: "44px",
              width: "44px",
              "& svg": {
                width: "17px",
              },
            },
          },
          // --- size xl ---
          "&.MuiButton-sizeXl": {
            height: "48px",
            fontSize: "16px",
            padding: "12px 20px",
            "&[data-shape='icon']": {
              height: "48px",
              width: "48px",
              "& svg": {
                width: "17px",
              },
            },
          },
          // --- size 2xl ---
          "&.MuiButton-size2xl": {
            height: "60px",
            fontSize: "18px",
            padding: "16px 28px",
            "&[data-shape='icon']": {
              height: "56px",
              width: "56px",
              "& svg": {
                width: "20px",
              },
            },
          },
        },

        containedPrimary: {
          ...fnBtnColorStyle("primary", "contained", mode),
          color: bgPrimary === "#fff" ? "#fff" : colors.neutral[50],
        },
        textPrimary: fnBtnColorStyle("primary", "text", mode),
        containedInfo: fnBtnColorStyle("info", "contained", mode),
        textInfo: fnBtnColorStyle("info", "text", mode),
        containedSuccess: fnBtnColorStyle("success", "contained", mode),
        textSuccess: fnBtnColorStyle("success", "text", mode),
        containedWarning: fnBtnColorStyle("warning", "contained", mode),
        textWarning: fnBtnColorStyle("warning", "text", mode),
        containedError: fnBtnColorStyle("danger", "contained", mode),
        textError: fnBtnColorStyle("danger", "text", mode),
        containedInherit: fnBtnColorStyle("neutral", "contained", mode),
        textInherit: fnBtnColorStyle("neutral", "text", mode),
        outlinedInherit: {
          color: "inherit",
          border: `1px solid ${colors.neutral[300]}`,
        },
        outlinedPrimary: {
          color: colors.primary[600],
          border: `1px solid ${colors.primary[600]}`,
        },
      },
    },
    MuiCircularProgress: {
      defaultProps: {
        disableShrink: true,
        color: "inherit",
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          padding: "20px 16px",
          boxShadow: shadows.lg,
        },
      },
    },
    MuiFormControl: {
      defaultProps: {
        fullWidth: true,
      },
      styleOverrides: {
        root: {
          marginTop: "16px",
          "& .MuiFormHelperText-root": {
            transform: "translate(-14px)",
            fontSize: "14px",
            marginTop: "6px",
          },
          "&.Mui-error": {
            "& fieldset,& fieldset:hover": {
              border: `1px solid ${colors.danger[300]}`,
            },
          },
        },
      },
    },
    MuiInputLabel: {
      defaultProps: {
        shrink: true,
      },
      styleOverrides: {
        root: {
          marginBottom: "4px",
          color: "inherit",
          "& .MuiFormLabel-asterisk": {
            color: colors.danger[400],
          },
        },
        shrink: {
          fontSize: "14px",
          transform: "scale(1) translate(0px, -8px)",
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontSize: "14px",
          marginBottom: "4px",
          color: "inherit",
          "& .MuiFormLabel-asterisk": {
            color: colors.danger[400],
          },
        },
      },
    },
    MuiInput: {
      defaultProps: {
        disableUnderline: true,
      },
      styleOverrides: {
        root: {
          backgroundColor: bgPrimary,
          border: `1px solid ${colors.neutral[300]}`,
          borderRadius: "8px",
          height: "44px",
          padding: "10px 12px",
          width: "100%",
          transition: ".25s",
          "&::placeholder": {
            color: colors.neutral[500],
          },
          "&.Mui-focused": {
            border: `1px solid ${colors.primary[300]}`,
            boxShadow: `0px 0px 0px 3px ${colors.primary[100]}`,
          },
          "&:not([datatype='select-input'])": {},
          "&.Mui-error": {
            border: `1px solid ${colors.danger[300]}`,
            "& svg": {
              color: colors.danger[500],
            },
            "&.Mui-focused": {
              border: `1px solid ${colors.danger[300]}`,
              boxShadow: `0px 0px 0px 3px ${colors.danger[100]}`,
            },
          },
          "&.MuiInputBase-multiline": {
            height: "auto",
          },
          "& svg.MuiSelect-icon": {
            fontSize: "20px",
            right: "12px",
            "& polyline": {
              strokeWidth: "20px",
            },
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          "&[datatype='select-input']": {
            marginTop: "0px",
          },
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          "&.MuiFormControlLabel-label": {
            fontWeight: 400,
            fontSize: 12,
          },
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
        },
        filled: {
          color: bgPrimary === "#fff" ? "#fff" : colors.neutral[50],
        },
        filledError: {
          background: colors.danger[500],
        },
        filledWarning: {
          background: colors.warning[500],
        },
        filledInfo: {
          background: colors.info[500],
        },
        filledSuccess: {
          background: colors.success[500],
        },
        outlinedError: {
          border: `1px solid ${colors.danger[300]}`,
          color: colors.danger[700],
        },
        outlinedWarning: {
          border: `1px solid ${colors.warning[300]}`,
          color: colors.warning[700],
        },
        outlinedInfo: {
          border: `1px solid ${colors.info[300]}`,
          color: colors.info[700],
        },
        outlinedSuccess: {
          border: `1px solid ${colors.success[300]}`,
          color: colors.success[700],
        },
      },
    },
    MuiAlertTitle: {
      styleOverrides: {
        root: {
          fontWeight: 600,
        },
      },
    },
    MuiTooltip: {
      defaultProps: {
        arrow: true,
        placement: "top",
      },
      styleOverrides: {
        tooltip: {
          padding: "8px 12px",
          background: bgPrimary,
          color: textSecondary,
          boxShadow: shadows.lg,
          borderRadius: "8px",
        },
        arrow: {
          color: bgPrimary,
        },
      },
    },
    MuiSelect: {
      defaultProps: {
        variant: "standard",
        disableUnderline: true,
        datatype: "select-input",
        MenuProps: {
          PaperProps: {
            className: "select-dropdown",
          },
        },
        IconComponent: CaretDown,
      },
      styleOverrides: {
        standard: {
          ":focus": {
            backgroundColor: bgPrimary,
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          "&.MuiCard-root": {
            overflow: "initial",
          },
          "&.select-dropdown": {
            padding: "4px 10px",
            border: `1px solid ${colors.neutral[200]}`,
            boxShadow:
              "0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)",
            borderRadius: "8px",
          },
          "&.select-dropdown ul": {
            display: "flex",
            flexDirection: "column",
            gap: "4px",
          },
          "&.select-dropdown li.MuiMenuItem-root": {
            borderRadius: "6px",
            height: "44px",
            padding: "0px 20px",
            "&:active": {
              backgroundColor: colors.primary[200],
            },
          },
          "&.select-dropdown li.MuiMenuItem-root[data-value=' ']": {
            display: "none",
          },
          "&.date-picker__paper": {
            boxShadow: shadows.lg,
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        sizeMedium: {
          padding: "2px 0px",
          fontSize: "14px",
          fontWeight: 500,
        },
        sizeSmall: {
          fontSize: "12px",
        },
        outlined: {
          borderWidth: "1px",
          borderColor: colors.neutral[400],
          color: colors.neutral[600],
          background: colors.neutral[25],
        },
        outlinedPrimary: {
          borderColor: colors.primary[400],
          color: colors.primary[600],
          background: colors.primary[25],
        },
        filled: {
          background: colors.neutral[50],
          color: colors.neutral[700],
        },
        filledPrimary: {
          background: colors.primary[50],
          color: colors.primary[700],
        },
        colorError: {
          "&.MuiChip-filled": {
            background: colors.danger[50],
            color: colors.danger[700],
          },
          "&.MuiChip-outlined": {
            borderColor: colors.danger[400],
            color: colors.danger[600],
            background: colors.danger[25],
          },
        },
        colorSuccess: {
          "&.MuiChip-filled": {
            background: colors.success[50],
            color: colors.success[700],
          },
          "&.MuiChip-outlined": {
            borderColor: colors.success[400],
            color: colors.success[600],
            background: colors.success[25],
          },
        },
        colorInfo: {
          "&.MuiChip-filled": {
            background: colors.info[50],
            color: colors.info[700],
          },
          "&.MuiChip-outlined": {
            borderColor: colors.info[400],
            color: colors.info[600],
            background: colors.info[25],
          },
        },
        colorWarning: {
          "&.MuiChip-filled": {
            background: colors.warning[50],
            color: colors.warning[700],
          },
          "&.MuiChip-outlined": {
            borderColor: colors.warning[400],
            color: colors.warning[600],
            background: colors.warning[25],
          },
        },
      },
    },
    MuiSnackbar: {
      defaultProps: {
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "right",
        },
      },
      styleOverrides: {
        root: {
          "& .MuiPaper-root": {
            background: bgPrimary,
            color: textPrimary,
          },
        },
      },
    },
    MuiModal: {
      styleOverrides: {
        root: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          "& > .MuiBox-root": {
            position: "relative",
            background: bgPrimary,
            boxShadow: "0px 24px 48px -12px rgba(16, 24, 40, 0.18)",
            minWidth: "320px",
            width: "100%",
            maxWidth: "900px",
            minHeight: "100px",
            maxHeight: "90vh",
            overflowY: "auto",
            borderRadius: "12px",
            outline: "none",
          },
          "& .btn-close": {
            position: "absolute",
            right: "12px",
            top: "12px",
          },
        },
      },
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          "&.modal-backdrop": {
            backgroundColor: "rgba(52, 64, 84, 0.6)",
          },
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          "& .MuiTableRow-root .MuiTableCell-root": {
            color: textPrimary,
            fontSize: "12px",
            borderTop: `1px solid ${colors.neutral[200]}`,
          },
        },
      },
    },
    MuiTableBody: {
      styleOverrides: {
        root: {
          "& .MuiTableRow-root .MuiTableCell-root": {
            color: colors.neutral[700],
          },
          "& .MuiTableRow-root .MuiTableCell-root svg": {
            width: "17px",
          },
          "&.hoverable .MuiTableRow-root:hover": {
            backgroundColor: colors.info[50],
            cursor: "pointer",
            "& .MuiTableCell-root": {
              color:
                mode === "light" ? colors.neutral[900] : colors.neutral[950],
            },
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          fontSize: "14px",
          height: "54px",
          padding: "0px 16px",
          borderBottom: `1px solid ${colors.neutral[200]}`,
          "& a": {
            color: textPrimary,
          },
          "& .MuiIconButton-root.MuiButtonBase-root": {
            width: "28px",
            height: "28px",
            padding: "0",
            borderRadius: "4px",
            "& svg": {
              color: colors.neutral[500],
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%) scale(.9)",
            },
          },
          "& .MuiIconButton-root.MuiButtonBase-root:hover": {
            background: colors.info[100],
            "& svg": {
              color: colors.info[500],
            },
          },
        },
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            color: colors.primary[500],
            background: colors.primary[50],
            fontWeight: 500,
            pointerEvents: "none",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          // ---- style overrides for input date ----
          "&.date-picker": {
            "& .MuiInputBase-root.MuiOutlinedInput-root": {
              backgroundColor: bgPrimary,
              borderRadius: "8px",
              height: "44px",
              padding: "10px 12px",
              width: "100%",
              transition: ".25s",
              fontSize: "16px",
              "&::placeholder": {
                color: colors.neutral[500],
              },
              "& input": {
                paddingLeft: 0,
              },
              "&.Mui-focused , &:focus fieldset": {
                border: `1px solid ${colors.primary[300]}`,
                boxShadow: `0px 0px 0px 3px ${colors.primary[100]}`,
                "& fieldset,&:hover fieldset": {
                  border: "none",
                },
              },
              "&:hover fieldset": {
                border: `1px solid ${colors.neutral[300]}`,
              },
              "& button svg": {
                fontSize: "20px",
                marginRight: "6px",
                "& polyline": {
                  strokeWidth: "20px",
                },
              },
            },
          },
        },
      },
    },
  };
};
