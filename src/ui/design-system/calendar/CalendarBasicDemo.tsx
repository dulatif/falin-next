"use client";

import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
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

const EVENTS = [
  {
    title: "Team Meeting",
    date: new Date().toISOString().split("T")[0],
    classNames: "fc-event-primary",
  },
  {
    title: "Project Launch",
    date: new Date(Date.now() + 86400000 * 2).toISOString().split("T")[0],
    classNames: "fc-event-success",
  },
  {
    title: "Review",
    date: new Date(Date.now() - 86400000 * 5).toISOString().split("T")[0],
    classNames: "fc-event-warning",
  },
  {
    title: "Conference",
    date: new Date(Date.now() + 86400000 * 10).toISOString().split("T")[0],
    classNames: "fc-event-info",
  },
  {
    title: "Quarterly Planning Workshop",
    start: new Date(Date.now() + 86400000 * 12).toISOString().split("T")[0],
    end: new Date(Date.now() + 86400000 * 15).toISOString().split("T")[0],
    classNames: "fc-event-danger",
  },
];

// # components
export default function CalendarBasicDemo() {
  const theme = useTheme();
  const calendarRef = useRef<FullCalendar>(null);
  const [currentTitle, setCurrentTitle] = useState("");
  const [currentView, setCurrentView] = useState("dayGridMonth");

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
        Standard month view calendar with basic events.
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
              onClick={() => handleChangeView("dayGridWeek")}
              variant={currentView === "dayGridWeek" ? "contained" : "text"}
            >
              Week
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
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            headerToolbar={false}
            events={EVENTS}
            height={600}
            selectable={true}
            datesSet={() => updateTitle()}
          />
        </Box>
      </Paper>
    </Stack>
  );
}
