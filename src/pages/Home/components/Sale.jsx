import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import ProductListItem from "../../Products/ProductListItem";

const Sale = ({ products }) => {
  return (
    <Stack
      sx={{ m: { xs: "40px 10px", md: "80px 40px 40px 40px" }, gap: "30px" }}
    >
      <Stack
        sx={{
          flexDirection: "row",
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
          Sale
        </Typography>
        <Button
          variant="outlined"
          sx={{
            marginLeft: "auto",
            width: "142px",
            height: "36px",
            marginLeft: "auto",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            "&:hover": {
              color: "white",
              background: "gold",
            },
          }}
        >
          All sales
        </Button>
      </Stack>
      <Stack
        sx={{
          flexDirection: "row",
          gap: "36px",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        {products.map((product, index) => (
          <ProductListItem
            product={product}
            key={product.id}
            isNotInteractive
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default Sale;
