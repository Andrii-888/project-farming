import { Container, Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { selectAllProducts } from "../../store/features/products/productsSlice";
import Filters from "./Filters";
import ProductListItem from "./ProductListItem";

function Products() {
  const { state } = useLocation();
  const products = useSelector(selectAllProducts);

  console.log(products);

  return (
    <Container disableGutters maxWidth={false} sx={{ p: "0 30px" }}>
      <Typography variant="h1">All Products</Typography>
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
          <ProductListItem {...product} key={product.id} />
        ))}
      </Stack>
    </Container>
  );
}

export default Products;


