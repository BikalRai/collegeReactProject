import type React from "react";

interface AppContainerPropTpes {
  children: React.ReactNode;
}

const AppContainer: React.FC<AppContainerPropTpes> = ({ children }) => {
  return (
    <div className='text-text-primary  mt-8 p-4 w-full max-w-[1440px] mx-auto lg:px-20 '>
      {children}
    </div>
  );
};

export default AppContainer;
