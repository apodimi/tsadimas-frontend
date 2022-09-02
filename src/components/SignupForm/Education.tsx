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

const FormFields = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event: any) => {
    setAge(event.target.value);
  };
  return (
    <>
      <Paper variant="outlined" sx={{ p: 4 }}>
        <Grid container gap={2} direction="column">
          <Grid item>
            <TextField
              margin="normal"
              required
              fullWidth
              name="uni"
              label="Ίδρυμα"
              type="uni"
              id="uni"
            />
          </Grid>
          <Grid item>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Επίπεδο</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Επίπεδο"
                onChange={handleChange}
              >
                <MenuItem value={"Προπτυχιακό"}>Προπτυχιακό</MenuItem>
                <MenuItem value={"Μεταπτυχιακό"}>Μεταπτυχιακό</MenuItem>
                <MenuItem value={"Διδακτορικό"}>Διδακτορικό</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item>
            <TextField
              margin="normal"
              required
              fullWidth
              name="duration"
              label="Διάρκεια"
              type="duration"
              id="duration"
            />
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

const Education = () => {
  return (
    <main>
      <Grid container gap={2} direction="column">
        <Grid item>{FormFields()}</Grid>
        <Grid item>
          <Button color="primary" variant="contained" fullWidth>
            <AddIcon />
          </Button>
        </Grid>
      </Grid>
    </main>
  );
};

export default Education;
