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
import React from "react";
import { CustomAlert } from "../components/CustomAlert";

export const Step2 = (props) => {
  const [selection, setSelection] = React.useState("");
  const [alertIsOpen, setAlertIsOpen] = React.useState(false);

  const handleSubmit = () => {
    if (selection === "no") {
      setAlertIsOpen(true);
    } else {
      props.stepNumberCompleted(2);
    }
  };

  const handleOnChange = (event) => {
    setSelection(event.target.value);
  };

  return (
    <Box style={{ width: "100%" }}>
      <CustomAlert
        open={alertIsOpen}
        onClose={setAlertIsOpen}
        msg={
          "This resource is intended for individuals moving from one U.S. Jurisdiction to another, such as a licensed RN moving from Texas to Hawaii, not for a licensed RN moving from the U.S. to a foreign country."
        }
      />

      <FormControl sx={{ m: 1, width: "100%", mt: 3 }}>
        <Stack spacing={2}>
          {/* Question 2 */}
          <Typography sx={{ fontStyle: "italic" }}>
            Are you moving to another US jurisdiction, such as to another US
            state or territory?
          </Typography>
          <Select
            displayEmpty
            value={selection}
            onChange={handleOnChange}
            input={<OutlinedInput />}
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem disabled value="">
              <em>Placeholder</em>
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
    </Box>
  );
};
