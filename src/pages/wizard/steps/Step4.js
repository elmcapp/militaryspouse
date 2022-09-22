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

export const Step4 = (props) => {
  const [selection, setSelection] = React.useState("");

  const handleSubmit = () => {
    props.stepNumberCompleted(4);
  };

  const handleOnChange = (event) => {
    setSelection(event.target.value);
  };

  const StatesList = [
    "Alaska",
    "California",
    "Connecticut",
    "District of Columbia",
    "Hawaii",
    "Illinois",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Nevada",
    "New York",
    "Ohio ",
    "Puerto Rico",
    "Oregon",
    "Rhode Island ",
    "Washington",
  ];

  return (
    <div>
      {/* <CustomAlert
        open={alertIsOpen}
        onClose={setAlertIsOpen}
        msg={
          "Unfortunately, this resource only applies to individuals currently licensed as an RN or LPN in a U.S. Jurisdiction."
        }
      /> */}

      <FormControl sx={{ m: 1, width: "100%", mt: 3 }}>
        <Stack spacing={2}>
          {/* Question 4 */}
          <Typography color="inherit" sx={{ fontStyle: "italic" }}>
            In which State are you currently licensed?
          </Typography>
          <Select
            fullWidth
            displayEmpty
            value={selection}
            onChange={handleOnChange}
            input={<OutlinedInput />}
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem disabled value="">
              <em>Select-an-option</em>
            </MenuItem>
            {StatesList.map((state, index) => {
              return (
                <MenuItem key={index} value={state}>
                  {state}
                </MenuItem>
              );
            })}
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
