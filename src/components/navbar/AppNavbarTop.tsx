import { LuHeart, LuShoppingCart, LuUser } from "react-icons/lu";
import type { NavActionType } from "../../utilities/types/navType";
import AppNavbarLink from "./AppNavbarLink";
import { logo } from "../../utilities/images";
import NavSearch from "./NavSearch";

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
          <img src={logo} alt='LOGO' />
        </div>
        <NavSearch />
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
