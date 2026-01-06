"use client";

import { Grid } from "@mui/material";
import StatCard from "@/ui/components/StatCard";
import DashboardLayout from "@/ui/layouts/Dashboard/DashboardLayout";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <StatCard
            title="Total Users"
            value={1245}
            valueChange={12}
            valueUnit="vs last month"
            chartData={[10, 15, 12, 18, 20]}
            chartColor="#2196f3"
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <StatCard
            title="Revenue"
            value={45200}
            valueChange={-5}
            valueUnit="vs last month"
            chartData={[500, 480, 490, 450, 460]}
            chartColor="#f44336"
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <StatCard
            title="Orders"
            value={342}
            valueChange={18}
            valueUnit="vs last month"
            chartData={[20, 25, 30, 28, 35]}
            chartColor="#4caf50"
          />
        </Grid>
      </Grid>
    </DashboardLayout>
  );
}
