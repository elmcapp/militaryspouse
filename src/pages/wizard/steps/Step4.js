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

export const Step4 = (props) => {
  const [selection, setSelection] = React.useState("");

  const handleSubmit = () => {
    props.currentState(selection);
    props.stepNumberCompleted(4);
  };

  const handleBack = () => {
    props.stepNumberCompleted(2);
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
        <Stack direction="row" spacing={2} justifyContent="flex-end" mt={2}>
          <Button
            type="submit"
            // fullWidth
            variant="contained"
            // sx={{ mt: 3, mb: 2 }}
            color="warning"
            sx={{ width: "30%" }}
            // disabled={selection?.length > 0 ? false : true}
            onClick={() => handleBack()}
          >
            Back
          </Button>
          <Button
            type="submit"
            // fullWidth
            variant="contained"
            // sx={{ mt: 3, mb: 2 }}
            sx={{ width: "30%" }}
            disabled={selection?.length > 0 ? false : true}
            onClick={() => handleSubmit()}
          >
            Next
          </Button>
        </Stack>
      </FormControl>
    </Box>
  );
};
