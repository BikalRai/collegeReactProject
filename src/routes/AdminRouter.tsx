import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AdminDashboard from '../pages/AdminDashboard';
import AdminUserDetailspage from '../pages/AdminUserDetailspage';

const router = createBrowserRouter([
  { path: '/', element: <AdminDashboard /> },
  { path: '/users', element: <AdminUserDetailspage /> },
]);

const AdminRouter = () => {
  return <RouterProvider router={router} />;
};

export default AdminRouter;
