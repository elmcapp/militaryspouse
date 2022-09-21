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
  const [q1, setQ1] = React.useState("");
  const [q2, setQ2] = React.useState("");
  const [q3, setQ3] = React.useState("");
  const [q4, setQ4] = React.useState("");

  //   const handleChange = (event) => {
  //     setAge(event.target.value);
  //   };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
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
          <FormControl sx={{ m: 1, width: "100%", mt: 3 }}>
            <Stack spacing={2}>
              {/* Question 1 */}
              <Typography color="inherit" sx={{ fontStyle: "italic" }}>
                Are you currently a licensed RN or LPN in any US jurisdiction?
              </Typography>
              <Select
                displayEmpty
                value={q1}
                onChange={(event) => setQ1(event.target.value)}
                input={<OutlinedInput />}
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem disabled value="">
                  <em>Placeholder</em>
                </MenuItem>
                <MenuItem value={"yes"}>Yes</MenuItem>
                <MenuItem value={"no"}>No</MenuItem>
              </Select>

              {/* Question 2 */}
              <Typography sx={{ fontStyle: "italic" }}>
                Are you moving to another US jurisdiction, such as to another US
                state or territory?
              </Typography>
              <Select
                displayEmpty
                value={q2}
                onChange={(event) => setQ2(event.target.value)}
                input={<OutlinedInput />}
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem disabled value="">
                  <em>Placeholder</em>
                </MenuItem>
                <MenuItem value={"yes"}>Yes</MenuItem>
                <MenuItem value={"no"}>No</MenuItem>
              </Select>

              {/* Question 3 */}
              <Typography sx={{ fontStyle: "italic" }}>
                In what state are you currently licensed?
              </Typography>
              <Select
                displayEmpty
                value={q3}
                onChange={(event) => setQ3(event.target.value)}
                input={<OutlinedInput />}
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem disabled value="">
                  <em>Placeholder</em>
                </MenuItem>
                <MenuItem value={10}>North Carolina</MenuItem>
                <MenuItem value={20}>Florida</MenuItem>
                <MenuItem value={30}>Georgia</MenuItem>
              </Select>

              {/* Question 4 */}
              <Typography sx={{ fontStyle: "italic" }}>
                What state are you moving to?
              </Typography>
              <Select
                displayEmpty
                value={q4}
                onChange={(event) => setQ4(event.target.value)}
                input={<OutlinedInput />}
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem disabled value="">
                  <em>Placeholder</em>
                </MenuItem>
                <MenuItem value={10}>North Carolina</MenuItem>
                <MenuItem value={20}>Florida</MenuItem>
                <MenuItem value={30}>Georgia</MenuItem>
              </Select>
            </Stack>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Next
            </Button>
          </FormControl>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
