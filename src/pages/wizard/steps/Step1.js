import {
  Button,
  FormControl,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { CustomAlert } from "../components/CustomAlert";

export const Step1 = (props) => {
  const [selection, setSelection] = React.useState("");
  const [alertIsOpen, setAlertIsOpen] = React.useState(false);

  const handleSubmit = () => {
    if (selection === "no") {
      setAlertIsOpen(true);
    } else {
      props.stepNumberCompleted(1);
    }
  };

  const handleOnChange = (event) => {
    setSelection(event.target.value);
  };

  return (
    <div>
      <CustomAlert
        open={alertIsOpen}
        onClose={setAlertIsOpen}
        msg={
          "Unfortunately, this resource only applies to individuals currently licensed as an RN or LPN in a U.S. Jurisdiction."
        }
      />

      <FormControl sx={{ m: 1, width: "100%", mt: 3 }}>
        <Stack spacing={2}>
          {/* Question 1 */}
          <Typography color="inherit" sx={{ fontStyle: "italic" }}>
            Are you currently a licensed RN or LPN in any US jurisdiction?
          </Typography>
          <Select
            displayEmpty
            value={selection}
            onChange={handleOnChange}
            input={<OutlinedInput />}
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem disabled value="">
              <em>Select-an-option</em>
            </MenuItem>
            <MenuItem value={"yes"}>Yes</MenuItem>
            <MenuItem value={"no"}>No</MenuItem>
          </Select>
        </Stack>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={() => handleSubmit()}
        >
          Next
        </Button>
      </FormControl>
    </div>
  );
};
