import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../pages/Home';
import RecommendationPage from '../pages/RecommendationPage';
import ShopPage from '../pages/ShopPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/shop',
    element: <ShopPage />,
  },
  {
    path: '/recommendations',
    element: <RecommendationPage />,
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
