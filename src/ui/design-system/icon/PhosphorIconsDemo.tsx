"use client";

import { Box, Chip, Grid, Paper, Stack, Typography } from "@mui/material";
import {
  ArrowLeft,
  ArrowRight,
  ArrowsClockwise,
  Bell,
  Calendar,
  CaretDown,
  CaretUp,
  ChartPieSlice,
  Check,
  Clock,
  CreditCard,
  CurrencyDollar,
  DotsThree,
  DotsThreeVertical,
  DownloadSimple,
  Envelope,
  Eye,
  EyeSlash,
  Funnel,
  Gear,
  Globe,
  Heart,
  House,
  Info,
  List,
  Lock,
  MagnifyingGlass,
  MapPin,
  MapTrifold,
  Money,
  Moon,
  Pencil,
  Phone,
  Plus,
  RocketLaunch,
  ShareNetwork,
  ShoppingCart,
  SignIn,
  SignOut,
  SortAscending,
  SquaresFour,
  Star,
  Sun,
  Trash,
  UploadSimple,
  User,
  Users,
  Warning,
  WarningCircle,
  X,
} from "phosphor-react";

// # constants
const PROSPHOR_ICONS = [
  { name: "House", icon: <House size={24} />, import: "House" },
  { name: "User", icon: <User size={24} />, import: "User" },
  { name: "Gear", icon: <Gear size={24} />, import: "Gear" },
  { name: "Pencil", icon: <Pencil size={24} />, import: "Pencil" },
  { name: "Trash", icon: <Trash size={24} />, import: "Trash" },
  { name: "Plus", icon: <Plus size={24} />, import: "Plus" },
  {
    name: "Search",
    icon: <MagnifyingGlass size={24} />,
    import: "MagnifyingGlass",
  },
  { name: "List", icon: <List size={24} />, import: "List" },
  { name: "Close", icon: <X size={24} />, import: "X" },
  { name: "Check", icon: <Check size={24} />, import: "Check" },
  { name: "Bell", icon: <Bell size={24} />, import: "Bell" },
  { name: "Rocket", icon: <RocketLaunch size={24} />, import: "RocketLaunch" },
  { name: "Info", icon: <Info size={24} />, import: "Info" },
  { name: "Warning", icon: <Warning size={24} />, import: "Warning" },
  { name: "Error", icon: <WarningCircle size={24} />, import: "WarningCircle" },
  { name: "Heart", icon: <Heart size={24} />, import: "Heart" },
  { name: "Share", icon: <ShareNetwork size={24} />, import: "ShareNetwork" },
  { name: "Lock", icon: <Lock size={24} />, import: "Lock" },
  { name: "Eye", icon: <Eye size={24} />, import: "Eye" },
  { name: "EyeSlash", icon: <EyeSlash size={24} />, import: "EyeSlash" },
  { name: "SignIn", icon: <SignIn size={24} />, import: "SignIn" },
  { name: "SignOut", icon: <SignOut size={24} />, import: "SignOut" },
  { name: "ArrowRight", icon: <ArrowRight size={24} />, import: "ArrowRight" },
  { name: "ArrowLeft", icon: <ArrowLeft size={24} />, import: "ArrowLeft" },
  { name: "CaretDown", icon: <CaretDown size={24} />, import: "CaretDown" },
  { name: "CaretUp", icon: <CaretUp size={24} />, import: "CaretUp" },
  {
    name: "MenuVert",
    icon: <DotsThreeVertical size={24} />,
    import: "DotsThreeVertical",
  },
  { name: "MenuHoriz", icon: <DotsThree size={24} />, import: "DotsThree" },
  {
    name: "Refresh",
    icon: <ArrowsClockwise size={24} />,
    import: "ArrowsClockwise",
  },
  {
    name: "Download",
    icon: <DownloadSimple size={24} />,
    import: "DownloadSimple",
  },
  { name: "Upload", icon: <UploadSimple size={24} />, import: "UploadSimple" },
  { name: "Filter", icon: <Funnel size={24} />, import: "Funnel" },
  { name: "Sort", icon: <SortAscending size={24} />, import: "SortAscending" },
  { name: "Grid", icon: <SquaresFour size={24} />, import: "SquaresFour" },
  { name: "Calendar", icon: <Calendar size={24} />, import: "Calendar" },
  { name: "Time", icon: <Clock size={24} />, import: "Clock" },
  { name: "Email", icon: <Envelope size={24} />, import: "Envelope" },
  { name: "Phone", icon: <Phone size={24} />, import: "Phone" },
  { name: "Pin", icon: <MapPin size={24} />, import: "MapPin" },
  { name: "Map", icon: <MapTrifold size={24} />, import: "MapTrifold" },
  { name: "Globe", icon: <Globe size={24} />, import: "Globe" },
  { name: "Dark", icon: <Moon size={24} />, import: "Moon" },
  { name: "Light", icon: <Sun size={24} />, import: "Sun" },
  {
    name: "Dashboard",
    icon: <SquaresFour size={24} weight="fill" />,
    import: "SquaresFour",
  }, // Using valid alternative
  { name: "Cart", icon: <ShoppingCart size={24} />, import: "ShoppingCart" },
  { name: "CreditCard", icon: <CreditCard size={24} />, import: "CreditCard" },
  { name: "Money", icon: <Money size={24} />, import: "Money" },
  {
    name: "Finance",
    icon: <CurrencyDollar size={24} />,
    import: "CurrencyDollar",
  },
  {
    name: "Analytics",
    icon: <ChartPieSlice size={24} />,
    import: "ChartPieSlice",
  },
  { name: "Team", icon: <Users size={24} />, import: "Users" },
  { name: "Star", icon: <Star size={24} />, import: "Star" },
] as const;

// # components
function IconCard({
  icon,
  name,
  importName,
}: {
  icon: React.ReactNode;
  name: string;
  importName: string;
}) {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 2,
        border: 1,
        borderColor: "divider",
        borderRadius: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 1.5,
        width: 100,
        height: 100,
        transition: "all 0.2s",
        "&:hover": {
          borderColor: "primary.main",
          bgcolor: "action.hover",
          transform: "translateY(-2px)",
        },
      }}
    >
      <Box
        sx={{
          p: 1,
          bgcolor: "background.paper",
          borderRadius: "50%",
          color: "text.primary",
          display: "flex",
        }}
      >
        {icon}
      </Box>
      <Box sx={{ textAlign: "center", width: "100%", px: 1 }}>
        <Typography
          variant="caption"
          color="text.secondary"
          fontFamily="monospace"
          sx={{
            fontSize: "0.7rem",
            display: "block",
            wordBreak: "break-all",
            lineHeight: 1.2,
          }}
        >
          {importName}
        </Typography>
      </Box>
    </Paper>
  );
}

export default function PhosphorIconsDemo() {
  return (
    <Stack spacing={2}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h6" fontWeight={600}>
          Phosphor Icons
        </Typography>
        <Chip
          label="phosphor-react"
          color="primary"
          size="small"
          sx={{ fontFamily: "monospace" }}
        />
      </Stack>

      <Typography variant="body2" color="text.secondary">
        A flexible icon family for interfaces. Sample set of 50 common icons.
      </Typography>

      <Grid container spacing={2}>
        {PROSPHOR_ICONS.slice(0, 50).map((icon, index) => (
          <Grid
            item
            xs={6}
            sm={4}
            md={2}
            lg={2}
            key={`${icon.name}-${index}`}
            display="flex"
            justifyContent="center"
          >
            <IconCard
              icon={icon.icon}
              name={icon.name}
              importName={icon.import}
            />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}
