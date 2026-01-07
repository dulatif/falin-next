"use client";

import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import FullCalendar from "@fullcalendar/react";
import { Box, Paper, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const CalendarWrapper = styled(Box)(({ theme }) => ({
  "& .fc": {
    fontFamily: theme.typography.fontFamily,
    "--fc-border-color": theme.palette.divider,
    "--fc-page-bg-color": "transparent",
    "--fc-neutral-bg-color": theme.palette.background.default,
  },
  "& .fc-tool-bar" : {
      marginBottom: theme.spacing(2)
  },
  "& .fc-button": {
    backgroundColor: theme.palette.background.paper,
    borderColor: theme.palette.divider,
    color: theme.palette.text.primary,
    textTransform: "capitalize",
    fontWeight: 600,
    boxShadow: "none",
    "&:hover": {
      backgroundColor: theme.palette.action.hover,
      borderColor: theme.palette.divider,
      color: theme.palette.text.primary,
    },
    "&.fc-button-active": {
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText
    }
  },
   "& .fc-timegrid-slot": {
       backgroundColor: theme.palette.background.paper
   }
}));

const TODAY = new Date();
const TOMORROW = new Date(TODAY);
TOMORROW.setDate(TODAY.getDate() + 1);

const EVENTS = [
  {
      title: "Morning Standup",
      start: new Date(TODAY.setHours(9, 0, 0)),
      end: new Date(TODAY.setHours(10, 0, 0)),
      backgroundColor: "#3b82f6",
      borderColor: "#3b82f6"
  },
  {
      title: "Client Call",
      start: new Date(TODAY.setHours(13, 0, 0)),
      end: new Date(TODAY.setHours(14, 30, 0)),
      backgroundColor: "#ef4444",
      borderColor: "#ef4444"
  },
  {
      title: "Code Review",
      start: new Date(TOMORROW.setHours(10, 30, 0)),
      end: new Date(TOMORROW.setHours(12, 0, 0)),
      backgroundColor: "#10b981",
      borderColor: "#10b981"
  },
];

export default function CalendarViewDemo() {
  return (
    <Stack spacing={2}>
      <Typography variant="subtitle2" color="text.secondary">
        Week and time grid views for scheduling.
      </Typography>

      <Paper elevation={0} sx={{ p: 2, border: 1, borderColor: "divider", borderRadius: 2 }}>
        <CalendarWrapper>
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="timeGridWeek"
                headerToolbar={{
                    left: "prev,next today",
                    center: "title",
                    right: "dayGridMonth,timeGridWeek,timeGridDay"
                }}
                events={EVENTS}
                height={600}
                allDaySlot={false}
                slotMinTime="08:00:00"
                slotMaxTime="20:00:00"
            />
        </CalendarWrapper>
      </Paper>
    </Stack>
  );
}
