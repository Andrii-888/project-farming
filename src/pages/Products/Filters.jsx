import React from "react";
import {
  TextField,
  Checkbox,
  FormControl,
  Select,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const styles = {
  input: {
    width: "103px",
    height: "42px",
    // border: "1px solid #000000",
    // color: "#000000",
    // borderRadius: "7px",
  },
  checkbox: {
    width: "40px",
    height: "40px",
    // border: "1px solid #000000",
    // borderRadius: "7px",
  },
  select: {
    width: "219px",
    height: "40px",
    // border: "1px solid #000000",
    // borderRadius: "7px",
    color: "#000000",
  },
};

function Filters() {
  return (
    <Stack
      flexDirection="row"
      sx={{
        alignItems: "center",
        margin: "88.17px 0 54.2px 0",
      }}
    >
      <Typography
        sx={{
          alignItems: "center",
          fontSize: "1.25rem",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "1.625rem",
          letterSpacing: "0.0375rem",
          color: "#000000",
          m: "88px 0 54.2px 30px",
        }}
      >
        Price
      </Typography>

      <TextField
        label="from"
        variant="outlined"
        size="small"
        style={styles.input}
        sx={{ m: "81px 0 54.2px 15px" }}
      />
      <TextField
        label="to"
        variant="outlined"
        size="small"
        style={styles.input}
        sx={{ m: "81px 0 54.2px 15px" }}
      />

      <Stack flexDirection="row" sx={{ alignItems: "center" }}>
        <Typography
          sx={{
            fontSize: "1.25rem",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "1.625rem",
            letterSpacing: "0.0375rem",
            color: "#000000",
            m: "81px 0 54px 40px",
          }}
        >
          Discounted items
        </Typography>

        <Checkbox
          {...label}
          defaultChecked
          style={styles.checkbox}
          sx={{ m: "81px 0 47px 39px" }}
        />
      </Stack>

      <Stack flexDirection="row" sx={{ alignItems: "center" }}>
        <Typography
          sx={{
            fontSize: "1.25rem",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "1.625rem",
            letterSpacing: "0.0375rem",
            color: "#000000",
            m: "81px 0 47px 91px",
          }}
        >
          Sorted
        </Typography>

        <FormControl
          variant="outlined"
          size="small"
          style={styles.select}
          sx={{ m: "81px 0 47px 42px" }}
        >
          <Select>
            <MenuItem label="by default"></MenuItem>
          </Select>
        </FormControl>
      </Stack>
    </Stack>
  );
}

export default Filters;
