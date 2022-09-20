import { Box, Typography } from "@mui/material";
import React from "react";
import HomeFeaturedPost from "./components/HomeFeaturedPost";

function Home() {
  return (
    <div>
      <Box sx={{ margin: 5 }}>
        <HomeFeaturedPost />
      </Box>
    </div>
  );
}

export default Home;
