import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Loader from "./components/ui/Loader";
import PrivateRoute from "./components/routes/PrivateRoute";
import PublicRoute from "./components/routes/PublicRoute";

const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));

const Home = lazy(() => import("./pages/Home"));
const Product = lazy(() => import("./pages/Product"));
const ProductList = lazy(() => import("./pages/ProductList"));
const NewProduct = lazy(() => import("./pages/newProduct/NewProduct"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<PrivateRoute element={<Home />} />} />

          <Route
            path="/product/:id"
            element={<PrivateRoute element={<Product />} />}
          />

          <Route
            path="/products/category/:category"
            element={<PrivateRoute element={<ProductList />} />}
          />

          <Route
            path="/product/edit/:id"
            element={<PrivateRoute element={<NewProduct />} />}
          />

          <Route
            path="/product/add"
            element={<PrivateRoute element={<NewProduct />} />}
          />

          <Route path="/login" element={<PublicRoute element={<Login />} />} />

          <Route
            path="/register"
            element={<PublicRoute element={<Register />} />}
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
