import React from "react";
import { NavBarProvider } from "../NavBarContext";

interface ProviderProps {
  children: React.ReactNode;
}

const Providers = ({ children }: ProviderProps) => {
  return <NavBarProvider>{children}</NavBarProvider>;
};

export default Providers;
