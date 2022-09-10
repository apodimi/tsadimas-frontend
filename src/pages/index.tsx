import * as React from "react";
import { HeadFC, Link, navigate } from "gatsby";
import {
  Typography,
  Container,
  CssBaseline,
  Box,
  Avatar,
  TextField,
  Button,
  Grid,
  CircularProgress,
} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import { useAuth0 } from "@auth0/auth0-react";

const IndexPage = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

  return (
    <main>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex" }}>
            {!isAuthenticated && (
              <>
                <Container component="main" maxWidth="sm">
                  <CssBaseline />
                  <Box
                    sx={{
                      marginTop: 8,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Avatar sx={{ m: 2, height: 60, width: 60 }}>
                      <LoginIcon sx={{ m: 2, height: 40, width: 40 }} />
                    </Avatar>
                    <Typography component="h1" variant="h3" fontWeight="bold">
                      Προφίλ φοιτητή
                    </Typography>
                    <Box sx={{ mt: 1, width: "100%" }}>
                      <Button
                        fullWidth
                        variant="contained"
                        onClick={loginWithRedirect}
                        sx={{ mt: 3, mb: 2, textTransform: "none" }}
                        size="large"
                      >
                        Σύνδεση
                      </Button>
                    </Box>
                  </Box>
                </Container>
              </>
            )}
          </Box>
        </Box>
      </Container>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Σύνδεση</title>;
