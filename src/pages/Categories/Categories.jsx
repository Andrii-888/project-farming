import { Stack } from "@mui/material";
import { useSelector } from "react-redux";

import CategoryListItem from "./CategoryListItem";
import Page from "../../components/Page";
import { selectAllCategories } from "../../store/features/categories/categoriesSlice";

function Categories() {
  const categories = useSelector(selectAllCategories);

  return (
    <Page title="Categories">
      <Stack
        sx={{
          flexDirection: "row",
          gap: "36px",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        {categories.map((category) => (
          <CategoryListItem category={category} key={category.id} />
        ))}
      </Stack>
    </Page>
  );
}

export default Categories;
