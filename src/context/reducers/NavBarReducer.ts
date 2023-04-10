import { Action } from "../../types/actions";
import {
  INavBarPayload,
  INavBarState,
  NAVBAR_ACTION,
} from "../../types/nav_bar";

export const initilState: INavBarState = {
  navbar: {},
};

export function reducer(
  state = initilState,
  action: Action<NAVBAR_ACTION, Partial<INavBarPayload>>
): INavBarState {
  switch (action.type) {
    case NAVBAR_ACTION.SET_NAVBAR:
      return {
        ...state,
        navbar: action.payload?.navbar || {
          id: "",
          title: "",
          path: "",
        },
      };
    default:
      return state;
  }
}
