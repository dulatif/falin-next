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
  ToggleLeft,
  User,
  UserCircle,
  WarningCircle,
  WaveSine,
  XCircle,
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
    subtitle:
      "Documentation and examples for the typography system. Built on top of Material UI Typography with custom styling using the Inter font family.",
    path: "/design-system/typography",
    icon: <TextT size={22} weight="bold" />,
  },
  {
    menuKey: "shadows",
    title: "Shadows",
    subtitle:
      "Documentation and examples for the shadow system. Provides 7 elevation levels using consistent dark gray tints for depth and hierarchy.",
    path: "/design-system/shadow",
    icon: <WaveSine size={22} weight="bold" />,
  },
  {
    menuKey: "colors",
    title: "Colors",
    subtitle:
      "The application uses a comprehensive color system with defined palettes for consistency. Each color scale ranges from 25 to 900/950.",
    path: "/design-system/color",
    icon: <Palette size={22} weight="bold" />,
  },
  {
    menuKey: "icons",
    title: "Icons",
    subtitle:
      "The system supports two icon libraries: Material UI Icons for standard system actions and Phosphor Icons for a more modern, flexible aesthetic.",
    path: "/design-system/icon",
    icon: <Smiley size={22} weight="bold" />,
  },
  {
    menuKey: "spacing",
    title: "Spacing",
    subtitle:
      "The design system uses a consistent spacing scale to ensure visual rhythm and balance. Values are defined in pixels but often converted to rem.",
    path: "/design-system/spacing",
    icon: <SquaresFour size={22} weight="bold" />,
  },
];

export const listMenuForms: MenuItem[] = [
  {
    menuKey: "inputs",
    title: "Inputs",
    subtitle:
      "Text fields allow users to enter text into a UI. They typically appear in forms and dialogs.",
    path: "/design-system/input",
    icon: <Textbox size={22} weight="bold" />,
  },
  {
    menuKey: "checkbox",
    title: "Checkbox",
    subtitle:
      "Checkboxes allow the user to select one or more items from a set.",
    path: "/design-system/checkbox",
    icon: <CheckCircle size={22} weight="bold" />,
  },
  {
    menuKey: "radio",
    title: "Radio",
    subtitle: "Radio buttons allow the user to select one option from a set",
    path: "/design-system/radio",
    icon: <RadioButton size={22} weight="bold" />,
  },
  {
    menuKey: "select",
    title: "Select",
    subtitle:
      "Select components allow users to choose one or multiple items from a list.",
    path: "/design-system/select",
    icon: <Rows size={22} weight="bold" />,
  },
  {
    menuKey: "upload-file",
    title: "Upload File",
    subtitle:
      "Various methods for uploading files, from simple buttons to complex picture walls.",
    path: "/design-system/upload-file",
    icon: <CloudArrowUp size={22} weight="bold" />,
  },
  {
    menuKey: "switch",
    title: "Switch",
    subtitle: "Switches toggle the state of a single setting on or off.",
    path: "/design-system/switch",
    icon: <ToggleLeft size={22} weight="bold" />,
  },
];

export const listComponents: MenuItem[] = [
  {
    menuKey: "button",
    title: "Button",
    subtitle:
      "Buttons allow users to take actions, and make choices, with a single tap. Material UI buttons are used to communicate actions that users can take.",
    path: "/design-system/button",
    icon: <Rectangle size={22} weight="bold" />,
  },
  {
    menuKey: "badge",
    title: "Badge",
    subtitle:
      "Badge generates a small badge to the top-right of its child(ren).",
    path: "/design-system/badge",
    icon: <Pill size={22} weight="bold" />,
  },
  {
    menuKey: "chip",
    title: "Chip",
    subtitle:
      "Chips allow users to enter information, make selections, filter content, or trigger actions.",
    path: "/design-system/chip",
    icon: <Pill size={22} weight="bold" />, // Using Pill for Chip as well if no specific icon
  },
  {
    menuKey: "avatars",
    title: "Avatars",
    subtitle:
      "Avatars are found throughout material design with uses in everything from tables to dialog menus.",
    path: "/design-system/avatar",
    icon: <UserCircle size={22} weight="bold" />,
  },
  {
    menuKey: "tooltips",
    title: "Tooltips",
    subtitle:
      "Tooltips display informative text when users hover over, focus on, or tap an element.",
    path: "/design-system/tooltip",
    icon: <Info size={22} weight="bold" />,
  },
  {
    menuKey: "alert",
    title: "Alert",
    subtitle:
      "Alerts display a short, important message in a way that attracts the user's attention without interrupting the user's task.",
    path: "/design-system/alert",
    icon: <WarningCircle size={22} weight="bold" />,
  },
  {
    menuKey: "snackbar",
    title: "Snackbar",
    subtitle:
      "Snackbars provide brief messages about app processes. The component is also known as a toast.",
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
    menuKey: "stepper",
    title: "Stepper",
    subtitle:
      "Steppers allow users to track progress through a sequence of steps.",
    path: "/design-system/stepper",
    icon: <Palette size={22} weight="bold" />,
  },
  {
    menuKey: "accordion",
    title: "Accordion",
    subtitle:
      "Accordions contain creation flows and allow lightweight editing of an element.",
    path: "/design-system/accordion",
    icon: <Rows size={22} weight="bold" />,
  },
  {
    menuKey: "card",
    title: "Card",
    subtitle: "Cards contain content and actions about a single subject.",
    path: "/design-system/card",
    icon: <Cards size={22} weight="bold" />,
  },
  {
    menuKey: "breadcrumbs",
    title: "Breadcrumbs",
    subtitle:
      "Breadcrumbs allow users to inspect their current location within the system hierarchy.",
    path: "/design-system/breadcrumb",
    icon: <Link size={22} weight="bold" />,
  },
  {
    menuKey: "tabs",
    title: "Tabs",
    subtitle:
      "Tabs make it easy to explore and switch between different views.",
    path: "/design-system/tabs",
    icon: <Tabs size={22} weight="bold" />,
  },
  {
    menuKey: "modal",
    title: "Modal",
    subtitle: "Modals provide critical information or ask for decisions.",
    path: "/design-system/modal",
    icon: <StackSimple size={22} weight="bold" />,
  },
];

export const listExtraUI: MenuItem[] = [
  {
    menuKey: "rich-text-editor",
    title: "Rich Text Editor",
    subtitle:
      "A headless, framework-agnostic text editor framework for the web (Tiptap).",
    path: "/design-system/rich-text-editor",
    icon: <BracketsAngle size={22} weight="bold" />,
  },
  {
    menuKey: "chart",
    title: "Chart",
    subtitle: "Visual representations of data using ApexCharts.",
    path: "/design-system/chart",
    icon: <ChartLineUp size={22} weight="bold" />,
  },
  {
    menuKey: "calendar",
    title: "Calendar",
    subtitle: "Full-featured calendar component powered by FullCalendar.",
    path: "/design-system/calendar",
    icon: <Calendar size={22} weight="bold" />,
  },
  {
    menuKey: "sliders",
    title: "Sliders",
    subtitle:
      "Carousels allow users to cycle through a series of content. Powered by Embla Carousel.",
    path: "/design-system/slider",
    icon: <Sliders size={22} weight="bold" />,
  },
  {
    menuKey: "map",
    title: "Map",
    subtitle: "Visualize geographical data using SVG-based maps.",
    path: "/design-system/map",
    icon: <MapTrifold size={22} weight="bold" />,
  },
];

export const listPages: MenuItem[] = [
  {
    menuKey: "not-found",
    title: "Not Found",
    path: "/not-found",
    icon: <XCircle size={22} weight="bold" />,
  },
  {
    menuKey: "login",
    title: "Login",
    path: "/login",
    icon: <User size={22} weight="bold" />,
  },
];

export default dashboardMenu;
