import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import RecommendationPage from "../pages/RecommendationPage";
import ShopPage from "../pages/ShopPage";
import ProductPage from "../pages/ProductPage";
import ProductDescription from "../components/productPage/ProductDescription";
import ProductReviews from "../components/productPage/ProductReviews";

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
    path: "/shop/:id",
    element: <ProductPage />,
    children: [
      { index: true, element: <ProductDescription /> },
      { path: "description", element: <ProductDescription /> },
      { path: "reviews", element: <ProductReviews /> },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
