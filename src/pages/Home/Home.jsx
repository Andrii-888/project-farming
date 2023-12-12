import {
  Stack,
  Box,
  Typography,
  Container,
  Button,
  TextField,
} from "@mui/material";
import Img from "../../assets/img.svg";
import Image from "../../assets/image.svg";
import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../../constants";
// import React, { useState } from "react";
//import { selectHomeCategories } from "../../store/features/categories/categoriesSlice";
// import ProductListItem from "../../store/features/products/ProductListItem";
//import { useSelector } from "react-redux";
// import axios from "axios";
//import { useTheme } from "@mui/material/styles";

// const getImgPath = (imgName) => {
//   return require(`../../assets${imgName}`);
// };

function Home() {
  // const [message, setMessage] = useState("");
  // const [messageType, setMessageType] = useState("error");

  //const categories = useSelector(selectHomeCategories);
  // const saleProducts = useSelector(selectSaleProductsDashboard);

  const navigate = useNavigate();

  const handleNavToSalePage = () => {
    navigate(APP_ROUTES.PRODUCTS, { state: { sale: true } });
  };

  const handleNavToCategoriesPage = () => {
    navigate(APP_ROUTES.CATEGORIES);
  };

  // const handleGetDiscount = async (data) => {
  //   try {
  //     await axios.post(`${BASE_URL}/sale/send`, data);

  //     setMessage("Getting the discount was successful.");

  //     setMessageType("success");
  //   } catch (error) {
  //     setMessage("Something went wrong! Try again.");
  //     setMessageType("error");
  //   }
  // };

  // const handleHideError = () => {
  //   setMessage("");
  // };

  return (
    <Container disableGutters maxWidth={false} sx={{ p: "0px 0 80px 0" }}>
      <Stack>
        <Stack>
          <Box
            component="div"
            sx={{
              backgroundImage: `url(${Img})`,
              backgroundRepeat: "round",
              height: "600px",
              width: "1440px",
              flexShrink: 0,
            }}
          >
            <Box sx={{ p: "80px 40px 0 40px" }}>
              <Typography
                sx={{
                  fontFamily: "Montserrat",
                  fontSize: "80px",
                  fontStyle: "normal",
                  fontWeight: 550,
                  lineHeight: "110%",
                  color: "#FFFFFF",
                }}
              >
                Amazing Discounts{" "}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Montserrat",
                  fontSize: "80px",
                  fontStyle: "normal",
                  fontWeight: 550,
                  lineHeight: "110%",
                  color: "#FFFFFF",
                }}
              >
                on Garden Products!
              </Typography>
            </Box>

            <Button
              onClick={handleNavToSalePage}
              variant="contained"
              sx={{
                m: "40px 0 0 40px",
                width: "218px",
                height: "58px",
                gap: "10px",
                borderRadius: "6px",
                color: "#339933x",
              }}
            >
              Check out
            </Button>
          </Box>
        </Stack>
      </Stack>

      <Stack sx={{ m: "50px 30px 90px 30px", gap: "30px" }}>
        <Stack
          sx={{
            flexDirection: "row",
            gap: "920px",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              color: "#282828",
              fontSize: "54px",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "110%",
            }}
          >
            Categories
          </Typography>
          <Button
            onClick={handleNavToCategoriesPage}
            variant="outlined"
            sx={{
              width: "142px",
              height: " 36px",
              borderRadius: "6px",
              fontSize: "12px",
            }}
          >
            All categories
          </Button>
        </Stack>
      </Stack>

      <Stack
        sx={{
          backgroundImage:
            "linear-gradient(261deg, #0B710B 32.63%, #393 98.96%)",
          height: "486px",
          width: "100%",
          p: "32px 32px 0px 32px",
          gap: "24px",
          justifyContent: "space-between",
          alignSelf: "stretch",
        }}
      >
        <Stack sx={{ width: "100%", height: "70px", textAlign: "center" }}>
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
        <Stack flexDirection="row" sx={{ gap: "32px" }}>
          <Stack sx={{ height: "360px", width: "748px", gap: "32px" }}>
            <Box
              component="div"
              sx={{
                backgroundSize: "contain",
                backgroundImage: `url(${Image})`,
                backgroundRepeat: "no-repeat",
                height: "360px",
                width: "748px",
                lightgray: "50%",
                // p: "94px 580px 0 32px",
              }}
            />
          </Stack>
          <Stack sx={{ height: "360px", width: "614px", gap: "16px" }}>
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
        </Stack>

        <Stack sx={{ m: "50px 30px 90px 30px", gap: "30px" }}>
          <Stack
            sx={{
              flexDirection: "row",
              gap: "920px",
              alignItems: "center",
              m: "0",
            }}
          >
            <Typography
              variant="h1"
              sx={{
                color: "#282828",
                fontSize: "54px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "110%",
              }}
            >
              Sale
            </Typography>
            <Button
              onClick={handleNavToCategoriesPage}
              variant="outlined"
              sx={{
                width: "97px",
                height: " 36px",
                borderRadius: "6px",
                fontSize: "12px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              All sale
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
}

export default Home;
