import * as React from "react";
import { HeadFC, Link } from "gatsby";
import {
  Typography,
  Container,
  CssBaseline,
  Box,
  Avatar,
  TextField,
  Button,
  Grid,
} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";

const IndexPage = () => {
  return (
    <main>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 2, bgcolor: "primary", width: 56, height: 56 }}>
            <LoginIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Σύνδεση
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Κωδικός"
              type="password"
              id="password"
              autoComplete="current-password"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, textTransform: "none" }}
            >
              Σύνδεση
            </Button>
            <Grid container>
              <Grid item xs>
                {/* <Link href="#" variant="body2">
                  Forgot password?
                </Link> */}
              </Grid>
              <Grid item>
                <Link to="/signup">{"Δεν έχεις λογαριασμό? Εγγραφή"}</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Σύνδεση</title>;
