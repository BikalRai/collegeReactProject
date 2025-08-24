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
import PeripheralsPage from "../pages/PeripheralsPage";
import VisualsPage from "../pages/VisualsPage";
import PowerCorePage from "../pages/PowerCorePage";
import ComfortGearPage from "../pages/ComfortGearPage";

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
    path: "/shop/recommendations",
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
    path: "/shop/peripherals",
    element: <PeripheralsPage />,
  },
  {
    path: "/shop/visuals",
    element: <VisualsPage />,
  },
  {
    path: "/shop/power",
    element: <PowerCorePage />,
  },
  {
    path: "/shop/comfort",
    element: <ComfortGearPage />,
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
