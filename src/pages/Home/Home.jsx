import React from "react";
import { Stack, Box, Typography, Button, Container } from "@mui/material";
import Banner from "../../assets/flowers.png";
import Leprechaun from "../../assets/leprechaun.png";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { APP_ROUTES, BASE_URL } from "../../constants";
import { useSelector } from "react-redux";
import { selectHomeCategories } from "../../store/features/categories/categoriesSlice";
import DiscountForm from "../../components/forms/DiscountForm";
import { selectSaleProductsDashboard } from "../../store/features/products/productsSlice";
import axios from "axios";

const getImgPath = (imgName) => {
  return require(`../../assets${imgName}`);
};

const getPercentage = (price, discontPrice) => {
  return Math.round(((discontPrice - price) / price) * 100);
};

function Home() {
  const categories = useSelector(selectHomeCategories);
  const saleProducts = useSelector(selectSaleProductsDashboard);
  console.log(saleProducts);
  const navigate = useNavigate();

  const { palette, typography } = useTheme();

  const handleNavToSalePage = () => {
    navigate(APP_ROUTES.PRODUCTS, { state: { type: "sale" } });
  };

  const handleNavToCategoriesPage = () => {
    navigate(APP_ROUTES.CATEGORIES);
  };

  const handleGetDiscaunt = (data) => {
    axios.post(`${BASE_URL}/sale/send`, data);
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
            backgroundImage: `url(${Banner})`,
            backgroundRepeat: "round",
            height: "682px",
            width: "50%",
          }}
        />
      </Stack>

      <Stack sx={{ m: "50px 30px 90px 30px", gap: "30px" }}>
        <Stack
          sx={{
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

        <Stack sx={{ flexDirection: "row", gap: "36px" }}>
          {categories.map((category) => (
            <Stack sx={{ gap: "20px", alignItems: "center", fontSize: "18px" }}>
              <Box
                component="div"
                sx={{
                  backgroundSize: "cover",
                  backgroundImage: `url(${getImgPath(category.image)})`,
                  backgroundRepeat: "no-repeat",
                  height: "350px",
                  width: "318px",
                }}
              />

              <Typography
                variant="body2"
                sx={{ fontWeight: typography.fontWeightMedium }}
              >
                {category.title}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>

      <Stack
        sx={{
          backgroundImage: "linear-gradient(90deg,#006300,#339933)",
          height: "476px",
          width: "100%",
          p: "27px 255px 27px 91px",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <Box
          component="div"
          sx={{
            // backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundImage: `url(${Leprechaun})`,
            backgroundRepeat: "no-repeat",
            height: "422px",
            width: "422px",
          }}
        />

        <Stack
          spacing={1}
          sx={{
            direction: "column",
            alignItems: "flex-end",
            justifyContent: "space-evenly",
          }}
        >
          <Stack>
            <Stack>
              <Typography
                variant="h1"
                sx={{
                  fontWeight: "700",
                  fontSize: "90px",
                  lineHeight: "108px",
                  color: palette.common.white,
                }}
              >
                5% off
              </Typography>

              <Typography
                sx={{
                  fontWeight: "700",
                  fontSize: "50px",
                  lineHeight: "60px",
                  color: palette.common.white,
                  margin: "4px 0 60px 0",
                }}
              >
                on the first order
              </Typography>
            </Stack>
            <DiscountForm onSubmit={() => {}} />
          </Stack>
        </Stack>
      </Stack>

      <Stack sx={{ m: "50px 30px 90px 30px", gap: "30px" }}>
        <Typography variant="h1">Sale</Typography>

        <Stack sx={{ flexDirection: "row", gap: "36px" }}>
          {saleProducts.map((product) => (
            <Stack sx={{ gap: "20px", alignItems: "center" }}>
              <Box
                component="div"
                sx={{
                  backgroundSize: "cover",
                  backgroundImage: `url(${getImgPath(product.image)})`,
                  backgroundRepeat: "no-repeat",
                  height: "350px",
                  width: "318px",
                }}
              />
              <Stack
                sx={{
                  flexDirection: "row",
                  gap: "20px",
                  color: "#000",
                  alignItems: "center",
                }}
              >
                <Typography sx={{ fontSize: "30px" }}>
                  ${product.discont_price}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "20px",
                    color: "#8B8B8B",
                    textDecoration: "line-through",
                  }}
                >
                  ${product.price}
                </Typography>
                <Typography sx={{ fontSize: "20px", color: "#FF32A1" }}>
                  {getPercentage(product.price, product.discont_price)}%
                </Typography>
              </Stack>
              <Typography
                variant="body2"
                sx={{
                  fontSize: "16px",
                  fontStyle: "normal",
                  color: "#3A3A3A",
                  alignSelf: "flex-start",
                  fontWeight: typography.fontWeightMedium,
                  m: "0 24px 0",
                }}
              >
                {product.title}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Container>
  );
}

export default Home;
