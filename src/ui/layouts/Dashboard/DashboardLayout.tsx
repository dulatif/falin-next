"use client";

import { Box, Button, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { SignOut } from "phosphor-react";
import { ReactNode } from "react";
import dashboardMenu from "@/constant/dashboard-menu";
import { ThemeToggle } from "@/ui/components/ThemeToggle";
import { logout } from "@/utils/next-auth";
import classes from "./DashboardLayout.module.scss";

interface DashboardLayoutProps {
  children: ReactNode;
}

// MenuItems
const MenuItems = () => {
  const pathname = usePathname();

  return dashboardMenu.map((item) => (
    <Link
      key={item.path}
      href={item.path}
      className={`${classes.MenuItem} ${
        pathname === item.path ? classes.Active : ""
      }`}
    >
      <span className={classes.MenuIcon}>{item.icon}</span>
      <span>{item.title}</span>
    </Link>
  ));
};

// DashboardLayout
export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const pathname = usePathname();
  const router = useRouter();
  const menu = dashboardMenu.find((item) => item.path === pathname);

  const handleLogout = async () => {
    const result = await logout();
    if (result.status === "success") {
      router.push("/login");
    }
  };

  return (
    <div className={classes.DashboardLayout}>
      <Box component="aside" className={classes.Sidebar}>
        <Box>
          <Box className={classes.SidebarHeader}>
            <div className={classes.Logo}>
              <span>BOILERPLATE</span>
            </div>
          </Box>
          <Box component="nav" className={classes.MenuContainer}>
            <MenuItems />
          </Box>
        </Box>
        <Stack direction={"column"} className={classes.SidebarFooter}>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"center"}
            sx={{ mx: 2, mb: 2 }}
            gap={2}
          >
            <div style={{ transform: "translateY(8px)" }}>
              <ThemeToggle />
            </div>
          </Stack>

          {/* -- Logout Button -- */}
          <Button
            sx={{ mx: 2 }}
            color="error"
            variant="text"
            onClick={handleLogout}
            startIcon={
              <SignOut weight="bold" style={{ transform: "rotate(180deg)" }} />
            }
          >
            Logout
          </Button>
        </Stack>
      </Box>
      <main className={classes.Content}>
        <header
          className={classes.Header}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography
              variant="h6"
              fontWeight={"semiBold"}
              className={classes.PageTitle}
              mb={2}
            >
              {menu ? menu.title : "Dashboard"}
            </Typography>
            <Typography fontWeight={"medium"} className={classes.PageSubtitle}>
              {menu?.subtitle ? menu.subtitle : "Dashboard Page"}
            </Typography>
          </Box>
        </header>
        <Box>{children}</Box>
      </main>
    </div>
  );
}
