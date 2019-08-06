import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import Nav from "../components/Nav/Nav";


export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      component={props => {
        console.log(isAuthenticated, "auth");
        isAuthenticated.uid === undefined
          ? (isAuthenticated = false)
          : (isAuthenticated = true);
        return isAuthenticated ? (
          <div>
            <Nav className="nav-container" />
            <Component {...props} />
          </div>
        ) : (
          <Redirect to="/" />
        );
      }}
    />
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);
