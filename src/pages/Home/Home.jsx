import React from "react";
import { Stack, Box, Typography, Button, Container } from "@mui/material";
import Image from "../../assets/flowers.png";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../../constants";
import { useGetCategoriesQuery } from "../../store/features/categories/slice";

function Home() {
  const {
    data: posts,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetCategoriesQuery();
  const navigate = useNavigate();

  const { palette, typography } = useTheme();

  const handleNavToSalePage = () => {
    navigate(APP_ROUTES.PRODUCTS, { state: { type: "sale" } });
  };
  return (
    <Container disableGutters maxWidth={false} sx={{ p: "76px 0 45px 0" }}>
      <Stack flexDirection="row" sx={{ background: "#A1E2EB" }}>
        <Stack sx={{ width: "50%", m: "130px 0 140px 50px" }}>
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: "80px",
              lineHeight: "104px",
              color: palette.common.white,
            }}
          >
            Sale
          </Typography>

          <Typography
            sx={{
              fontWeight: "700",
              fontSize: "63px",
              lineHeight: "82px",
              color: palette.common.white,
              margin: "4px 0 60px 0",
            }}
          >
            New season
          </Typography>

          <Button
            onClick={handleNavToSalePage}
            variant="contained"
            sx={{
              width: "155px",

              backgroundColor: palette.common.white,
              color: palette.grey.dark,
              borderRadius: "13px",
              padding: "25px 50px",
              "&:hover": {
                backgroundColor: "pink",
              },
            }}
          >
            <Typography variant="h3" component="span">
              Sale
            </Typography>
          </Button>
        </Stack>
        <Box
          component="div"
          sx={{
            // backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundImage: `url(${Image})`,
            backgroundRepeat: "no-repeat",
            height: "682px",
            width: "50%",
          }}
        />
      </Stack>
    </Container>
  );
}

export default Home;
