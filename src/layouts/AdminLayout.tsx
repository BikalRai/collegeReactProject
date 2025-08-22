import AdminNavbar from "../components/navbar/adminNavbar/AdminNavbar";

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
        <div>profile</div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
