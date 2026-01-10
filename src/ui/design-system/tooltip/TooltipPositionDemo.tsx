"use client";

import { Button, Grid, Paper, Stack, Tooltip, Typography } from "@mui/material";

// # components
export default function TooltipPositionDemo() {
  return (
    <Stack spacing={2}>
      <Typography variant="subtitle2" color="text.secondary">
        Tooltips appear on hover and can be positioned around the target.
      </Typography>

      <Paper
        elevation={0}
        sx={{ p: 4, border: 1, borderColor: "divider", borderRadius: 2 }}
      >
        <Grid container justifyContent="center" spacing={2}>
          <Grid>
            <Tooltip title="Top Start" placement="top-start">
              <Button>Top Start</Button>
            </Tooltip>
            <Tooltip title="Top" placement="top">
              <Button>Top</Button>
            </Tooltip>
            <Tooltip title="Top End" placement="top-end">
              <Button>Top End</Button>
            </Tooltip>
          </Grid>
        </Grid>
        <Grid container justifyContent="center" spacing={2}>
          <Grid
            size={{ xs: 6 }}
            container
            direction="column"
            alignItems="flex-end"
            spacing={1}
          >
            <Grid>
              <Tooltip title="Left Start" placement="left-start">
                <Button>Left Start</Button>
              </Tooltip>
            </Grid>
            <Grid>
              <Tooltip title="Left" placement="left">
                <Button>Left</Button>
              </Tooltip>
            </Grid>
            <Grid>
              <Tooltip title="Left End" placement="left-end">
                <Button>Left End</Button>
              </Tooltip>
            </Grid>
          </Grid>
          <Grid
            size={{ xs: 6 }}
            container
            direction="column"
            alignItems="flex-start"
            spacing={1}
          >
            <Grid>
              <Tooltip title="Right Start" placement="right-start">
                <Button>Right Start</Button>
              </Tooltip>
            </Grid>
            <Grid>
              <Tooltip title="Right" placement="right">
                <Button>Right</Button>
              </Tooltip>
            </Grid>
            <Grid>
              <Tooltip title="Right End" placement="right-end">
                <Button>Right End</Button>
              </Tooltip>
            </Grid>
          </Grid>
        </Grid>
        <Grid container justifyContent="center" spacing={2}>
          <Grid>
            <Tooltip title="Bottom Start" placement="bottom-start">
              <Button>Bottom Start</Button>
            </Tooltip>
            <Tooltip title="Bottom" placement="bottom">
              <Button>Bottom</Button>
            </Tooltip>
            <Tooltip title="Bottom End" placement="bottom-end">
              <Button>Bottom End</Button>
            </Tooltip>
          </Grid>
        </Grid>
      </Paper>
    </Stack>
  );
}
