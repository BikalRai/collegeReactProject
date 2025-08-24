import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AdminDashboard from "../pages/AdminDashboard";
import AdminUserDetailspage from "../pages/AdminUserDetailspage";
import AdminProductsPage from "../pages/AdminProductsPage";
import AddNewUser from "../pages/AddNewUser";

const router = createBrowserRouter([
  { path: "/", element: <AdminDashboard /> },
  {
    path: "/users",
    element: <AdminUserDetailspage />,
  },
  { path: "/users/add", element: <AddNewUser /> },
  { path: "/products", element: <AdminProductsPage /> },
]);

const AdminRouter = () => {
  return <RouterProvider router={router} />;
};

export default AdminRouter;
