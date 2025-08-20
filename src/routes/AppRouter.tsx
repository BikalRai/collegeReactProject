import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import RecommendationPage from "../pages/RecommendationPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/recommendations",
    element: <RecommendationPage />,
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
