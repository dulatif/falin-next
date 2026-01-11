"use client";

import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import {
  Box,
  Button,
  ButtonGroup,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { CaretLeft, CaretRight } from "phosphor-react";
import React, { useRef, useState } from "react";
import styles from "./Calendar.module.scss";

const TODAY = new Date();
const TOMORROW = new Date(TODAY);
TOMORROW.setDate(TODAY.getDate() + 1);

const EVENTS = [
  {
    title: "Morning Standup",
    start: new Date(new Date().setHours(9, 0, 0)),
    end: new Date(new Date().setHours(10, 0, 0)),
    classNames: "fc-event-primary",
  },
  {
    title: "Client Call",
    start: new Date(new Date().setHours(13, 0, 0)),
    end: new Date(new Date().setHours(14, 30, 0)),
    classNames: "fc-event-danger",
  },
  {
    title: "Code Review",
    start: new Date(TOMORROW.setHours(10, 30, 0)),
    end: new Date(TOMORROW.setHours(12, 0, 0)),
    classNames: "fc-event-success",
  },
];

// # components
export default function CalendarViewDemo() {
  const theme = useTheme();
  const calendarRef = useRef<FullCalendar>(null);
  const [currentTitle, setCurrentTitle] = useState("");
  const [currentView, setCurrentView] = useState("timeGridWeek");

  const getCalendarApi = () => calendarRef.current?.getApi();

  const updateTitle = () => {
    const api = getCalendarApi();
    if (api) {
      setCurrentTitle(api.view.title);
    }
  };

  const handlePrev = () => {
    const api = getCalendarApi();
    if (api) {
      api.prev();
      updateTitle();
    }
  };

  const handleNext = () => {
    const api = getCalendarApi();
    if (api) {
      api.next();
      updateTitle();
    }
  };

  const handleToday = () => {
    const api = getCalendarApi();
    if (api) {
      api.today();
      updateTitle();
    }
  };

  const handleChangeView = (view: string) => {
    const api = getCalendarApi();
    if (api) {
      api.changeView(view);
      setCurrentView(view);
      updateTitle();
    }
  };

  return (
    <Stack spacing={2}>
      <Typography variant="subtitle2" color="text.secondary">
        Week and time grid views for scheduling.
      </Typography>

      <Paper
        elevation={0}
        sx={{ p: 2, border: 1, borderColor: "divider", borderRadius: 2 }}
      >
        {/* Custom MUI Toolbar */}
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ mb: 2 }}
        >
          {/* Left: Navigation */}
          <Stack direction="row" spacing={1} alignItems="center">
            <Button
              variant="text"
              color="inherit"
              data-shape="icon"
              onClick={handlePrev}
              size="sm"
            >
              <CaretLeft weight="bold" />
            </Button>
            <Button
              variant="text"
              color="inherit"
              data-shape="icon"
              onClick={handleNext}
              size="sm"
            >
              <CaretRight weight="bold" />
            </Button>
            <Button
              variant="text"
              color="inherit"
              size="sm"
              onClick={handleToday}
            >
              Today
            </Button>
          </Stack>

          {/* Center: Title */}
          <Typography variant="subtitle1" fontWeight={"semiBold"}>
            {currentTitle}
          </Typography>

          {/* Right: View Switcher */}
          <ButtonGroup variant="text" color="inherit">
            <Button
              onClick={() => handleChangeView("dayGridMonth")}
              variant={currentView === "dayGridMonth" ? "contained" : "text"}
            >
              Month
            </Button>
            <Button
              onClick={() => handleChangeView("timeGridWeek")}
              variant={currentView === "timeGridWeek" ? "contained" : "text"}
            >
              Week
            </Button>
            <Button
              onClick={() => handleChangeView("timeGridDay")}
              variant={currentView === "timeGridDay" ? "contained" : "text"}
            >
              Day
            </Button>
          </ButtonGroup>
        </Stack>

        <Box
          className={styles.Calendar}
          sx={
            {
              "--font-family": theme.typography.fontFamily,
              "--divider-color": theme.palette.divider,
              "--bg-default": theme.palette.background.default,
              "--action-hover": theme.palette.action.hover,
              "--action-selected": theme.palette.action.selected,
            } as React.CSSProperties
          }
        >
          <FullCalendar
            ref={calendarRef}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="timeGridWeek"
            headerToolbar={false}
            events={EVENTS}
            height={600}
            allDaySlot={false}
            slotMinTime="08:00:00"
            slotMaxTime="20:00:00"
            selectable={true}
            datesSet={() => updateTitle()}
          />
        </Box>
      </Paper>
    </Stack>
  );
}
