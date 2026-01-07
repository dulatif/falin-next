"use client";

import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import { Box, Paper, Stack, Typography } from "@mui/material";
import { useRef } from "react";

// # entity
import { styled } from "@mui/material/styles";

const CalendarWrapper = styled(Box)(({ theme }) => ({
  "& .fc": {
    fontFamily: theme.typography.fontFamily,
    "--fc-border-color": theme.palette.divider,
    "--fc-page-bg-color": "transparent",
    "--fc-neutral-bg-color": theme.palette.background.default,
    "--fc-list-event-hover-bg-color": theme.palette.action.hover,
    "--fc-today-bg-color": theme.palette.action.selected,
  },
  "& .fc-col-header-cell": {
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(1),
    borderColor: theme.palette.divider,
  },
  "& .fc-daygrid-day": {
    borderColor: theme.palette.divider,
  },
  "& .fc-toolbar-title": {
    fontSize: theme.typography.h6.fontSize,
    fontWeight: 700,
  },
  "& .fc-button": {
    backgroundColor: theme.palette.primary.main,
    borderColor: theme.palette.primary.main,
    textTransform: "capitalize",
    fontWeight: 600,
    boxShadow: "none",
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
      borderColor: theme.palette.primary.dark,
    },
    "&:disabled": {
       backgroundColor: theme.palette.action.disabledBackground,
       borderColor: theme.palette.action.disabledBackground,
       color: theme.palette.text.disabled,
    },
    "&:focus": {
        boxShadow: `0 0 0 0.2rem ${theme.palette.primary.light}`
    }
  },
  "& .fc-button-primary:not(:disabled).fc-button-active": {
     backgroundColor: theme.palette.secondary.main,
     borderColor: theme.palette.secondary.main,
  },
  "& .fc-event": {
      borderRadius: theme.shape.borderRadius,
      padding: "2px 4px",
      fontSize: "0.85rem",
      border: "none"
  }
}));

const EVENTS = [
  { title: "Team Meeting", date: new Date().toISOString().split("T")[0], color: "#6366f1" },
  { title: "Project Launch", date: new Date(Date.now() + 86400000 * 2).toISOString().split("T")[0], color: "#10b981" },
  { title: "Review", date: new Date(Date.now() - 86400000 * 5).toISOString().split("T")[0], color: "#f59e0b" },
  { title: "Conference", date: new Date(Date.now() + 86400000 * 10).toISOString().split("T")[0], color: "#3b82f6" },
  {
    title: "Quarterly Planning Workshop",
    start: new Date(Date.now() + 86400000 * 12).toISOString().split("T")[0],
    end: new Date(Date.now() + 86400000 * 15).toISOString().split("T")[0],
    color: "#ec4899"
  },
];

// # components
export default function CalendarBasicDemo() {
  const calendarRef = useRef<FullCalendar>(null);

  return (
    <Stack spacing={2}>
      <Typography variant="subtitle2" color="text.secondary">
        Standard month view calendar with basic events.
      </Typography>

      <Paper elevation={0} sx={{ p: 2, border: 1, borderColor: "divider", borderRadius: 2 }}>
        <CalendarWrapper>
            <FullCalendar
                ref={calendarRef}
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                headerToolbar={{
                    left: "prev,next today",
                    center: "title",
                    right: "dayGridMonth,dayGridWeek"
                }}
                events={EVENTS}
                height={600}
                selectable={true}
            />
        </CalendarWrapper>
      </Paper>
    </Stack>
  );
}
