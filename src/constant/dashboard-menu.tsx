import { House, List } from "phosphor-react";
import { ReactNode } from "react";

// # types
export interface MenuItem {
  menuKey: string;
  title: string;
  subtitle?: string;
  path: string;
  icon: ReactNode;
}

// # constants
/**
 * Dashboard Menu Configuration
 */
const dashboardMenu: MenuItem[] = [
  {
    menuKey: "dashboard",
    title: "Dashboard",
    subtitle: "Overview",
    path: "/",
    icon: <House weight="bold" size={20} />,
  },
  {
    menuKey: "examples",
    title: "Examples",
    subtitle: "Boilerplate Examples",
    path: "/examples",
    icon: <List weight="bold" size={20} />,
  },
];

export default dashboardMenu;
