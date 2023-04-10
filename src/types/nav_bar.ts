export enum NAVBAR_ACTION {
  SET_NAVBAR = "SET_NAVBAR",
}

export interface INavBarState {
  navbar: navBar | Record<string, unknown>;
}

export interface INavBarPayload {
  navbar?: navBar | Record<string, unknown>;
}

export interface navBar {
  id: string;
  title: string;
  path: string;
}
