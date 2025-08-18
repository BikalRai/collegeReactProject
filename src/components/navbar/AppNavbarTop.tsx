import { LuHeart, LuSearch, LuShoppingCart, LuUser } from "react-icons/lu";
import type { NavActionType } from "../../utilities/types/navType";
import AppNavbarLink from "./AppNavbarLink";

const navActionLinks: NavActionType[] = [
  { icon: <LuHeart strokeWidth={3} />, path: "wishlist" },
  { icon: <LuShoppingCart strokeWidth={3} />, path: "cart" },
  { icon: <LuUser strokeWidth={3} />, path: "profile" },
];

const AppNavbarTop = () => {
  return (
    <div className='text-text-primary flex flex-col gap-5 md:flex-row md:justify-between'>
      <div className='flex items-center gap-5 grow'>
        <div className='logo'>
          <img src='' alt='LOGO' />
        </div>
        <div className='flex items-center justify-between border border-primary ps-4 text-sm rounded-2xl overflow-hidden grow'>
          <input
            type='search'
            placeholder='Search'
            className='outline-0 w-full text-primary placeholder:text-card-border lg:w-'
          />
          <button className='w-fit p-2.5 bg-primary text-text-primary cursor-pointer transition hover:bg-secondary'>
            <LuSearch />
          </button>
        </div>
      </div>
      <div className='flex items-center justify-center md:justify-end gap-5 grow'>
        {navActionLinks.map((action, i) => (
          <AppNavbarLink key={i + 1} icon={action.icon} path={action.path} />
        ))}
      </div>
    </div>
  );
};

export default AppNavbarTop;
