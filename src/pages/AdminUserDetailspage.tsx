import AdminHeader from "../components/AdminHeader";
import AdminUserTable from "../components/table/AdminUserTable";
import AdminLayout from "../layouts/AdminLayout";
import type { FooterHeaderType } from "../utilities/types/appTypes";

const section: FooterHeaderType = {
  title: "Users",
};

const AdminUserDetailspage = () => {
  return (
    <AdminLayout>
      <div>
        <AdminHeader section={section} />
        <AdminUserTable />
      </div>
    </AdminLayout>
  );
};

export default AdminUserDetailspage;
