import { Container, Stack, Typography } from "@mui/material";
import React from "react";

const Sale = () => {
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
};

export default Sale;
