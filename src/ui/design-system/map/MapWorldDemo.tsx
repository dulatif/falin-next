"use client";

import { Box, Paper, Stack, Tooltip, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps";

// # entity
const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// # components
export default function MapWorldDemo() {
  const theme = useTheme();

  return (
    <Stack spacing={2}>
      <Typography variant="subtitle2" color="text.secondary">
        Interactive World Map. Hover over countries to see their names.
      </Typography>

      <Paper
        elevation={0}
        sx={{
          p: 0,
          border: 1,
          borderColor: "divider",
          borderRadius: 2,
          overflow: "hidden",
          height: 500,
          bgcolor: theme.palette.background.default,
          position: "relative"
        }}
      >
        <ComposableMap projectionConfig={{ scale: 200 }} width={980} height={551} style={{ width: "100%", height: "100%" }}>
            <ZoomableGroup>
            <Geographies geography={geoUrl}>
                {({ geographies }) =>
                geographies.map((geo) => (
                    <Tooltip key={geo.rsmKey} title={geo.properties.name} arrow followCursor>
                        <Geography
                            geography={geo}
                            style={{
                                default: {
                                    fill: theme.palette.mode === 'dark' ? theme.palette.grey[800] : theme.palette.grey[300],
                                    outline: "none",
                                    stroke: theme.palette.mode === 'dark' ? theme.palette.grey[900] : theme.palette.common.white,
                                    strokeWidth: 0.5,
                                    transition: 'all 250ms'
                                },
                                hover: {
                                    fill: theme.palette.primary.main,
                                    outline: "none",
                                    cursor: "pointer"
                                },
                                pressed: {
                                    fill: theme.palette.primary.dark,
                                    outline: "none",
                                },
                            }}
                        />
                    </Tooltip>
                ))
                }
            </Geographies>
            </ZoomableGroup>
        </ComposableMap>

        {/* Helper overlay */}
        <Box sx={{ position: "absolute", bottom: 16, right: 16, bgcolor: "background.paper", p: 1, borderRadius: 1, opacity: 0.8 }}>
            <Typography variant="caption" fontWeight={600}>
                 Scroll to Zoom / Drag to Pan
            </Typography>
        </Box>
      </Paper>
    </Stack>
  );
}
