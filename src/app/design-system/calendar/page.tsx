import { Container, Divider, Stack, Typography } from "@mui/material";
import { CalendarBasicDemo, CalendarViewDemo } from "@/ui/design-system/calendar";

export default function CalendarPage() {
  return (
    <Container sx={{ p: 4 }} maxWidth="xl">
      <Stack spacing={4}>
        {/* Page Header */}
        <Stack spacing={1}>
          <Typography variant="h4" fontWeight={700} gutterBottom>
            Calendar
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Full-featured calendar component powered by FullCalendar.
          </Typography>
        </Stack>

        <Divider />

        {/* Basic Calendar */}
        <Stack spacing={2}>
          <Typography variant="h6" fontWeight={600}>
            Basic Month View
          </Typography>
           <Typography variant="body2" color="text.secondary">
            Displays events in a standard monthly grid.
          </Typography>
          <CalendarBasicDemo />
        </Stack>

        <Divider />

        {/* Time Grid Calendar */}
        <Stack spacing={2}>
          <Typography variant="h6" fontWeight={600}>
            Agenda & Time Grid
          </Typography>
           <Typography variant="body2" color="text.secondary">
            Switch between Month, Week, and Day views with time slots.
          </Typography>
          <CalendarViewDemo />
        </Stack>

      </Stack>
    </Container>
  );
}
