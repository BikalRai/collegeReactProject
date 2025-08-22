import { LuSearch } from "react-icons/lu";

const NavSearch = () => {
  return (
    <div className='flex items-center justify-between border border-muted ps-4 text-sm rounded-3xl overflow-hidden grow max-w-xl h-12 group focus-within:border-primary'>
      <input
        type='search'
        placeholder='Search'
        className='outline-0 w-full text-primary placeholder:text-muted'
      />
      <button className='w-fit p-4 bg-muted text-text-primary cursor-pointer transition hover:bg-primary'>
        <LuSearch />
      </button>
    </div>
  );
};

export default NavSearch;
