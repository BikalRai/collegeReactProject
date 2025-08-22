import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Home from "../pages/Home";
import RecommendationPage from "../pages/RecommendationPage";
import ShopPage from "../pages/ShopPage";
import ProductPage from "../pages/ProductPage";
import ProductDescription from "../components/productPage/ProductDescription";
import ProductReviews from "../components/productPage/ProductReviews";
import CartPage from "../pages/CartPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/shop",
    element: <ShopPage />,
  },
  {
    path: "/recommendations",
    element: <RecommendationPage />,
  },
  {
    path: "/shop/:productId",
    element: <ProductPage />,
    children: [
      { index: true, element: <Navigate to='description' replace /> },
      { path: "description", element: <ProductDescription /> },
      { path: "reviews", element: <ProductReviews /> },
    ],
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
