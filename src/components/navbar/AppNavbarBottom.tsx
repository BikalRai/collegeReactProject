import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import type { NavLinkType } from '../../utilities/types/navType';
import { LuMapPin, LuX } from 'react-icons/lu';
import { FaBars } from 'react-icons/fa';

const navLinks: NavLinkType[] = [
  { id: 1, path: '/', name: 'Home' },
  { id: 2, path: 'accessories', name: 'Accessories' },
  { id: 3, path: 'setups', name: 'Setups' },
  { id: 4, path: 'deals', name: 'Deals' },
  { id: 5, path: 'about', name: 'About' },
];

const selectValues = [
  { id: 1, value: 'Kathmandu' },
  { id: 2, value: 'Lalitpur' },
  { id: 3, value: 'Bhaktapur' },
  { id: 4, value: 'Pokhara' },
];

const AppNavbarBottom = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <div className="flex gap-5 items-center justify-between text-text-primary relative">
      <div
        className={`${
          showMenu ? 'hidden' : 'block'
        } cursor-pointer transition hover:text-primary md:hidden`}
        onClick={() => setShowMenu((prev) => !prev)}
      >
        <FaBars className="h-5 w-5" />
      </div>
      <div
        className={`${showMenu ? 'flex' : 'hidden'}
      absolute top-0 left-0 flex-col gap-5 app__nav_link bg-cardbg p-6 rounded-2xl z-50  md:static md:flex md:flex-row md:h-auto md:w-auto md:bg-transparent md:p-0 md:rounded-none`}
      >
        <button
          onClick={() => setShowMenu(false)}
          className={`${
            showMenu ? 'block' : 'hidden'
          } absolute top-3 right-3 text-gray-500 hover:text-primary cursor-pointer`}
        >
          <LuX className="h-4 w-4" />
        </button>
        {navLinks.map((link) => (
          <NavLink
            key={link.id}
            to={link.path}
            className={`transition hover:text-primary`}
          >
            {link.name}
          </NavLink>
        ))}
      </div>
      <div className="text-text-primary flex items-center gap-2 ms-auto w-fit text-sm ">
        <div className="flex items-center">
          <LuMapPin className=" stroke-3 h-5 w-5" />
        </div>
        <p className="w-fit">Deliver to</p>
        <select
          name=""
          id=""
          className="w-fit rounded-lg border border-gray-300 bg-cardbg-light px-2 py-0.25 text-sm text-gray-700 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        >
          {selectValues.map((select) => (
            <option key={select.id} value="">
              {select.value}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default AppNavbarBottom;
