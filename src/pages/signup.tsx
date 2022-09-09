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
  TextField,
  Typography,
} from "@mui/material";
import StudentInfo from "../components/SignupForm/StudentInfo";
import Education from "../components/SignupForm/Education";
import { Controller, useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import Experience from "../components/SignupForm/Experience";
import Scholarship from "../components/SignupForm/Scholarship";

const steps = ["Στοιχεία Φοιτητή", "Σπουδές", "Εμπειρία", "Υποτροφίες"];

interface FormFields {
  firstName: string;
  lastName: string;
  uni: string;
  level: string;
  duration: string;
  experience: string;
  scholarship: string;
}

const getStepContent = (step: any, control: any) => {
  switch (step) {
    case 0:
      return <StudentInfo control={control} />;
    case 1:
      return <Education control={control} />;
    case 2:
      return <Experience control={control} />;
    case 3:
      return <Scholarship control={control} />;
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

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormFields>({
    mode: "onChange",
    defaultValues: {
      firstName: "",
      lastName: "",
      uni: "",
      level: "",
      duration: "",
      experience: "",
      scholarship: "",
    },
  });

  const onSubmit = (data: FormFields) => {
    console.log(data);
  };

  return (
    <main>
      <Container component="main" maxWidth="sm" sx={{ mb: 4, p: 10 }}>
        <Typography component="h1" variant="h4" align="center">
          Εγγραφή
        </Typography>
        <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Επιτυχής Εγγραφή
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep, control)}
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
                  disabled={!isValid}
                  type="submit"
                  sx={{ mt: 3, ml: 1, textTransform: "none" }}
                >
                  {activeStep === steps.length - 1 ? "Ολοκλήρωση" : "Επόμενο"}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Box>
      </Container>
      <DevTool control={control} /> {/* set up the dev tool */}
    </main>
  );
};

export default Signup;

export const Head: HeadFC = () => <title>Εγγραφή</title>;
