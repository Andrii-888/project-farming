import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import Image from "../../../assets/image.svg";
import React, { useCallback } from "react";
import DiscountForm from "../../../components/forms/DiscountForm";
import FormProvider from "../../../components/forms/FormProvider";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { PHONE_REG_EXP } from "../../../constants";
import { useDispatch } from "react-redux";
const GetDiscount = () => {
  const formSchema = Yup.object().shape({
    phoneNumber: Yup.string()
      .required("Phone is required!")
      .matches(PHONE_REG_EXP, "Phone number is not valid!"),
    name: Yup.string().required("name is required!"),
    email: Yup.string()
      .required("email is required!")
      .email("enter valid email"),
  });

  const methods = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: { phoneNumber: "", name: "", email: "" },
  });

  const dispatch = useDispatch();

  const handleSubmitSale = useCallback(
    (fields) => {
      dispatch();
      // submitOrder({
      //   ...fields,

      // })
      console.log(fields);
    },
    [dispatch]
  );

  const {
    handleSubmit,
    // formState: { isSubmitting },
  } = methods;

  return (
    <Stack
      sx={{
        backgroundImage: "linear-gradient(261deg, #0B710B 32.63%, #393 98.96%)",
        // height: "486px",
        width: "100%",
        p: { xs: "20px", md: "32px 32px 0 32px" },
        gap: "24px",
        justifyContent: "flex-end",
        // alignSelf: "stretch",
        maxWidth: "1360px",
        m: "0 auto",
      }}
    >
      <Stack
        sx={{
          // height: "70px",
          width: "100%",
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            color: "#FFF",
            textAlign: "center",
            fontFamily: "Montserrat",
            fontSize: "64px",
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "110%",
          }}
        >
          5% off on the first order
        </Typography>
      </Stack>
      <Stack
        sx={{
          gap: "32px",
          justifyContent: "flex-end",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Stack
          sx={{
            // height: "360px",
            width: "100%",
            gap: "32px",
            flexDirection: { xs: "column", md: "row" },
            display: { sx: "none", md: "block" },
          }}
        >
          <Box
            component="div"
            sx={{
              backgroundSize: "contain",
              backgroundImage: `url(${Image})`,
              backgroundRepeat: "no-repeat",
              height: { xs: "120px", md: "360px" },
              maxWidth: "748px",
              lightgray: "50%",
            }}
          />
        </Stack>
        <FormProvider
          methods={methods}
          onSubmit={handleSubmit(handleSubmitSale)}
        >
          <Stack
            sx={{
              // height: "360px",
              width: "100%",
              gap: "16px",
            }}
          >
            <TextField id="outlined-basic" label="Name" variant="outlined" />
            <TextField
              id="outlined-basic"
              label="Phone number"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="Email"
              type="email"
              variant="outlined"
            />
            <Button
              variant="outlined"
              sx={{ height: "58px", width: "100%", backgroundColor: "#fff" }}
            >
              <Typography
                sx={{
                  color: "#282828",
                  textASlign: "center",
                  fontFamily: "Montserrat",
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: 600,
                  lineHeight: "130%",
                  gap: "32px",
                }}
              >
                Get a discount
              </Typography>
            </Button>
          </Stack>
        </FormProvider>
      </Stack>
    </Stack>
  );
};

export default GetDiscount;
