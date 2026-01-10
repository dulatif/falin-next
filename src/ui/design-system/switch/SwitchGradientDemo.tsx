"use client";

import { Box, Switch, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const GradientSwitch = styled(Switch)(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        border: 0,
        background: "linear-gradient(to right, #4facfe 0%, #00f2fe 100%)",
      },
      "& .MuiSwitch-thumb": {
        boxShadow: "0px 0px 10px rgba(0, 242, 254, 0.6)",
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
    boxShadow: "0 2px 4px 0 rgba(0,0,35,0.2)",
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

export default function SwitchGradientDemo() {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
      <Box>
        <Typography variant="caption" display="block" sx={{ mb: 1 }}>
          Cyan Gradient
        </Typography>
        <GradientSwitch defaultChecked />
      </Box>
    </Box>
  );
}
