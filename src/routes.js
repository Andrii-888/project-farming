import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import { APP_ROUTES } from "./constants";
import Loader from "./components/Loader";

// import ProductsPage from "./Component/pages/ProductsPage";
// import NotFoundPage from "./Component/pages/NotFoundPage";
// import SingleProduct from "./Component/pages/SingleProduct";

const Home = lazy(() => import("./pages/Home"));
const Products = lazy(() => import("./pages/Products"));
const Product = lazy(() => import("./pages/Products/Product"));
const Sales = lazy(() => import("./pages/Sales"));
const NotFound = lazy(() => import("./pages/NotFound"));
// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  return (
    <Router>
      <Routes>
        <Route path={APP_ROUTES.MAIN} element={<Layout />}>
          <Route
            index
            path={APP_ROUTES.MAIN}
            element={
              <Suspense fallback={<Loader />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            index
            path={APP_ROUTES.PRODUCTS}
            element={
              <Suspense fallback={<Loader />}>
                <Products />
              </Suspense>
            }
          />
          <Route
            index
            path={`${APP_ROUTES.PRODUCTS}/:id`}
            element={
              <Suspense fallback={<Loader />}>
                <Product />
              </Suspense>
            }
          />
          <Route
            index
            path={APP_ROUTES.SALES}
            element={
              <Suspense fallback={<Loader />}>
                <Sales />
              </Suspense>
            }
          />
          <Route
            index
            path="*"
            element={
              <Suspense fallback={<Loader />}>
                <NotFound />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}
