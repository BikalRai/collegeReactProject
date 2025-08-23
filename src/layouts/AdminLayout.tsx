import AdminNavbar from "../components/navbar/adminNavbar/AdminNavbar";
import AdminTopBar from "../components/navbar/adminNavbar/AdminTopBar";

interface LayoutProp {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: LayoutProp) => {
  return (
    <div className='grid grid-cols-[80px_1fr]  md:grid-cols-[216px_1fr] text-text-primary font-medium min-h-screen w-full overflow-x-hidden'>
      <div>
        <AdminNavbar />
      </div>

      <div className='min-h-screen overflow-x-hidden'>
        <AdminTopBar />
        <div className='p-4 md:p-8'>{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
