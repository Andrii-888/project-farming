import React from "react";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormProvider from "./FormProvider";
import RHFTextField from "./RHFTextField";
import { Typography, Stack, CircularProgress, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { PHONE_REG_EXP } from "../../constants";

function DiscountForm({ onSubmit }) {
  const { palette } = useTheme();

  const formSchema = Yup.object().shape({
    phone: Yup.string()
      .matches(PHONE_REG_EXP, "Phone number is not valid")
      .required("Phone is required!"),
  });

  const methods = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: { phone: "+49" },
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const handleBlockLetters = (event) => {
    if (/^\+\d{0,12}$/.test(event.target.value)) {
      return event;
    }

    event.target.value = event.target.value.slice(0, -1);
    return event;
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack sx={{ gap: "30px" }}>
        <RHFTextField
          name="phone"
          sx={{
            width: "473px",
            height: "76px",
            borderRadius: "25px",
            backgroundColor: palette.common.white,
            border: "none",
            "& fieldset": { border: "none" },
          }}
          InputProps={{
            sx: {
              minHeight: "100%",
            },
          }}
          FormHelperTextProps={{
            sx: {
              color: `$
                  {pallete.warning.light} ! 
                  impotent`,
            },
          }}
          onChange={handleBlockLetters}
        />

        <Button
          variant="outlined"
          type="submit"
          sx={{
            width: "473px",
            height: "75.44px",
            borderColor: palette.common.white,
            borderRadius: "25.15px",
            padding: "25px 50px",
          }}
        >
          <Typography
            variant="h3"
            component="span"
            sx={{ color: palette.common.white }}
          >
            {isSubmitting ? (
              <CircularProgress color="inherit" />
            ) : (
              "Get a discount"
            )}
          </Typography>
        </Button>
      </Stack>
    </FormProvider>
  );
}

export default DiscountForm;
