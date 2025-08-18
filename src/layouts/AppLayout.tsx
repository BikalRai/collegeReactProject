import type { ApplayoutType } from '../appPropTypes/layoutType';
import AppNavbar from '../components/navbar/AppNavbar';

const AppLayout = ({ children }: ApplayoutType) => {
  return (
    <div>
      <AppNavbar />
      <div>{children}</div>
    </div>
  );
};

export default AppLayout;
