interface LayoutProp {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: LayoutProp) => {
  return (
    <div className="flex">
      <div className="min-h-screen">admin navbar</div>
      <div className="grow">
        <div>profile</div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
