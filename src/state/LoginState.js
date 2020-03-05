import React, { useReducer } from "react";
import loginContext from "../context/loginContext";
import loginReducer from "../reducer/loginReducer";
import { SET_LOADING, LOGIN_ADMIN } from "../config/types";
const LoginState = props => {
  const initialState = {
    login: false,
    loading: false
  };

  const [state, dispatch] = useReducer(loginReducer, initialState);

  const setLoading = () => dispatch({ type: SET_LOADING, data: state.loading });

  return (
    <loginContext.Provider
      value={{
        login: state.login,
        loading: state.loading,
        setLoading
      }}
    >
      {props.children}
    </loginContext.Provider>
  );
};

export default LoginState;
