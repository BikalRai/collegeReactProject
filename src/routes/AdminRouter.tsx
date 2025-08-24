import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AdminDashboard from "../pages/AdminDashboard";
import AdminUserDetailspage from "../pages/AdminUserDetailspage";
import AdminProductsPage from "../pages/AdminProductsPage";
import AddNewUser from "../pages/AddNewUser";
import AdminAddProduct from "../pages/AdminAddProduct";

const router = createBrowserRouter([
  { path: "/", element: <AdminDashboard /> },
  {
    path: "/users",
    element: <AdminUserDetailspage />,
  },
  { path: "/users/add", element: <AddNewUser /> },
  { path: "/products", element: <AdminProductsPage /> },
  { path: "/products/add", element: <AdminAddProduct /> },
]);

const AdminRouter = () => {
  return <RouterProvider router={router} />;
};

export default AdminRouter;
