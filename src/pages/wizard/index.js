import {
  Button,
  FormControl,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
} from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import ProgressStepper from "./components/ProgressStepper";
import { Step1 } from "./steps/Step1";
import { Step2 } from "./steps/Step2";
import { Step3 } from "./steps/Step3";
import { Step4 } from "./steps/Step4";
import { Step5 } from "./steps/Step5";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function WizardPage() {
  const navigate = useNavigate();

  const [stepNumber, setStepNumber] = React.useState(0);
  const [yourCurrentState, setYourCurrentState] = React.useState(null);

  const handleStepNumberCompleted = (num) => {
    setStepNumber(num);
  };

  const getDocuments = (moveToState) => {
    console.info(yourCurrentState, moveToState);
    // prettier-ignore
    if(yourCurrentState === "Florida" && moveToState === 'Alaska' || yourCurrentState ==="North Carolina" && moveToState === 'Alaska' || yourCurrentState ==="Alabama" && moveToState === 'Alaska' ) {
      console.log('a')
      navigate("/alaska");
      
    } else if(yourCurrentState === "Florida" && moveToState === 'California' || yourCurrentState ==="North Carolina" && moveToState === 'California' || yourCurrentState ==="Alabama" && moveToState === 'California') {
      console.log('c')
      navigate("/california");
      
    } else {

    }
  };

  return (
    <ThemeProvider theme={theme}>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            // pb: 6,
          }}
        >
          <Container maxWidth="md">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Instructions Title
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks don&apos;t simply skip over it entirely.
            </Typography>
          </Container>
        </Box>
      </main>
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
          <ProgressStepper step={stepNumber} />
          {/* Questions start here */}
          {stepNumber === 0 && (
            <Step1
              stepNumberCompleted={(num) => handleStepNumberCompleted(num)}
            />
          )}

          {stepNumber === 1 && (
            <Step2
              stepNumberCompleted={(num) => handleStepNumberCompleted(num)}
            />
          )}

          {stepNumber === 2 && (
            <Step3
              stepNumberCompleted={(num) => handleStepNumberCompleted(num)}
            />
          )}

          {stepNumber === 3 && (
            <Step4
              stepNumberCompleted={(num) => handleStepNumberCompleted(num)}
              currentState={(state) => setYourCurrentState(state)}
            />
          )}

          {stepNumber === 4 && (
            <Step5
              stepNumberCompleted={(num) => handleStepNumberCompleted(num)}
              movingToState={(state) => getDocuments(state)}
            />
          )}
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
