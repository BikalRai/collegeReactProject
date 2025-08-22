import NavSearch from "../NavSearch";

const AdminTopBar = () => {
  return (
    <div className='flex gap-4 justify-end p-5 shadow-xl'>
      <NavSearch />
      <div className='w-12 h-12 border rounded-full'>
        <img src='' alt='' />
      </div>
    </div>
  );
};

export default AdminTopBar;
