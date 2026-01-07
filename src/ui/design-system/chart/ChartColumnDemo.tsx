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
export default function ChartColumnDemo() {
  const theme = useTheme();

  const [series] = useState([
    {
      name: "Net Profit",
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
    },
    {
      name: "Revenue",
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
    },
    {
      name: "Free Cash Flow",
      data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
    },
  ]);

  const options: ApexOptions = {
    chart: {
      type: "bar",
      height: 350,
      fontFamily: theme.typography.fontFamily,
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        borderRadius: 5,
        borderRadiusApplication: "end",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: [
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
      ],
      labels: {
        style: {
          colors: theme.palette.text.secondary,
        },
      },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      title: {
        text: "$ (thousands)",
        style: {
          color: theme.palette.text.secondary,
        },
      },
      labels: {
        style: {
          colors: theme.palette.text.secondary,
        },
      },
    },
    fill: {
      opacity: 1,
      colors: [
        theme.palette.primary.main,
        theme.palette.success.main,
        theme.palette.warning.main,
      ],
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands";
        },
      },
      theme: theme.palette.mode,
    },
    legend: {
      labels: {
        colors: theme.palette.text.primary,
      },
      markers: {
        fillColors: [
          theme.palette.primary.main,
          theme.palette.success.main,
          theme.palette.warning.main,
        ],
      },
    },
    grid: {
      borderColor: theme.palette.divider,
    },
  };

  return (
    <Stack spacing={2}>
      <Typography variant="subtitle2" color="text.secondary">
        Column chart with multiple series.
      </Typography>

      <Paper
        elevation={0}
        sx={{ p: 4, border: 1, borderColor: "divider", borderRadius: 2 }}
      >
        <ReactApexChart
          options={options}
          series={series}
          type="bar"
          height={350}
        />
      </Paper>
    </Stack>
  );
}
