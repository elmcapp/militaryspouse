import {
  Box,
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

export const Step5 = (props) => {
  const [selection, setSelection] = React.useState("");

  const handleSubmit = () => {
    props.movingToState(selection);
    props.stepNumberCompleted(5);
  };

  const handleOnChange = (event) => {
    setSelection(event.target.value);
  };

  const StatesList = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Guam",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Palau",
    "Pennsylvania",
    "Puerto Rico",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virgin Island",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
  ];

  return (
    <Box style={{ width: "100%" }}>
      {/* <CustomAlert
          open={alertIsOpen}
          onClose={setAlertIsOpen}
          msg={
            "Unfortunately, this resource only applies to individuals currently licensed as an RN or LPN in a U.S. Jurisdiction."
          }
        /> */}

      <FormControl sx={{ m: 1, width: "100%", mt: 3 }}>
        <Stack spacing={2}>
          {/* Question 5 */}
          <Typography color="inherit" sx={{ fontStyle: "italic" }}>
            What State are you moving to?
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
    </Box>
  );
};
