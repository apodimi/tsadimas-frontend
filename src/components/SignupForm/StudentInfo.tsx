import * as React from "react";
import { Grid, TextField } from "@mui/material";
import { Controller } from "react-hook-form";

const StudentInfo = ({ control }: any) => {
  return (
    <main>
      <Grid container gap={2} direction="column">
        <Grid item xs={6}>
          <Controller
            control={control}
            name="firstName"
            defaultValue=""
            rules={{ required: "Το πεδίο απαιτείται" }}
            render={({ field, fieldState: { error } }) => (
              <TextField
                margin="normal"
                required
                error={!!error}
                helperText={error?.message}
                fullWidth
                label="'Ονομα"
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            control={control}
            name="lastName"
            rules={{ required: "Το πεδίο απαιτείται" }}
            render={({
              field,
              fieldState: { invalid, isTouched, isDirty, error },
              formState,
            }) => (
              <TextField
                margin="normal"
                required
                fullWidth
                error={!!error}
                helperText={error?.message}
                label="Επώνυμο"
                type="lastName"
                id="lastName"
                {...field}
              />
            )}
          />
        </Grid>
      </Grid>
    </main>
  );
};

export default StudentInfo;
