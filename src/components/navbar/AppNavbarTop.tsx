import { LuHeart, LuSearch, LuShoppingCart, LuUser } from 'react-icons/lu';
import type { NavActionType } from '../../appPropTypes/navType';
import AppNavbarLink from './AppNavbarLink';

const navActionLinks: NavActionType[] = [
  { icon: <LuHeart strokeWidth={3} />, path: 'wishlist' },
  { icon: <LuShoppingCart strokeWidth={3} />, path: 'cart' },
  { icon: <LuUser strokeWidth={3} />, path: 'profile' },
];

const AppNavbarTop = () => {
  return (
    <div className="text-text-primary">
      <div>
        <div className="logo">
          <img src="" alt="LOGO" />
        </div>
        <div className="flex items-center justify-between border border-primary ps-4 text-sm rounded-2xl overflow-hidden">
          <input
            type="search"
            placeholder="Search"
            className="outline-0 w-full text-primary placeholder:text-card-border"
          />
          <button className="w-fit p-2.5 bg-primary text-text-primary cursor-pointer transition hover:bg-secondary">
            <LuSearch />
          </button>
        </div>
      </div>
      <div className="flex items-center gap-5">
        {navActionLinks.map((action, i) => (
          <AppNavbarLink key={i + 1} icon={action.icon} path={action.path} />
        ))}
      </div>
    </div>
  );
};

export default AppNavbarTop;
