import React, { ReactNode, useContext, useState } from "react";

type UtilityContextType = {
  isLoadingShow: boolean;
  lodingShow: any;
  lodingHide: any;
};

type UtilityProviderProps = {
  children: ReactNode;
};

const UtilityContext = React.createContext<UtilityContextType>({
  isLoadingShow: false,
  lodingShow: () => {},
  lodingHide: () => {},
});

export const useUtilityContext = () => {
  return useContext(UtilityContext);
};

export const UtilityProvider = ({ children }: UtilityProviderProps) => {
  const [isLoadingShow, setIsLoadingShow] = useState<boolean>(false);
  const lodingShow = () => {
    setIsLoadingShow(true);
  };
  const lodingHide = () => {
    setIsLoadingShow(false);
  };
  const value = {
    isLoadingShow,
    lodingShow,
    lodingHide,
  };

  return (
    <UtilityContext.Provider value={value}>{children}</UtilityContext.Provider>
  );
};
