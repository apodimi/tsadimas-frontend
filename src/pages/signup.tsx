import * as React from "react";
import type { HeadFC } from "gatsby";
import {
  Box,
  Button,
  Container,
  Paper,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import StudentInfo from "../components/SignupForm/StudentInfo";
import Education from "../components/SignupForm/Education";

const steps = ["Στοιχεία Φοιτητή", "Σπουδές", "Εμπειρία"];

const getStepContent = (step: any) => {
  switch (step) {
    case 0:
      return <StudentInfo />;
    case 1:
      return <Education />;
    case 2:
      return "Review";
    default:
      throw new Error("Unknown step");
  }
};

const Signup = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <main>
      <Container component="main" maxWidth="sm" sx={{ mb: 4, p: 10 }}>
        <Typography component="h1" variant="h4" align="center">
          Σύνδεση
        </Typography>
        <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <React.Fragment>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Thank you for your order.
              </Typography>
              <Typography variant="subtitle1">
                Your order number is #2001539. We have emailed your order
                confirmation, and will send you an update when your order has
                shipped.
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                {activeStep !== 0 && (
                  <Button
                    onClick={handleBack}
                    sx={{ mt: 3, ml: 1, textTransform: "none" }}
                  >
                    Πίσω
                  </Button>
                )}

                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1, textTransform: "none" }}
                >
                  {activeStep === steps.length - 1 ? "Ολοκλήρωση" : "Επόμενο"}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </React.Fragment>
      </Container>
    </main>
  );
};

export default Signup;

export const Head: HeadFC = () => <title>Εγγραφή</title>;
