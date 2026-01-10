"use client";

import { Paper, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import { useState } from "react";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

// # components
export default function ChartPieDemo() {
  const theme = useTheme();

  const [series] = useState([44, 55, 13, 43, 22]);

  const options: ApexOptions = {
    chart: {
      width: 380,
      type: "pie",
      fontFamily: theme.typography.fontFamily,
    },
    labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
    colors: [
      theme.palette.primary.main,
      theme.palette.secondary.main,
      theme.palette.success.main,
      theme.palette.warning.main,
      theme.palette.error.main,
    ],
    legend: {
      labels: {
        colors: theme.palette.text.primary,
      },
      position: "bottom",
    },
    stroke: {
      show: false,
    },
    dataLabels: {
      enabled: true,
      style: {
        fontFamily: theme.typography.fontFamily,
      },
    },
    tooltip: {
      theme: theme.palette.mode,
    },
  };

  return (
    <Stack spacing={2}>
      <Typography variant="subtitle2" color="text.secondary">
        Simple Pie Chart.
      </Typography>

      <Paper
        elevation={0}
        sx={{ p: 4, border: 1, borderColor: "divider", borderRadius: 2 }}
      >
        <Stack alignItems="center">
          <ReactApexChart
            options={options}
            series={series}
            type="pie"
            width={400}
          />
        </Stack>
      </Paper>
    </Stack>
  );
}
