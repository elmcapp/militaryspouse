import { Box, Typography } from "@mui/material";
import React from "react";
import HomeFeaturedPost from "../components/HomeFeaturedPost";

function Home() {
  return (
    <div>
      <Box sx={{ margin: 5 }}>
        {/* <Typography variant="h3" sx={{ fontWeight: "bold" }}>
          Military Spouse Interstate License Recognition Options
        </Typography> */}

        <HomeFeaturedPost />
      </Box>
    </div>
  );
}

export default Home;
