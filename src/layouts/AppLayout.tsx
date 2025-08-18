import type { ApplayoutType } from "../utilities/types/layoutType";
import AppNavbar from "../components/navbar/AppNavbar";

const AppLayout = ({ children }: ApplayoutType) => {
  return (
    <div className='p-8 min-w-[385px] md:p-8 lg:px-20 lg:py-5 lg:max-w-[1440px] lg:m-auto'>
      <AppNavbar />
      <div>{children}</div>
    </div>
  );
};

export default AppLayout;
