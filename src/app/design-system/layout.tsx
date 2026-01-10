import DashboardLayout from "@/ui/layouts/Dashboard";

export default function DesignSystemLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
