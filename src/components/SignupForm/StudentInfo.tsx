import * as React from "react";
import { Grid, TextField } from "@mui/material";

const StudentInfo = () => {
  return (
    <main>
      <Grid container gap={2} direction="column">
        <Grid item xs={6}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="lastName"
            label="'Ονομα"
            name="lastName"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            margin="normal"
            required
            fullWidth
            name="lastName"
            label="Επώνυμο"
            type="lastName"
            id="lastName"
          />
        </Grid>
      </Grid>
    </main>
  );
};

export default StudentInfo;
