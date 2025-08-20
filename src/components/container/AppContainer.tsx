import type React from 'react';

interface AppContainerPropTpes {
  children: React.ReactNode;
}

const AppContainer: React.FC<AppContainerPropTpes> = ({ children }) => {
  return (
    <div className="text-text-primary  mt-8 p-4 lg:w-[1440px] lg:m-auto lg:px-20 ">
      {children}
    </div>
  );
};

export default AppContainer;
