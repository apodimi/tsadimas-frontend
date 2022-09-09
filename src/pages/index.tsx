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
} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import { useAuth0 } from "@auth0/auth0-react";

const IndexPage = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  React.useEffect(() => {
    if (!isAuthenticated) {
      loginWithRedirect();
    }
  });

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
            {!isAuthenticated && (
              <Button
                type="submit"
                fullWidth
                size="large"
                variant="contained"
                onClick={loginWithRedirect}
                sx={{ mt: 3, mb: 2, textTransform: "none" }}
              >
                Σύνδεση
              </Button>
            )}
          </Box>
        </Box>
      </Container>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Σύνδεση</title>;
