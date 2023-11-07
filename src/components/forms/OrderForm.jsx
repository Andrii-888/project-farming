import React, { memo } from "react";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormProvider from "./FormProvider";
import RHFTextField from "./RHFTextField";
import { Typography, Stack, CircularProgress, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { PHONE_REG_EXP } from "../../constants";

const handleBlockLetters = (event) => {
  if (/^\+{0,1}\d{0,12}$/.test(event.target.value)) {
    return event;
  }

  event.target.value = event.target.value.slice(0, -1);
  return event;
};

const OrderForm = ({ onSubmit, loading }) => {
  const { palette, typography } = useTheme();

  const formSchema = Yup.object().shape({
    phoneNumber: Yup.string()
      .matches(PHONE_REG_EXP, "Phone number is not valid: +xxxxxxxxxxxx")
      .required("Phone is required!"),
  });

  const methods = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: { phoneNumber: "" },
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack sx={{ gap: 3 }}>
        <RHFTextField
          name="phoneNumber"
          placeholder="Phone Number"
          sx={{
            height: "72px",
            "& fieldset": { borderColor: palette.common.black, borderRadius: "20px" },
          }}
          InputProps={{
            sx: {
              minHeight: "100%",

              "& input": {
                height: "72px",
                boxSizing: "border-box",
                fontSize: 18,
              },
              "& .MuiOutlinedInput-input:-webkit-autofill": {
                borderRadius: "20px",
              },
            },
          }}
          onChange={handleBlockLetters}
        />

        <Button
          variant="contained"
          disableElevation
          color="success"
          type="submit"
          sx={{
            height: "73px",
            borderRadius: "17px",
          }}
        >
          <Typography
            sx={{
              color: palette.common.white,
              fontSize: "28px",
              fontWeight: typography.fontWeightMedium,
            }}
          >
            {isSubmitting || loading ? <CircularProgress color="inherit" /> : "Order"}
          </Typography>
        </Button>
      </Stack>
    </FormProvider>
  );
};

export default memo(OrderForm);