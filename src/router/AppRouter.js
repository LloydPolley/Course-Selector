import React from "react";
import '../styles/nav.css';

import { Router, Route, Switch } from "react-router-dom";
import CourseDashboard from "../components/CourseDashboard";
import AddCourse from '../components/Course/AddCourse';
import EditCourse from '../components/Course/EditCourse';
import AddSchool from "../components/School/AddSchool";
import LoginPage from '../components/Account/Login';
import {createBrowserHistory} from  'history'


import PrivateRoute from './PrivateRoute'
import PublicRoute  from "./PublicRoute";


export const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true}/>
        <PrivateRoute path="/dashboard" component={CourseDashboard} exact={true}/>
        <PrivateRoute path="/add" component={AddCourse} />
        <PrivateRoute path="/edit/:id" component={EditCourse} />
        <PrivateRoute path="/addSchool" component={AddSchool} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
