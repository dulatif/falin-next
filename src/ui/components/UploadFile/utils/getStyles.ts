import { SxProps } from "@mui/material";

type ColorPalette = {
  neutral: Record<number, string>;
  primary: Record<number, string>;
  info: Record<number, string>;
};

export function getStyles(
  disabled: boolean,
  onDropZone: boolean,
  file: File | null,
  isImage: boolean,
  imgSources: string | ArrayBuffer | null,
  colors: ColorPalette,
): {
  root: SxProps;
  boxIconCloud: SxProps;
  label: SxProps;
  fileName: SxProps;
  stackBtn: SxProps;
} {
  return {
    root: {
      border: `1px solid ${colors.neutral[300]}`,
      height: "125px",
      borderRadius: "8px",
      overflow: "hidden",
      backgroundColor: disabled
        ? colors.neutral[100]
        : onDropZone
          ? colors.primary[100]
          : file && !isImage
            ? colors.neutral[50]
            : colors.neutral[25],
      backgroundImage: `url(${imgSources})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      position: "relative",
    },
    boxIconCloud: {
      color: colors.neutral[500],
      backgroundColor: colors.neutral[100],
      borderRadius: "50%",
      width: "40px",
      height: "40px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      paddingTop: "4px",
      boxSizing: "border-box",
      margin: "auto",
      marginBottom: "8px",
    },
    label: {
      fontWeight: 500,
      color: colors.info[500],
      cursor: "pointer",
      "&:hover": { color: colors.info[700] },
    },
    fileName: { position: "absolute", top: "10px", left: "10px" },
    stackBtn: {
      transform: isImage ? "translateY(0px)" : "translateY(-10px)",
    },
  };
}
