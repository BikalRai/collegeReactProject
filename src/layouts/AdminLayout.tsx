import AdminNavbar from "../components/navbar/adminNavbar/AdminNavbar";
import AdminTopBar from "../components/navbar/adminNavbar/AdminTopBar";

interface LayoutProp {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: LayoutProp) => {
  return (
    <div className='flex'>
      <div className='h-screen sticky top-0 '>
        <AdminNavbar />
      </div>
      <div className='grow'>
        <AdminTopBar />
        <div className='p-8'>{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
