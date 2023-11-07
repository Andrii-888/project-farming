import { Container, Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import {
  selectAllProducts,
  selectCategoryProducts,
  selectSaleProducts,
} from "../../store/features/products/productsSlice";
import Filters from "./Filters";
import ProductListItem from "./ProductListItem";
import { selectCategoryTitleById } from "../../store/features/categories/categoriesSlice";
import { selectCartProducts } from "../../store/features/cart/cartSlice";
import { useMemo } from "react";

function Products() {
  const { state } = useLocation();
  const { sale = false, categoryId = null } = state || {};

  const [searchParams] = useSearchParams();
  const { discounted, to, from, sortedBy } = Object.fromEntries(searchParams);

  const allProducts = useSelector(selectAllProducts);
  let products = allProducts;

  const saleProducts = useSelector(selectSaleProducts);
  const cartProducts = useSelector(selectCartProducts);
  const categoryProducts = useSelector((state) => selectCategoryProducts(state, categoryId));
  const selectedCategoryTitle = useSelector((state) => selectCategoryTitleById(state, categoryId));

  if (sale) {
    products = [...saleProducts];
  }

  if (categoryId) {
    products = [...categoryProducts];
  }

  if (to && from && from <= to) {
    products = products.filter((product) => product.price >= from && product.price <= to);
  }

  if (discounted) {
    products = products.filter((product) => product.discont_price);
  }

  if (sortedBy && sortedBy !== "default") {
    products = products.toSorted((product1, product2) => {
      if (sortedBy === "price") {
        return product1.price > product2.price ? 1 : product1.price < product2.price ? -1 : 0;
      }

      if (sortedBy === "discount") {
        if (product1.discont_price && product2.discont_price) {
          return product1.discont_price > product2.discont_price
            ? 1
            : product1.discont_price < product2.discont_price
            ? -1
            : 0;
        }

        if (product1.discont_price && !product2.discont_price) {
          return -1;
        }

        if (!product1.discont_price && product2.discont_price) {
          return -1;
        }
      }

      if (sortedBy === "title") {
        return product1.title.localeCompare(product2.title);
      }

      return 0;
    });
  }

  const title = sale ? "Products with sale" : categoryId ? selectedCategoryTitle : "All Products";

  const cartProductIds = useMemo(() => cartProducts.map((product) => product.item.id), [cartProducts]);

  return (
    <Container disableGutters maxWidth={false} sx={{ p: "0 30px" }}>
      <Typography variant="h1" sx={{ marginTop: "79px" }}>
        {title}
      </Typography>

      <Filters />

      <Stack
        sx={{
          flexDirection: "row",
          gap: "36px",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        {products.map((product) => (
          <ProductListItem
            product={product}
            key={product.id}
            isProductAddedToCart={cartProductIds.includes(product.id)}
          />
        ))}
      </Stack>
    </Container>
  );
}

export default Products;