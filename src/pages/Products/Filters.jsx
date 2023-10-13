import styled from "@emotion/styled";
import {
  Checkbox,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const StyleTextField = styled(TextField)(({ theme }) => ({
  width: "103px",
  "& .MuiInputBase-input": {
    borderRadius: "7px",
    height: "22px",
    padding: "10px ",
  },
}));

const Filters = () => {
  return (
    <Stack
      flexDirection="row"
      sx={{
        alignItems: "center",
        margin: "88.17px 0 54.2px 0",
      }}
    >
      <Stack flexDirection="row" sx={{ alignItems: "center" }}>
        <Typography
          sx={{
            fontSize: "1.25rem",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "1.625rem",
            letterSpacing: "0.0375rem",
            color: "#000000",
          }}
        >
          Price
        </Typography>

        <StyleTextField
          label="from"
          variant="outlined"
          sx={{
            marginLeft: "15px",
          }}
        />
        <StyleTextField
          label="to"
          variant="outlined"
          sx={{ marginLeft: "15px" }}
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
            margin: "0 39px 0 40px",
          }}
        >
          Discounted items
        </Typography>
        <Checkbox
          sx={{
            borderRadius: "7px",
            borderWidth: "1px",
            strokeWidth: "1px",
            "& .MuiSvgIcon-root": {
              fontSize: 40,
              height: "40px",
              width: "40px",
            },
          }}
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
            margin: "0 42px 0 91px",
          }}
        >
          Sorted
        </Typography>

        <Select value={10} label="Age" onChange={() => {}} size="small">
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </Stack>
    </Stack>
  );
};

export default Filters;
