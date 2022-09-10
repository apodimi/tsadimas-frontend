import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import MoreVertIcon from "@mui/icons-material";
import { Stack } from "@mui/system";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";

function CardDash() {
  return (
    <Card variant="outlined" sx={{ minWidth: 275 }}>
      <CardContent>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={5}>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Ίδρυμα
            </Typography>
            <Typography variant="h5" component="div">
              Χαροκόπειο Πανεπιστήμιο
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Επίπεδο
            </Typography>
            <Typography variant="h5" component="div">
              Προπτυχιακό
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Διάρκεια
            </Typography>
            <Typography variant="h5" component="div">
              8 Εξάμηνα
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <Stack direction="row" spacing={2} alignItems="center">
              <IconButton aria-label="edit">
                <ModeEditIcon />
              </IconButton>
              <IconButton aria-label="delete" color="error">
                <DeleteIcon />
              </IconButton>
            </Stack>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default CardDash;
