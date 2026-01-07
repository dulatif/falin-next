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
export default function ChartAreaDemo() {
  const theme = useTheme();

  const [series] = useState([
    {
      name: "Series 1",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "Series 2",
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ]);

  const options: ApexOptions = {
    chart: {
      height: 350,
      type: "area",
      fontFamily: theme.typography.fontFamily,
      toolbar: { show: false },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      colors: [theme.palette.primary.main, theme.palette.secondary.main],
    },
    fill: {
      colors: [theme.palette.primary.main, theme.palette.secondary.main],
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 90, 100],
      },
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2018-09-19T00:00:00.000Z",
        "2018-09-19T01:30:00.000Z",
        "2018-09-19T02:30:00.000Z",
        "2018-09-19T03:30:00.000Z",
        "2018-09-19T04:30:00.000Z",
        "2018-09-19T05:30:00.000Z",
        "2018-09-19T06:30:00.000Z",
      ],
      labels: {
        style: {
          colors: theme.palette.text.secondary,
        },
        datetimeFormatter: {
          year: "yyyy",
          month: "MMM 'yy",
          day: "dd MMM",
          hour: "HH:mm",
        },
      },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      labels: {
        style: {
          colors: theme.palette.text.secondary,
        },
      },
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
      theme: theme.palette.mode,
    },
    legend: {
      labels: {
        colors: theme.palette.text.primary,
      },
    },
    grid: {
      borderColor: theme.palette.divider,
    },
  };

  return (
    <Stack spacing={2}>
      <Typography variant="subtitle2" color="text.secondary">
        Area chart with smooth curves and gradient fill.
      </Typography>

      <Paper
        elevation={0}
        sx={{ p: 4, border: 1, borderColor: "divider", borderRadius: 2 }}
      >
        <ReactApexChart
          options={options}
          series={series}
          type="area"
          height={350}
        />
      </Paper>
    </Stack>
  );
}
