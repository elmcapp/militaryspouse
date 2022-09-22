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
// props.stepNumberCompleted(3);
export const Step3 = (props) => {
  const [selection, setSelection] = React.useState("");
  const [selectionExtend, setSelectionExtend] = React.useState("");
  const [alertIsOpen, setAlertIsOpen] = React.useState(false);

  const handleOnChange = (event) => {
    setSelection(event.target.value);
  };

  const handleOnChangeExtended = (event) => {
    setSelectionExtend(event.target.value);
  };

  const handleSubmit = () => {
    //prettier-ignore
    if (selection === "yes" && selectionExtend === 'no' || selectionExtend==='unsure'){ 
        // Go to next step
        props.stepNumberCompleted(3);
    } 
    else if (selection === "yes" && selectionExtend === 'yes'){ 
        // show alert message
        setAlertIsOpen(true);
    } else {
        // go to next step
        props.stepNumberCompleted(3);
    }
  };

  const handleBack = () => {
    props.stepNumberCompleted(1);
  };

  return (
    <Box style={{ width: "100%" }}>
      <CustomAlert
        open={alertIsOpen}
        onClose={setAlertIsOpen}
        msg={
          "Licensed RNs and LPNs employed by the Federal Government may be able to continue working without changing their license."
        }
      />
      <FormControl sx={{ m: 1, width: "100%", mt: 3 }}>
        <Stack spacing={2}>
          {/* Question 3 */}
          <Typography color="inherit" sx={{ fontStyle: "italic" }}>
            Have you already secured employment in the state or territory you
            are moving to?
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
            <MenuItem value={"unsure"}>Unsure</MenuItem>
          </Select>

          {/* Extended Question 1 of 1 */}

          {selection === "yes" && (
            <div>
              <Typography color="inherit" sx={{ fontStyle: "italic" }}>
                Will you be a federal government employee?
              </Typography>
              <Select
                fullWidth
                displayEmpty
                value={selectionExtend}
                onChange={handleOnChangeExtended}
                input={<OutlinedInput />}
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem disabled value="">
                  <em>Select-an-option</em>
                </MenuItem>
                <MenuItem value={"yes"}>Yes</MenuItem>
                <MenuItem value={"no"}>No</MenuItem>
                <MenuItem value={"unsure"}>Unsure</MenuItem>
              </Select>
            </div>
          )}
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
            disabled={
              (selection?.length > 0 && selectionExtend?.length > 0) ||
              selection === "no" ||
              selection === "unsure"
                ? false
                : true
            }
            onClick={() => handleSubmit()}
          >
            Next
          </Button>
        </Stack>
      </FormControl>
    </Box>
  );
};
