import type { NavActionType } from '../../appPropTypes/navType';
import { Link } from 'react-router-dom';

const AppNavbarLink = ({ icon, path }: NavActionType) => {
  return (
    <div className="flex items-center gap-3 text-text-primary font-medium text-sm">
      <span className="text-primary">{icon}</span>
      <Link to={`/${path}`} className="transition hover:text-primary">
        {path[0].toUpperCase() + path.slice(1)}
      </Link>
    </div>
  );
};

export default AppNavbarLink;
