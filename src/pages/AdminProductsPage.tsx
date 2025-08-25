import { useSelector } from "react-redux";
import AdminHeader from "../components/headers/AdminHeader";
import AdminProductTable from "../components/table/AdminProductTable";
import AdminLayout from "../layouts/AdminLayout";
import type { SectionHeaderTypes } from "../utilities/types/appTypes";
import type { RootState } from "../store/store";

const section: SectionHeaderTypes = {
  title: "Products",
  path: "/products/add",
};

const AdminProductsPage = () => {
  const { products, loading, error } = useSelector(
    (state: RootState) => state.product
  );
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
    </AdminLayout>
  );
};

export default AdminProductsPage;
