"use client";

import LaunchIcon from "@mui/icons-material/Launch";
import {
  Box,
  Button,
  Card,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";

// # components
export default function IconResources() {
  return (
    <Stack spacing={2}>
      <Typography variant="h6" fontWeight={600}>
        Icon Resources
      </Typography>

      <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
        <Card variant="outlined" sx={{ flex: 1 }}>
          <CardContent>
            <Stack spacing={2}>
              <Box>
                <Typography variant="subtitle1" fontWeight={600}>
                  Material UI Icons
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Official Material Design icons for React.
                </Typography>
              </Box>
              <Button
                component="a"
                href="https://mui.com/material-ui/material-icons/"
                target="_blank"
                rel="noopener noreferrer"
                variant="outlined"
                endIcon={<LaunchIcon />}
                size="small"
              >
                View All Icons
              </Button>
            </Stack>
          </CardContent>
        </Card>

        <Card variant="outlined" sx={{ flex: 1 }}>
          <CardContent>
            <Stack spacing={2}>
              <Box>
                <Typography variant="subtitle1" fontWeight={600}>
                  Phosphor Icons
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Flexible icon family with 6 weights.
                </Typography>
              </Box>
              <Button
                component="a"
                href="https://phosphoricons.com/"
                target="_blank"
                rel="noopener noreferrer"
                variant="outlined"
                endIcon={<LaunchIcon />}
                size="small"
              >
                Visit Library
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </Stack>
    </Stack>
  );
}
