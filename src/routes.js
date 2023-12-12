import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import { APP_ROUTES } from "./constants";
import Loader from "./components/Loader";
//import Categories from "./pages/Categories/Categories";

const Home = lazy(() => import("./pages/Home"));
// const Products = lazy(() => import("./pages/Products"));
// const Product = lazy(() => import("./pages/Products/Product"));
// const Cart = lazy(() => import("./pages/Cart"));
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
