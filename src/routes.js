import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";

// import ProductsPage from "./Component/pages/ProductsPage";
// import NotFoundPage from "./Component/pages/NotFoundPage";
// import SingleProduct from "./Component/pages/SingleProduct";

const Home = lazy(() => import("./pages/Home"));

export default function () {
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<Layout />}>
          <Route
            index
            path={"/"}
            element={
              <Suspense fallback={<div>Loading</div>}>
                <Home />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}
