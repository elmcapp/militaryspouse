import * as React from "react";
import PropTypes from "prop-types";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const HomeFeaturedPost = () => {
  return (
    <Paper
      sx={{
        position: "relative",
        backgroundColor: "grey.800",
        color: "#fff",
        mb: 4,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage:
          "url(https://qtxasset.com/cdn-cgi/image/w=384,h=216,f=auto,fit=crop,g=0.5x0.5/https://qtxasset.com/quartz/qcloud5/media/image/fiercehealthcare/1638893797/GettyImages-1265084933.jpg?VersionId=rAc20HiCFgrbX1vrOiRUFLm8LCkFyhRf)",
      }}
    >
      {/* Increase the priority of the hero background image */}
      {
        <img
          style={{ display: "none" }}
          src="url(https://qtxasset.com/cdn-cgi/image/w=384,h=216,f=auto,fit=crop,g=0.5x0.5/https://qtxasset.com/quartz/qcloud5/media/image/fiercehealthcare/1638893797/GettyImages-1265084933.jpg?VersionId=rAc20HiCFgrbX1vrOiRUFLm8LCkFyhRf)"
        />
      }
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: "rgba(0,0,0,.3)",
        }}
      />
      <Grid container>
        <Grid item md={6}>
          <Box
            sx={{
              position: "relative",
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              gutterBottom
            >
              Military Spouse Interstate License Recognition Options
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              Use the wizard to find requirements and documents to transfer your
              field license to your current state.
            </Typography>
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              sx={{ padding: 2 }}
            >
              Start Here
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default HomeFeaturedPost;
