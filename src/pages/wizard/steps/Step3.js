import {
  Button,
  FormControl,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import DialogMessage from "../components/CustomAlert";

export const Step3 = (props) => {
  const [selection, setSelection] = React.useState("");
  const [selectionExtend, setSelectionExtend] = React.useState("");

  const handleOnChange = (event) => {
    setSelection(event.target.value);
  };

  const handleOnChangeExtended = (event) => {
    setSelectionExtend(event.target.value);
  };

  const handleSubmit = () => {
    if (selection === "no") {
      alert("put error message here");
    } else {
      props.stepNumberCompleted(3);
    }
  };

  return (
    <div>
      <DialogMessage dialogVisible />
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
            <MenuItem value={"no"}>Unsure</MenuItem>
          </Select>

          {/* Extended Question 1 of 1 */}

          {selection === "yes" && (
            <div>
              <Typography color="inherit" sx={{ fontStyle: "italic" }}>
                Will you be a federal government employee?
              </Typography>
              <Select
                displayEmpty
                value={selection}
                onChange={handleOnChangeExtended}
                input={<OutlinedInput />}
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem disabled value="">
                  <em>Select-an-option</em>
                </MenuItem>
                <MenuItem value={"yes"}>Yes</MenuItem>
                <MenuItem value={"no"}>No</MenuItem>
                <MenuItem value={"no"}>Unsure</MenuItem>
              </Select>
            </div>
          )}
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
