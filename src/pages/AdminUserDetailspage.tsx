import AdminHeader from "../components/headers/AdminHeader";
import AdminUserTable from "../components/table/AdminUserTable";
import AdminLayout from "../layouts/AdminLayout";
import type { SectionHeaderTypes } from "../utilities/types/appTypes";

const section: SectionHeaderTypes = {
  title: "Users",
  path: "add",
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
