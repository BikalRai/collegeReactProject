import type { ApplayoutType } from "../utilities/types/layoutType";
import AppNavbar from "../components/navbar/AppNavbar";
import Footer from "../components/footer/Footer";

const AppLayout = ({ children }: ApplayoutType) => {
  return (
    <div className='min-w-[385px] lg:m-auto'>
      <AppNavbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default AppLayout;
