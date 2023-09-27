import React from "react";
import { useLocation } from "react-router-dom";

function Products() {
  const { state } = useLocation();
  const { type } = state;
  console.log(state, type);

  return <div>Products</div>;
}

export default Products;
