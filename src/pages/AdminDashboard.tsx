import { useDispatch } from "react-redux";
import AdminLayout from "../layouts/AdminLayout";
import { useEffect } from "react";
import {
  fetchAllProductsFailure,
  fetchAllProductsRequest,
  fetchAllProductsSuccess,
} from "../slices/productSlice";
import axios from "axios";

const AdminDashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      dispatch(fetchAllProductsRequest());
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/products`
        );

        console.log(res);
        dispatch(fetchAllProductsSuccess(res.data));
      } catch (err) {
        dispatch(fetchAllProductsFailure("Failed to fetch products"));
        console.error(err);
      }
    };

    fetchProducts();
  }, []);

  return (
    <AdminLayout>
      <div>AdminDashboard</div>
    </AdminLayout>
  );
};

export default AdminDashboard;
