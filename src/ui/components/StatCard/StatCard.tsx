import { Box, Card, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import { ArrowDown, ArrowUp } from "phosphor-react";
import Render from "@/ui/elements/Render";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface ChartStatProps {
  data: number[];
  color: string;
}
const ChartStat = ({ data, color }: ChartStatProps) => {
  const series = [
    {
      data: data,
    },
  ];

  const options: ApexOptions = {
    chart: {
      type: "area",
      sparkline: {
        enabled: true,
      },
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 90, 100],
      },
    },
    colors: [color],
    tooltip: {
      enabled: false,
    },
  };

  return (
    <Box sx={{ flex: 1 }}>
      <Chart options={options} series={series} type="area" height={100} />
    </Box>
  );
};

interface StatCardProps {
  title: string;
  value: number;
  valueChange: number;
  valueUnit: string;
  chartData?: number[];
  chartColor?: string;
}
const StatCard = ({
  title,
  value,
  valueChange,
  valueUnit,
  chartData,
  chartColor,
}: StatCardProps) => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        height: "100%",
        p: 6,
      }}
    >
      <Stack flexDirection={"column"} spacing={2} sx={{ flex: 1 }}>
        <Typography>{title}</Typography>
        <Typography variant="h4" fontWeight={"bold"}>
          {value}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {valueChange > 0 ? (
            <ArrowUp
              size={16}
              weight="bold"
              color={theme.palette.success.main}
            />
          ) : (
            <ArrowDown
              size={16}
              weight="bold"
              color={theme.palette.error.main}
            />
          )}
          <Typography
            variant="body2"
            color={valueChange > 0 ? "success.main" : "error.main"}
            sx={{ ml: 0.5 }}
          >
            {valueChange}% {valueUnit}
          </Typography>
        </Box>
      </Stack>
      <Render in={!!chartData}>
        <ChartStat data={chartData!} color={chartColor!} />
      </Render>
    </Card>
  );
};

export default StatCard;
