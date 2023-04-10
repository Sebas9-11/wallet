import React, { createContext, useContext, useMemo, useReducer } from "react";
import { Action } from "../types/actions";
import { initilState, reducer } from "./reducers/NavBarReducer";
import { INavBarPayload, NAVBAR_ACTION, INavBarState } from "../types/nav_bar";

type Dispatch = React.Dispatch<Action<NAVBAR_ACTION, Partial<INavBarPayload>>>;

interface NavBarDefault {
  state: INavBarState;
  dispatch: Dispatch;
}

export const NavBarContext = createContext<NavBarDefault>({
  state: initilState,
  dispatch: () => null,
});

interface NavBarProviderProps {
  children: React.ReactNode;
}

export function NavBarProvider({ children }: NavBarProviderProps) {
  const [state, dispatch] = useReducer(reducer, initilState);

  const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <NavBarContext.Provider value={value}>{children}</NavBarContext.Provider>
  );
}

export const useNavBar = () => useContext(NavBarContext);
