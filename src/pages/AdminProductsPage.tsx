import AdminHeader from "../components/AdminHeader";
import AdminProductTable from "../components/table/AdminProductTable";
import AdminLayout from "../layouts/AdminLayout";
import type { SectionHeaderTypes } from "../utilities/types/appTypes";

const section: SectionHeaderTypes = {
  title: "Products",
  path: "add",
};

const AdminProductsPage = () => {
  return (
    <AdminLayout>
      <div>
        <AdminHeader section={section} />
        <AdminProductTable />
      </div>
    </AdminLayout>
  );
};

export default AdminProductsPage;
