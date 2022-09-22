import { Box, Container, Paper, Typography } from "@mui/material";
import React from "react";

export const California = () => {
  return (
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
            California
          </Typography>
          {/* <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            Something short and leading about the collection below—its contents,
            the creator, etc. Make it short and sweet, but not too short so
            folks don&apos;t simply skip over it entirely.
          </Typography> */}
        </Container>
        <Box flexDirection="row" display="flex">
          <Container maxWidth="md">
            <Paper elevation={10}>fd</Paper>
          </Container>
          <Container maxWidth="md" sx={{ width: "90%" }}>
            bg
          </Container>
        </Box>
      </Box>
    </main>
  );
};
