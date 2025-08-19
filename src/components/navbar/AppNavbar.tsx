import LineSeparator from '../LineSeparator';
import AppNavbarBottom from './AppNavbarBottom';
import AppNavbarTop from './AppNavbarTop';

const AppNavbar = () => {
  return (
    <nav className="flex flex-col gap-5 p-4 lg:px-20 lg:py-5 lg:max-w-[1440px] lg:m-auto">
      <AppNavbarTop />
      <LineSeparator />
      <AppNavbarBottom />
    </nav>
  );
};

export default AppNavbar;
