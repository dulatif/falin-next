"use client";

import LaunchIcon from "@mui/icons-material/Launch";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

// # components
export default function IconResources() {
  return (
    <Stack spacing={2}>
      <Typography variant="h6" fontWeight={600}>
        Resources
      </Typography>
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Card variant="outlined" sx={{ height: "100%" }}>
            <CardContent>
              <Stack spacing={2}>
                <Typography variant="subtitle1" fontWeight={600}>
                  Material UI Icons
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Material Design icons are the official icon set for using with
                  MUI. Access over 2,000 icons from the material design library.
                </Typography>
                <Box>
                  <Button
                    component="a"
                    href="https://mui.com/material-ui/material-icons/"
                    target="_blank"
                    rel="noopener noreferrer"
                    endIcon={<LaunchIcon />}
                    variant="outlined"
                  >
                    Browse MUI Icons
                  </Button>
                </Box>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Card variant="outlined" sx={{ height: "100%" }}>
            <CardContent>
              <Stack spacing={2}>
                <Typography variant="subtitle1" fontWeight={600}>
                  Phosphor Icons
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Phosphor is a flexible icon family for interfaces, diagrams,
                  presentations, and more. This project uses the React
                  implementation.
                </Typography>
                <Box>
                  <Button
                    component="a"
                    href="https://phosphoricons.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    endIcon={<LaunchIcon />}
                    variant="outlined"
                  >
                    Browse Phosphor Icons
                  </Button>
                </Box>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Stack>
  );
}
