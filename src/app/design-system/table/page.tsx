import { Container, Divider, Stack, Typography } from "@mui/material";
import { TableBasicDemo, TableDataDemo } from "@/ui/design-system/table";

export default function TablePage() {
  return (
    <Container sx={{ p: 4 }} maxWidth="xl">
      <Stack spacing={4}>
        {/* Basic Table */}
        <Stack spacing={2}>
          <Typography variant="h6" fontWeight={600}>
            Basic Table
          </Typography>
          <Typography variant="body2" color="text.secondary">
            A simple example of a standard Material UI table with sorting and
            selection disabled.
          </Typography>
          <TableBasicDemo />
        </Stack>

        <Divider />

        {/* Data Table */}
        <Stack spacing={2}>
          <Typography variant="h6" fontWeight={600}>
            Data Table
          </Typography>
          <Typography variant="body2" color="text.secondary">
            A comprehensive data table example using{" "}
            <code>material-react-table</code>, featuring sorting, filtering, and
            pagination out of the box.
          </Typography>
          <TableDataDemo />
        </Stack>
      </Stack>
    </Container>
  );
}
