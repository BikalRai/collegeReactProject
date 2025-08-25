import { useDispatch, useSelector } from "react-redux";
import AdminHeader from "../components/headers/AdminHeader";
import AdminProductTable from "../components/table/AdminProductTable";
import AdminLayout from "../layouts/AdminLayout";
import type { SectionHeaderTypes } from "../utilities/types/appTypes";
import type { RootState } from "../store/store";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { clearError, clearSuccessMessage } from "../slices/productSlice";

const section: SectionHeaderTypes = {
  title: "Products",
  path: "/products/add",
};

const AdminProductsPage = () => {
  const { products, loading, error, successMessage } = useSelector(
    (state: RootState) => state.product
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage);
      dispatch(clearSuccessMessage());
    }
    if (error) {
      toast.error(error);
      dispatch(clearError());
    }
  }, [successMessage, error]);
  return (
    <AdminLayout>
      <div>
        <AdminHeader section={section} />
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <AdminProductTable products={products} />
        )}
      </div>
      <ToastContainer
        position='top-right'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='colored'
      />
    </AdminLayout>
  );
};

export default AdminProductsPage;
