import LineSeparator from "../LineSeparator";
import AppNavbarBottom from "./AppNavbarBottom";
import AppNavbarTop from "./AppNavbarTop";

const AppNavbar = () => {
  return (
    <nav className='flex flex-col gap-5'>
      <AppNavbarTop />
      <LineSeparator />
      <AppNavbarBottom />
    </nav>
  );
};

export default AppNavbar;
