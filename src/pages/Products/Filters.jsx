import styled from "@emotion/styled";
import { Box, Checkbox, Stack, TextField, Typography } from "@mui/material";

const StyleTextField = styled(TextField)(({ theme }) => ({
  width: "103px",
  height: "22px",
  "& .MuiInputBase-input": {
    borderRadius: "7px",

    padding: "10px",
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

        <Box flexDirection="row" sx={{ alignItems: "center", height: "40px" }}>
          <StyleTextField
            label="from"
            // variant="outlined"
            size="small"
            sx={{
              marginLeft: "15px",
            }}
          />
          <StyleTextField
            label="to"
            // variant="outlined"
            size="small"
            sx={{ marginLeft: "15px" }}
          />
        </Box>
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
            color: "#000000",
            borderWidth: "1px",
            borderRadius: "7px",
            // strokeWidth: "1px",
            // "& .MuiSvgIcon-root": {
            //   fontSize: 40,
            height: "40px",
            width: "40px",
            // },
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

        <Box width="219px">
          <TextField
            label="by default"
            select
            // value={prioduct}
            // onChange={handleChange}
            fullWidth
            size="small"
            color="secondary"
          ></TextField>
        </Box>
      </Stack>
    </Stack>
  );
};

export default Filters;
