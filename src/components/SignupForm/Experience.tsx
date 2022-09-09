import * as React from "react";
import { Grid, TextField } from "@mui/material";
import { Controller } from "react-hook-form";

const Experience = ({ control }: any) => {
  return (
    <main>
      <Grid container gap={2} direction="column">
        <Grid item xs={6}>
          <Controller
            control={control}
            name="experience"
            defaultValue=""
            rules={{ required: "Το πεδίο απαιτείται" }}
            render={({ field, fieldState: { error } }) => (
              <TextField
                margin="normal"
                multiline
                rows={4}
                error={!!error}
                helperText={error?.message}
                fullWidth
                label="Εμπειρία"
                {...field}
              />
            )}
          />
        </Grid>
      </Grid>
    </main>
  );
};

export default Experience;
