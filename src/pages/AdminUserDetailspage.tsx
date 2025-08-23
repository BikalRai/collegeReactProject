import AdminHeader from "../components/AdminHeader";
import AdminUserTable from "../components/table/AdminUserTable";
import AdminLayout from "../layouts/AdminLayout";
import type { FooterHeaderType } from "../utilities/types/appTypes";
import AddNewUser from "./AddNewUser";

const section: FooterHeaderType = {
  title: "Users",
};

const AdminUserDetailspage = () => {
  return (
    <AdminLayout>
      <div>
        <AdminHeader section={section} />
        <AdminUserTable />
        <AddNewUser />
      </div>
    </AdminLayout>
  );
};

export default AdminUserDetailspage;
