"use client";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

// # components
export default function CardBasicDemo() {
  return (
    <Stack spacing={2}>
      <Typography variant="subtitle2" color="text.secondary">
        Simple card with content and actions.
      </Typography>

      <Paper
        elevation={0}
        sx={{ p: 4, border: 1, borderColor: "divider", borderRadius: 2 }}
      >
        <Card sx={{ minWidth: 275, maxWidth: 400 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Word of the Day
            </Typography>
            <Typography variant="h5" component="div">
              be{bull}nev{bull}o{bull}lent
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              adjective
            </Typography>
            <Typography variant="body2">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="sm">Learn More</Button>
          </CardActions>
        </Card>
      </Paper>
    </Stack>
  );
}

const bull = (
  <span
    style={{
      display: "inline-block",
      margin: "0 2px",
      transform: "scale(0.8)",
    }}
  >
    •
  </span>
);
