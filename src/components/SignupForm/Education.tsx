import * as React from "react";
import {
  Button,
  Fab,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Controller } from "react-hook-form";

const FormFields = (control: any) => {
  const [age, setAge] = React.useState("");

  const handleChange = (event: any) => {
    setAge(event.target.value);
  };
  return (
    <>
      <Paper variant="outlined" sx={{ p: 4 }}>
        <Grid container gap={2} direction="column">
          <Grid item>
            <Controller
              control={control}
              name="uni"
              rules={{ required: "Το πεδίο απαιτείται" }}
              render={({
                field,
                fieldState: { invalid, isTouched, isDirty, error },
                formState,
              }) => (
                <TextField
                  margin="normal"
                  fullWidth
                  label="Ίδρυμα"
                  error={!!error}
                  helperText={error?.message}
                  type="uni"
                  id="uni"
                  {...field}
                />
              )}
            />
          </Grid>
          <Grid item>
            <Controller
              control={control}
              name="level"
              rules={{ required: "Το πεδίο απαιτείται" }}
              render={({
                field,
                fieldState: { invalid, isTouched, isDirty, error },
                formState,
              }) => (
                <FormControl fullWidth>
                  <InputLabel id="level">Επίπεδο</InputLabel>
                  <Select
                    labelId="level"
                    id="level"
                    error={!!error}
                    label="Επίπεδο"
                    {...field}
                  >
                    <MenuItem value={"Προπτυχιακό"}>Προπτυχιακό</MenuItem>
                    <MenuItem value={"Μεταπτυχιακό"}>Μεταπτυχιακό</MenuItem>
                    <MenuItem value={"Διδακτορικό"}>Διδακτορικό</MenuItem>
                  </Select>
                </FormControl>
              )}
            />
          </Grid>
          <Grid item>
            <Controller
              control={control}
              name="duration"
              rules={{ required: "Το πεδίο απαιτείται" }}
              render={({
                field,
                fieldState: { invalid, isTouched, isDirty, error },
                formState,
              }) => (
                <TextField
                  margin="normal"
                  fullWidth
                  label="Διάρκεια"
                  error={!!error}
                  helperText={error?.message}
                  type="duration"
                  id="duration"
                  {...field}
                />
              )}
            />
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

const Education = ({ control }: any) => {
  return (
    <main>
      <Grid container gap={2} direction="column">
        <Grid item>{FormFields(control)}</Grid>
        <Grid item></Grid>
      </Grid>
    </main>
  );
};

export default Education;
