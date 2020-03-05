import React, { useState, useContext } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import pages from "../pages";
import LoginState from "../state/LoginState";
const _LoginRenderer = () => {
  return (
    <LoginState>
      <Switch>
        <Route exact path="/login" component={pages.LoginAdmin} />
      </Switch>
    </LoginState>
  );
};

const Routes = () => {
  const [logged, setLoged] = useState(false);
  return <BrowserRouter>{_LoginRenderer()}</BrowserRouter>;
};

export default Routes;
