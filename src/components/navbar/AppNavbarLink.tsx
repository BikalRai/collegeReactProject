import type { NavActionType } from "../../utilities/types/navType";
import { Link } from "react-router-dom";

const AppNavbarLink = ({ icon, path }: NavActionType) => {
  return (
    <Link
      to={`/${path}`}
      className='flex items-center gap-3 text-text-primary font-medium text-sm'
    >
      <span className='text-primary'>{icon}</span>
      <span className='transition hover:text-primary'>
        {path[0].toUpperCase() + path.slice(1)}
      </span>
    </Link>
  );
};

export default AppNavbarLink;
