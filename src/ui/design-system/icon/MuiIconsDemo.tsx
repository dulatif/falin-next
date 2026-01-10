"use client";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AddIcon from "@mui/icons-material/Add";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import DashboardIcon from "@mui/icons-material/Dashboard";
import DeleteIcon from "@mui/icons-material/Delete";
import DownloadIcon from "@mui/icons-material/Download";
import EditIcon from "@mui/icons-material/Edit";
import EmailIcon from "@mui/icons-material/Email";
import ErrorIcon from "@mui/icons-material/Error";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FilterListIcon from "@mui/icons-material/FilterList";
import GridViewIcon from "@mui/icons-material/GridView";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import LanguageIcon from "@mui/icons-material/Language";
import LightModeIcon from "@mui/icons-material/LightMode";
import ListIcon from "@mui/icons-material/List";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LockIcon from "@mui/icons-material/Lock";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import MapIcon from "@mui/icons-material/Map";
import MenuIcon from "@mui/icons-material/Menu";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import RefreshIcon from "@mui/icons-material/Refresh";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import SearchIcon from "@mui/icons-material/Search";
import SettingsIcon from "@mui/icons-material/Settings";
import ShareIcon from "@mui/icons-material/Share";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SortIcon from "@mui/icons-material/Sort";
import StarIcon from "@mui/icons-material/Star";
import UploadIcon from "@mui/icons-material/Upload";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import WarningIcon from "@mui/icons-material/Warning";
import { Box, Chip, Grid, Paper, Stack, Typography } from "@mui/material";
import { shadows } from "@/theme/ts/shadows";

// # constants
const MUI_ICONS = [
  { name: "Home", icon: <HomeIcon />, import: "Home" },
  { name: "Person", icon: <PersonIcon />, import: "Person" },
  { name: "Settings", icon: <SettingsIcon />, import: "Settings" },
  { name: "Edit", icon: <EditIcon />, import: "Edit" },
  { name: "Delete", icon: <DeleteIcon />, import: "Delete" },
  { name: "Add", icon: <AddIcon />, import: "Add" },
  { name: "Search", icon: <SearchIcon />, import: "Search" },
  { name: "Menu", icon: <MenuIcon />, import: "Menu" },
  { name: "Close", icon: <CloseIcon />, import: "Close" },
  { name: "Check", icon: <CheckIcon />, import: "Check" },
  {
    name: "Notifications",
    icon: <NotificationsIcon />,
    import: "Notifications",
  },
  { name: "Rocket", icon: <RocketLaunchIcon />, import: "RocketLaunch" },
  { name: "Info", icon: <InfoIcon />, import: "Info" },
  { name: "Warning", icon: <WarningIcon />, import: "Warning" },
  { name: "Error", icon: <ErrorIcon />, import: "Error" },
  { name: "Favorite", icon: <FavoriteIcon />, import: "Favorite" },
  { name: "Share", icon: <ShareIcon />, import: "Share" },
  { name: "Lock", icon: <LockIcon />, import: "Lock" },
  { name: "Visibility", icon: <VisibilityIcon />, import: "Visibility" },
  {
    name: "VisibilityOff",
    icon: <VisibilityOffIcon />,
    import: "VisibilityOff",
  },
  { name: "Login", icon: <LoginIcon />, import: "Login" },
  { name: "Logout", icon: <LogoutIcon />, import: "Logout" },
  { name: "ArrowForward", icon: <ArrowForwardIcon />, import: "ArrowForward" },
  { name: "ArrowBack", icon: <ArrowBackIcon />, import: "ArrowBack" },
  {
    name: "ArrowDown",
    icon: <KeyboardArrowDownIcon />,
    import: "KeyboardArrowDown",
  },
  { name: "ArrowUp", icon: <KeyboardArrowUpIcon />, import: "KeyboardArrowUp" },
  { name: "MoreVert", icon: <MoreVertIcon />, import: "MoreVert" },
  { name: "MoreHoriz", icon: <MoreHorizIcon />, import: "MoreHoriz" },
  { name: "Refresh", icon: <RefreshIcon />, import: "Refresh" },
  { name: "Download", icon: <DownloadIcon />, import: "Download" },
  { name: "Upload", icon: <UploadIcon />, import: "Upload" },
  { name: "Filter", icon: <FilterListIcon />, import: "FilterList" },
  { name: "Sort", icon: <SortIcon />, import: "Sort" },
  { name: "Grid", icon: <GridViewIcon />, import: "GridView" },
  { name: "List", icon: <ListIcon />, import: "List" },
  { name: "Calendar", icon: <CalendarMonthIcon />, import: "CalendarMonth" },
  { name: "Time", icon: <AccessTimeIcon />, import: "AccessTime" },
  { name: "Email", icon: <EmailIcon />, import: "Email" },
  { name: "Phone", icon: <PhoneIcon />, import: "Phone" },
  { name: "Location", icon: <LocationOnIcon />, import: "LocationOn" },
  { name: "Map", icon: <MapIcon />, import: "Map" },
  { name: "Language", icon: <LanguageIcon />, import: "Language" },
  { name: "DarkMode", icon: <DarkModeIcon />, import: "DarkMode" },
  { name: "LightMode", icon: <LightModeIcon />, import: "LightMode" },
  { name: "Dashboard", icon: <DashboardIcon />, import: "Dashboard" },
  { name: "Cart", icon: <ShoppingCartIcon />, import: "ShoppingCart" },
  { name: "Card", icon: <CreditCardIcon />, import: "CreditCard" },
  { name: "Money", icon: <AttachMoneyIcon />, import: "AttachMoney" },
  { name: "Star", icon: <StarIcon />, import: "Star" },
  { name: "Like", icon: <FavoriteIcon color="action" />, import: "Favorite" }, // Example duplicate for count
] as const;

// # components
function IconCard({
  icon,
  importName,
}: {
  icon: React.ReactNode;
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
          boxShadow: shadows.lg,
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

export default function MuiIconsDemo() {
  return (
    <Stack spacing={2}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h6" fontWeight={600}>
          Material UI Icons
        </Typography>
        <Chip
          label="@mui/icons-material"
          color="secondary"
          size="small"
          sx={{ fontFamily: "monospace" }}
        />
      </Stack>

      <Typography variant="body2" color="text.secondary">
        Comprehensive set of material design icons. Sample set of 50 common
        icons.
      </Typography>

      <Grid container spacing={2}>
        {MUI_ICONS.slice(0, 50).map((icon, index) => (
          <Grid
            size={{ xs: 6, sm: 4, md: 2, lg: 2 }}
            key={`${icon.name}-${index}`}
            display="flex"
            justifyContent="center"
          >
            <IconCard icon={icon.icon} importName={icon.import} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}
