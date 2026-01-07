"use client";

import { Box, Paper, Stack, Tab, Tabs, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState } from "react";

// # components
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`filled-tabpanel-${index}`}
      aria-labelledby={`filled-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

// Styled Components for "Filled" look
const FilledTabs = styled(Tabs)({
  borderBottom: "1px solid #e8e8e8",
  "& .MuiTabs-indicator": {
    backgroundColor: "#1890ff",
  },
});

const FilledTab = styled((props: { label: string }) => (
  <Tab disableRipple {...props} />
))(({ theme }) => ({
  textTransform: "none",
  minWidth: 0,
  [theme.breakpoints.up("sm")]: {
    minWidth: 0,
  },
  fontWeight: theme.typography.fontWeightRegular,
  marginRight: theme.spacing(1),
  color: "rgba(0, 0, 0, 0.85)",
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    color: "#40a9ff",
    opacity: 1,
  },
  "&.Mui-selected": {
    color: "#1890ff",
    fontWeight: theme.typography.fontWeightMedium,
  },
  "&.Mui-focusVisible": {
    backgroundColor: "#d1eaff",
  },
}));

// Another variant: truly "filled" background
const SegmentedTabs = styled(Tabs)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? theme.palette.grey[900]
      : theme.palette.grey[200],
  borderRadius: theme.shape.borderRadius,
  padding: 4,
  minHeight: 44,
  "& .MuiTabs-indicator": {
    display: "none",
  },
}));

const SegmentedTab = styled(Tab)(({ theme }) => ({
  textTransform: "none",
  minWidth: 0,
  [theme.breakpoints.up("sm")]: {
    minWidth: 0,
  },
  fontWeight: theme.typography.fontWeightRegular,
  color: theme.palette.text.secondary,
  borderRadius: theme.shape.borderRadius,
  margin: "0 4px",
  transition: "all 0.2s",
  "&:hover": {
    color: theme.palette.text.primary,
    opacity: 1,
  },
  "&.Mui-selected": {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[1],
    fontWeight: theme.typography.fontWeightMedium,
  },
  "&.Mui-focusVisible": {
    backgroundColor: theme.palette.action.focus,
  },
}));

export default function TabsFilledDemo() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Stack spacing={2}>
      <Typography variant="subtitle2" color="text.secondary">
        Tabs with a filled/segmented style using custom styling.
      </Typography>

      <Paper
        elevation={0}
        sx={{ p: 4, border: 1, borderColor: "divider", borderRadius: 2 }}
      >
        <Box sx={{ width: "100%" }}>
          <Box sx={{ bgcolor: "background.paper" }}>
            <SegmentedTabs
              value={value}
              onChange={handleChange}
              aria-label="segmented tabs example"
            >
              <SegmentedTab label="Overview" />
              <SegmentedTab label="Features" />
              <SegmentedTab label="Pricing" />
            </SegmentedTabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            Overview Content
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            Features Content
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            Pricing Content
          </CustomTabPanel>
        </Box>
      </Paper>
    </Stack>
  );
}
