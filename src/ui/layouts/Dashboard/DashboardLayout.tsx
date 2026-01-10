"use client";

import {
  Avatar,
  Box,
  Button,
  MenuItem,
  MenuList,
  Stack,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Bell,
  DotsThreeOutlineVertical,
  List,
  SignOut,
  UserCircle,
} from "phosphor-react";
import React, { ReactNode, useEffect, useState } from "react";
import dashboardMenu, {
  MenuItem as DashboardMenuItem,
  listComponents,
  listCustomization,
  listExtraUI,
  listMenuForms,
  listPages,
} from "@/constant/dashboard-menu";
import { getColors } from "@/theme/ts/colors";
import { ThemeToggle } from "@/ui/components/ThemeToggle";
import { Render } from "@/ui/elements";
import { logout } from "@/utils/next-auth";
import classes from "./DashboardLayout.module.scss";

interface DashboardLayoutProps {
  children: ReactNode;
}

// MenuItems
const MenuItems: React.FC<{ menus: DashboardMenuItem[] }> = ({ menus }) => {
  const pathname = usePathname();

  return menus.map((item) => (
    <Link key={item.path} href={item.path}>
      <MenuItem
        className={`${classes.MenuItem} ${
          pathname === item.path ? classes.Active : ""
        }`}
      >
        <span className={classes.MenuIcon}>{item.icon}</span>
        <Typography>{item.title}</Typography>
      </MenuItem>
    </Link>
  ));
};

const MenuTitle: React.FC<{ title: string }> = ({ title }) => {
  return (
    <Typography
      variant="body2"
      fontWeight={"semiBold"}
      mb={2}
      mt={4}
      className={classes.MenuTitle}
      color="text.secondary"
    >
      {title}
    </Typography>
  );
};

// # constants
const SIDEBAR_STORAGE_KEY = "dashboard_sidebar_visible";

const allMenus = [
  ...dashboardMenu,
  ...listCustomization,
  ...listMenuForms,
  ...listComponents,
  ...listExtraUI,
];

// DashboardLayout
export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const pathname = usePathname();
  const router = useRouter();
  const theme = useTheme();
  const colors = getColors(theme.palette.mode);
  const menu = allMenus.find((item) => pathname.trim().includes(item.path));
  const [showSidebar, setShowSidebar] = useState(() => {
    if (typeof window === "undefined") return false;
    return sessionStorage.getItem(SIDEBAR_STORAGE_KEY) === "true";
  });

  // Sync sidebar state to sessionStorage
  useEffect(() => {
    sessionStorage.setItem(SIDEBAR_STORAGE_KEY, String(showSidebar));
  }, [showSidebar]);

  const handleLogout = async () => {
    const result = await logout();
    if (result.status === "success") {
      router.push("/login");
    }
  };

  return (
    <div className={classes.DashboardLayout}>
      <Box
        component="aside"
        className={classNames(classes.Sidebar, {
          [classes.Hide]: !showSidebar,
        })}
      >
        <Box className={classes.SidebarHeader}>
          <Button
            data-shape="icon"
            variant={"text"}
            color="inherit"
            size="lg"
            onClick={() => setShowSidebar(!showSidebar)}
            className={classes.SidebarToggle}
          >
            <Render in={!showSidebar}>
              <List
                size={22}
                weight="bold"
                style={{ transform: "scale(1.4)" }}
              />
            </Render>
            <Render in={showSidebar}>
              <DotsThreeOutlineVertical
                size={22}
                weight="fill"
                style={{ transform: "scale(1.2)" }}
              />
            </Render>
          </Button>
          <div className={classes.Logo}>
            <Image src="/falin-logo.png" width={24} height={24} alt="Logo" />
            <span>FALIN NEXT</span>
          </div>
        </Box>
        <MenuList component={"nav"} className={classes.MenuContainer}>
          <MenuItems menus={dashboardMenu} />
          <MenuTitle title="Customization" />
          <MenuItems menus={listCustomization} />
          <MenuTitle title="Forms" />
          <MenuItems menus={listMenuForms} />
          <MenuTitle title="Components" />
          <MenuItems menus={listComponents} />
          <MenuTitle title="Extra UI" />
          <MenuItems menus={listExtraUI} />
          <MenuTitle title="Pages" />
          <MenuItems menus={listPages} />
        </MenuList>
        <Stack direction={"column"} className={classes.SidebarFooter}>
          <Button
            color="error"
            variant="text"
            onClick={handleLogout}
            className={classes.LogoutButton}
            data-shape={showSidebar ? "text" : "icon"}
            startIcon={
              showSidebar && (
                <SignOut
                  weight="bold"
                  size={22}
                  style={{ transform: "rotate(180deg)" }}
                />
              )
            }
          >
            {showSidebar ? (
              <Typography fontWeight={"semiBold"}>Logout</Typography>
            ) : (
              <SignOut
                weight="bold"
                size={24}
                style={{ transform: "rotate(180deg)" }}
              />
            )}
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
              variant="h5"
              fontWeight={"bold"}
              className={classes.PageTitle}
              mb={2}
            >
              {menu ? menu.title : "Dashboard"}
            </Typography>
            <Typography fontWeight={"medium"} className={classes.PageSubtitle}>
              {menu?.subtitle ? menu.subtitle : "Dashboard Page"}
            </Typography>
          </Box>
          <Stack direction="row" gap={2}>
            <Button data-shape="icon" color="inherit" variant="text">
              <Bell size={22} weight="duotone" />
            </Button>
            <ThemeToggle />
            <Avatar
              variant="rounded"
              sx={{
                bgcolor: colors.neutral[100],
                color: colors.primary[400],
              }}
            >
              <UserCircle weight="fill" size={22} />
            </Avatar>
          </Stack>
        </header>
        <Box>{children}</Box>
      </main>
    </div>
  );
}
