import { Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
// import React, { useState } from "react";
import { selectHomeCategories } from "../../store/features/categories/categoriesSlice";
import { useSelector } from "react-redux";
import { selectSaleProductsDashboard } from "../../store/features/products/productsSlice";
// import axios from "axios";
import Sale from "./components/Sale";
import GetDiscount from "./components/GetDiscount";
import Categories from "./components/Categories";
import Banner from "./components/Banner";

// const getImgPath = (imgName) => {
//   return require(`../../assets${imgName}`);
// };

function Home() {
  // const [message, setMessage] = useState("");
  // const [messageType, setMessageType] = useState("error");

  const categories = useSelector(selectHomeCategories);
  const saleProducts = useSelector(selectSaleProductsDashboard);

  const navigate = useNavigate();

  // const { typography } = useTheme();

  // const handleNavToCategoriesPage = () => {
  //   navigate(APP_ROUTES.CATEGORIES);
  // };

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
      <Banner />

      <Categories categories={categories} />

      <GetDiscount />

      <Sale products={saleProducts} />
    </Container>
  );
}

export default Home;
