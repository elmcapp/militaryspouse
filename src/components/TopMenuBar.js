import { Button, Stack } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";

export default function TopMenuBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Stack direction="row" spacing={2}>
            <Button color="inherit">Link 1</Button>
            <Button color="inherit">Link 2</Button>
            <Button color="inherit">Link 3</Button>
            <Button color="inherit">Link 4</Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
