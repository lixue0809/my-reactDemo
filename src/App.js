import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Page404 from "./pages/Page404";
import "./App.css";

const isLogin = true;
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isLogin ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={LoginPage} />
      <PrivateRoute path="/" component={HomePage} />
      {/* <Route exact path="/" component={HomePage} /> */}

      <Route component={Page404} />
    </Switch>
  </BrowserRouter>
);

export default App;
