import { CEK_AKSES, LOGIN_ADMIN, SET_LOADING } from "../config/types";

export default (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: !action.data
      };
    default:
      return state;
  }
};
