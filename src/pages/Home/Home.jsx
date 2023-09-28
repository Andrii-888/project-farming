import React from "react";
import { Stack, Box, Typography, Button, Container } from "@mui/material";
import Image from "../../assets/flowers.png";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../../constants";
import { useSelector } from "react-redux";
import { selectAllCategories } from "../../store/features/categories/categoriesSlice";

function Home() {
  const data = useSelector(selectAllCategories);
  console.log(data);
  const navigate = useNavigate();

  const { palette, typography } = useTheme();

  const handleNavToSalePage = () => {
    navigate(APP_ROUTES.PRODUCTS, { state: { type: "sale" } });
  };

  const handleNavToCategoriesPage = () => {
    navigate(APP_ROUTES.CATEGORIES);
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
      <Stack>
        <Stack
          sx={{
            p: "40px 30px",
            flexDirection: "row",
            gap: "96px",
            alignItems: "center",
          }}
        >
          <Typography variant="h1">Catalog</Typography>
          <Button
            onClick={handleNavToCategoriesPage}
            variant="outlined"
            sx={{
              width: "120px",
              height: " 30.97px",
              fontSize: "12px",
              color: palette.grey.light,
            }}
          >
            All categories
          </Button>
        </Stack>
        <Stack>
          {data.slice(0, 4).map((category) => (
            <Stack>
              <Box
                component="div"
                sx={{
                  backgroundSize: "cover",
                  backgroundImage: "url(../../assets" + category.image + ")",
                  backgroundRepeat: "no-repeat",
                  height: "682px",
                  width: "50%",
                }}
              />
              {category.title}
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Container>
  );
}

export default Home;
