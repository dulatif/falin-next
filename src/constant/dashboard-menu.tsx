import {
  BellRinging,
  BracketsAngle,
  Calendar,
  Cards,
  ChartLineUp,
  CheckCircle,
  CloudArrowUp,
  House,
  Info,
  Link,
  MapTrifold,
  Palette,
  Pill,
  RadioButton,
  Rectangle,
  Rows,
  Sliders,
  Smiley,
  SquaresFour,
  StackSimple,
  Table,
  Tabs,
  Textbox,
  TextT,
  UserCircle,
  WarningCircle,
  WaveSine,
} from "phosphor-react";
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
    path: "/design-system/dashboard",
    icon: <House weight="bold" size={22} />,
  },
];

export const listCustomization: MenuItem[] = [
  {
    menuKey: "typography",
    title: "Typography",
    path: "/design-system/typography",
    icon: <TextT size={22} weight="bold" />,
  },
  {
    menuKey: "shadows",
    title: "Shadows",
    path: "/design-system/shadow",
    icon: <WaveSine size={22} weight="bold" />,
  },
  {
    menuKey: "colors",
    title: "Colors",
    path: "/design-system/color",
    icon: <Palette size={22} weight="bold" />,
  },
  {
    menuKey: "icons",
    title: "Icons",
    path: "/design-system/icon",
    icon: <Smiley size={22} weight="bold" />,
  },
  {
    menuKey: "spacing",
    title: "Spacing",
    path: "/design-system/spacing",
    icon: <SquaresFour size={22} weight="bold" />,
  },
];

export const listMenuForms: MenuItem[] = [
  {
    menuKey: "inputs",
    title: "Inputs",
    path: "/design-system/input",
    icon: <Textbox size={22} weight="bold" />,
  },
  {
    menuKey: "checkbox",
    title: "Checkbox",
    path: "/design-system/checkbox",
    icon: <CheckCircle size={22} weight="bold" />,
  },
  {
    menuKey: "radio",
    title: "Radio",
    path: "/design-system/radio",
    icon: <RadioButton size={22} weight="bold" />,
  },
  {
    menuKey: "select",
    title: "Select",
    path: "/design-system/select",
    icon: <Rows size={22} weight="bold" />,
  },
  {
    menuKey: "upload-file",
    title: "Upload File",
    path: "/design-system/upload-file",
    icon: <CloudArrowUp size={22} weight="bold" />,
  },
  {
    menuKey: "form-editor",
    title: "Form Editor",
    path: "/design-system/form-editor",
    icon: <BracketsAngle size={22} weight="bold" />,
  },
];

export const listComponents: MenuItem[] = [
  {
    menuKey: "button",
    title: "Button",
    path: "/design-system/button",
    icon: <Rectangle size={22} weight="bold" />,
  },
  {
    menuKey: "badge",
    title: "Badge",
    path: "/design-system/badge",
    icon: <Pill size={22} weight="bold" />,
  },
  {
    menuKey: "chip",
    title: "Chip",
    path: "/design-system/chip",
    icon: <Pill size={22} weight="bold" />, // Using Pill for Chip as well if no specific icon
  },
  {
    menuKey: "avatars",
    title: "Avatars",
    path: "/design-system/avatar",
    icon: <UserCircle size={22} weight="bold" />,
  },
  {
    menuKey: "tooltips",
    title: "Tooltips",
    path: "/design-system/tooltip",
    icon: <Info size={22} weight="bold" />,
  },
  {
    menuKey: "alert",
    title: "Alert",
    path: "/design-system/alert",
    icon: <WarningCircle size={22} weight="bold" />,
  },
  {
    menuKey: "snackbar",
    title: "Snackbar",
    path: "/design-system/snackbar",
    icon: <BellRinging size={22} weight="bold" />,
  },
  {
    menuKey: "table",
    title: "Table",
    path: "/design-system/table",
    icon: <Table size={22} weight="bold" />,
  },
  {
    menuKey: "accordion",
    title: "Accordion",
    path: "/design-system/accordion",
    icon: <Rows size={22} weight="bold" />,
  },
  {
    menuKey: "card",
    title: "Card",
    path: "/design-system/card",
    icon: <Cards size={22} weight="bold" />,
  },
  {
    menuKey: "breadcrumbs",
    title: "Breadcrumbs",
    path: "/design-system/breadcrumb",
    icon: <Link size={22} weight="bold" />,
  },
  {
    menuKey: "tabs",
    title: "Tabs",
    path: "/design-system/tabs",
    icon: <Tabs size={22} weight="bold" />,
  },
  {
    menuKey: "modal",
    title: "Modal",
    path: "/design-system/modal",
    icon: <StackSimple size={22} weight="bold" />,
  },
];

export const listExtraUI: MenuItem[] = [
  {
    menuKey: "chart",
    title: "Chart",
    path: "/design-system/chart",
    icon: <ChartLineUp size={22} weight="bold" />,
  },
  {
    menuKey: "calendar",
    title: "Calendar",
    path: "/design-system/calendar",
    icon: <Calendar size={22} weight="bold" />,
  },
  {
    menuKey: "sliders",
    title: "Sliders",
    path: "/design-system/slider",
    icon: <Sliders size={22} weight="bold" />,
  },
  {
    menuKey: "map",
    title: "Map",
    path: "/design-system/map",
    icon: <MapTrifold size={22} weight="bold" />,
  },
];

export default dashboardMenu;
