import type { ApplayoutType } from '../utilities/types/layoutType';
import AppNavbar from '../components/navbar/AppNavbar';

const AppLayout = ({ children }: ApplayoutType) => {
  return (
    <div className="min-w-[385px] lg:m-auto">
      <AppNavbar />
      <div>{children}</div>
    </div>
  );
};

export default AppLayout;
