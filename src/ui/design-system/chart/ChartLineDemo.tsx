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
export default function ChartLineDemo() {
  const theme = useTheme();

  const [series] = useState([
    {
      name: "Desktops",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
    },
  ]);

  const options: ApexOptions = {
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: false,
      },
      fontFamily: theme.typography.fontFamily,
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
      colors: [theme.palette.primary.main],
    },
    title: {
      text: "Product Trends by Month",
      align: "left",
      style: {
        color: theme.palette.text.primary,
      },
    },
    grid: {
      row: {
        colors: [theme.palette.background.default, "transparent"],
        opacity: 0.5,
      },
      borderColor: theme.palette.divider,
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
      labels: {
        style: {
          colors: theme.palette.text.secondary,
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: theme.palette.text.secondary,
        },
      },
    },
    tooltip: {
      theme: theme.palette.mode,
    },
  };

  return (
    <Stack spacing={2}>
      <Typography variant="subtitle2" color="text.secondary">
        Basic line chart.
      </Typography>

      <Paper
        elevation={0}
        sx={{ p: 4, border: 1, borderColor: "divider", borderRadius: 2 }}
      >
        <ReactApexChart
          options={options}
          series={series}
          type="line"
          height={350}
        />
      </Paper>
    </Stack>
  );
}
