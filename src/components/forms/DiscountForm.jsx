import React from "react";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormProvider from "./FormProvider";
import RHFTextField from "./RHFTextField";
import { Button } from "@mui/material";
import { InputAdornment, Typography } from "@mui/material";
import { Stack } from "@mui/system";

function DiscountForm({ onSubmit }) {
  const formSchema = Yup.object().shape({
    phone: Yup.string().required("Phone is required!"),
  });

  const methods = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: { phone: "" },
  });

  const {
    handleSubmit,
    formState: { errors, isSubmitting },
  } = methods;
  return (
    <div>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Stack sx={{ gap: "30px" }}>
          <RHFTextField
            // variant="standard"
            name="phone"
            sx={{
              width: "473px",
              height: "75.44px",
              borderRadius: "25.15px",
              backgroundColor: "#FFFFFF",
              border: "none",
              "& fieldset": { border: "none" },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">+49</InputAdornment>
              ),
              // disableUnderline: true,
            }}
            inputProps={{ inputMode: "numeric" }}
            // type="number"
            // label="phone"
            // placeholder="Enter phone number"
            // variant="outlined"
          />

          <Button
            variant="outlined"
            type="submit"
            sx={{
              width: "473px",
              height: "75.44px",
              borderColor: "#FFFFFF",
              borderRadius: "25.15px",
              padding: "25px 50px",
            }}
          >
            <Typography variant="h3" component="span" sx={{ color: "#FFFFFF" }}>
              Get a discount
            </Typography>
          </Button>
        </Stack>
      </FormProvider>
    </div>
  );
}

export default DiscountForm;
