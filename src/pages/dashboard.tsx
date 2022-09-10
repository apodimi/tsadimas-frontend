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
  Stack,
  Divider,
  Card,
  CardContent,
} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import AddIcon from "@mui/icons-material/Add";
import CardDash from "../components/Dashboard/Card";
import ModeEditIcon from "@mui/icons-material/ModeEdit";

const Dashboard = () => {
  const { user } = useAuth0();
  console.log(user);
  return (
    <main>
      <Container component="main" maxWidth="xl" sx={{ my: 5 }}>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item xs={6}>
            <Stack direction="row" spacing={2}>
              <Avatar>
                {user?.given_name?.charAt(0)}
                {user?.family_name?.charAt(0)}
              </Avatar>
              <Typography variant="h6" fontWeight="bolder">
                {user?.name}
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={6} textAlign="right">
            <Button
              variant="contained"
              sx={{ mb: 2, textTransform: "none" }}
              size="large"
            >
              Αποσύνδεση
            </Button>
          </Grid>
        </Grid>
        <Divider variant="fullWidth" sx={{ my: 2 }} />
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h5" component="div" sx={{ my: 2 }}>
              Στοιχεία Επικοινωνίας
            </Typography>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Email
            </Typography>
            <Typography variant="h6" component="div">
              it219139@hua.gr
            </Typography>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Τηλέφωνο
            </Typography>
            <Typography variant="h6" component="div">
              6666666666
            </Typography>
          </CardContent>
        </Card>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ mt: 10, mb: 2 }}
        >
          <Grid item xs={6}>
            <Typography variant="h5" fontWeight="bolder">
              Σπουδές
            </Typography>
          </Grid>
          <Grid item xs={6} textAlign="right">
            <Button
              variant="contained"
              sx={{ mb: 2, textTransform: "none" }}
              size="large"
            >
              <AddIcon sx={{ mr: 2 }} />
              Προσθήκη
            </Button>
          </Grid>
        </Grid>
        <CardDash />
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ mt: 10, mb: 2 }}
        >
          <Grid item xs={6}>
            <Typography variant="h5" fontWeight="bolder">
              Υποτροφίες
            </Typography>
          </Grid>
          <Grid item xs={6} textAlign="right">
            <Button
              variant="contained"
              sx={{ mb: 2, textTransform: "none" }}
              size="large"
            >
              <AddIcon sx={{ mr: 2 }} />
              Προσθήκη
            </Button>
          </Grid>
        </Grid>
        <CardDash />
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ mt: 10, mb: 2 }}
        >
          <Grid item xs={6}>
            <Typography variant="h5" fontWeight="bolder">
              Εμπειρία
            </Typography>
          </Grid>
          <Grid item xs={6} textAlign="right">
            <Button
              variant="contained"
              sx={{ mb: 2, textTransform: "none" }}
              size="large"
            >
              <ModeEditIcon sx={{ mr: 2 }} />
              Επεξεργασία
            </Button>
          </Grid>
        </Grid>
        <Card variant="outlined">
          <CardContent>
            <Typography paragraph>
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
              over medium-high heat. Add chicken, shrimp and chorizo, and cook,
              stirring occasionally until lightly browned, 6 to 8 minutes.
              Transfer shrimp to a large plate and set aside, leaving chicken
              and chorizo in the pan. Add pimentón, bay leaves, garlic,
              tomatoes, onion, salt and pepper, and cook, stirring often until
              thickened and fragrant, about 10 minutes. Add saffron broth and
              remaining 4 1/2 cups chicken broth; bring to a boil.
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </main>
  );
};

export default withAuthenticationRequired(Dashboard);

export const Head: HeadFC = () => <title>Πίνακας Ελέγχου</title>;
