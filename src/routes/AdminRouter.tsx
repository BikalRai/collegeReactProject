import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AdminDashboard from "../pages/AdminDashboard";

const router = createBrowserRouter([
  { path: "/", element: <AdminDashboard /> },
]);

const AdminRouter = () => {
  return <RouterProvider router={router} />;
};

export default AdminRouter;
