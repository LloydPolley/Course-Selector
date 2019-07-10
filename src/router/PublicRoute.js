import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import Nav from "../components/Nav/Nav";

export const PublicRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      component={props => {
        console.log("auth", isAuthenticated);
        return isAuthenticated !== undefined ? (
          <Redirect to="/dashboard" />
        ) : (
          <div>
            <Component {...props} />
          </div>
        );
      }}
    />
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.uid
});

export default connect(mapStateToProps)(PublicRoute);
