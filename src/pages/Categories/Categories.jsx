import { Button, Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import CategoryListItem from "./CategoryListItem";
import Page from "../../components/Page";
import { selectAllCategories } from "../../store/features/categories/categoriesSlice";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

function Categories() {
  const categories = useSelector(selectAllCategories);

  return (
    <>
      <Stack
        sx={{
          flexDirection: "column",
          alignItems: "center",
          m: "40px 40px 40px 40px",
          gap: "15px",
        }}
      >
        <Stack sx={{ flexDirection: "row", gap: "12px" }}>
          <Button
            sx={{
              width: "142px",
              height: "36px",
              borderRadius: "8px",
              justifyContent: "center",
              alignItems: "center",
              color: "#282828",
              ml: "auto",
              "&:hover": {
                color: "white",
                background: "gold",
              },
            }}
          >
            Main Page
          </Button>
          <Button
            sx={{
              width: "142px",
              height: "36px",
              borderRadius: "8px",
              justifyContent: "center",
              alignItems: "center",
              color: "#282828",
              "&:hover": {
                color: "white",
                background: "gold",
              },
            }}
          >
            Categories
          </Button>
        </Stack>
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
      </Stack>

      <Page>
        <Stack
          sx={{
            flexDirection: "row",
            height: "370px",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            breakpoints={{
              // 640: {
              //   slidesPerView: 2,
              //   spaceBetween: 20,
              // },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              // 1024: {
              //   slidesPerView: 5,
              //   spaceBetween: 50,
              // },
            }}
            className="mySwiper"
          >
            {categories.map((category) => (
              <SwiperSlide>
                <CategoryListItem category={category} key={category.id} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Stack>
      </Page>
    </>
  );
}

export default Categories;
