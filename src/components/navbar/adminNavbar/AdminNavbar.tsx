import { NavLink } from "react-router-dom";
import { logo } from "../../../utilities/images";
import { LuBoxes, LuLayoutDashboard, LuUsers } from "react-icons/lu";
import type { AdminNavLinkType } from "../../../utilities/types/navType";

const navLinks: AdminNavLinkType[] = [
  {
    id: 1,
    path: "/",
    name: "Dashboard",
    icon: <LuLayoutDashboard />,
  },
  {
    id: 2,
    path: "/users",
    name: "Users",
    icon: <LuUsers />,
  },
  {
    id: 3,
    path: "/products",
    name: "Products",
    icon: <LuBoxes />,
  },
];

const AdminNavbar = () => {
  return (
    <div className='h-full w-max-[216px] shadow-xl flex flex-col items-center py-5'>
      <div>
        <img src={logo} alt='' />
      </div>
      <nav className='admin__nav grid gap-5 justify-center p-4'>
        {navLinks.map((navLink) => (
          <NavLink
            key={navLink.id}
            to={navLink.path}
            className='flex items-center gap-2 text-2xl md:text-sm rounded-xl p-3'
          >
            <span>{navLink.icon}</span>
            <span className='hidden md:block'>{navLink.name}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default AdminNavbar;
