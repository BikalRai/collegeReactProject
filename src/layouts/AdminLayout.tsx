import AdminNavbar from "../components/navbar/adminNavbar/AdminNavbar";
import AdminTopBar from "../components/navbar/adminNavbar/AdminTopBar";

interface LayoutProp {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: LayoutProp) => {
  return (
    <div className='flex text-text-primary font-medium w-full max-w-screen overflow-x-hidden'>
      <div className='h-screen sticky top-0 '>
        <AdminNavbar />
      </div>
      <div className='grow w-full overflow-x-hidden'>
        <AdminTopBar />
        <div className='p-4 md:p-8'>{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
