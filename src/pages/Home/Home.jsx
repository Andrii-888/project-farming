import { useState } from "react";
import {
  Stack,
  Box,
  Typography,
  Button,
  Container,
  Snackbar,
  Alert,
} from "@mui/material";
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
import ProductListItem from "../Products/ProductListItem";

const getImgPath = (imgName) => {
  return require(`../../assets${imgName}`);
};

function Home() {
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("error");

  const categories = useSelector(selectHomeCategories);
  const saleProducts = useSelector(selectSaleProductsDashboard);

  const navigate = useNavigate();

  const { palette, typography } = useTheme();

  const handleNavToSalePage = () => {
    navigate(APP_ROUTES.PRODUCTS, { state: { sale: true } });
  };

  const handleNavToCategoriesPage = () => {
    navigate(APP_ROUTES.CATEGORIES);
  };

  const handleGetDiscount = async (data) => {
    try {
      await axios.post(`${BASE_URL}/sale/send`, data);

      setMessage("Getting the discount was successful.");

      setMessageType("success");
    } catch (error) {
      setMessage("Something went wrong! Try again.");
      setMessageType("error");
    }
  };

  const handleHideError = () => {
    setMessage("");
  };

  return (
    <Container disableGutters maxWidth={false} sx={{ p: "76px 0 45px 0" }}>
      <Snackbar
        open={!!message}
        autoHideDuration={2000}
        onClose={handleHideError}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleHideError}
          severity={messageType}
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>

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

        <Stack
          sx={{
            flexDirection: "row",
            gap: "36px",
            justifyContent: "space-between",
          }}
        >
          {categories.map((category) => (
            <Stack
              sx={{ gap: "20px", alignItems: "center", fontSize: "18px" }}
              key={category.id}
            >
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

            <DiscountForm onSubmit={handleGetDiscount} />
          </Stack>
        </Stack>
      </Stack>

      <Stack sx={{ m: "50px 30px 90px 30px", gap: "30px" }}>
        <Typography variant="h1">Sale</Typography>

        <Stack
          sx={{
            flexDirection: "row",
            gap: "36px",
            justifyContent: "space-between",
          }}
        >
          {saleProducts.map((product) => (
            <ProductListItem {...product} key={product.id} />
          ))}
        </Stack>
      </Stack>
    </Container>
  );
}

export default Home;
