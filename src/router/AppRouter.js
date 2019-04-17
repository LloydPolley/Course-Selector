import React from "react";
import '../styles/nav.css';

import { BrowserRouter, Route, Switch } from "react-router-dom";
import CourseDashboard from "../components/CourseDashboard";
import AddCourse from '../components/AddCourse';
import Nav from "../components/Nav";
import EditCourse from '../components/EditCourse';
import AddSchool from "../components/AddSchool";




const AppRouter = () => (
  <BrowserRouter>
    <div>
    <Nav className='nav-container'/>
      <Switch>
        <Route path="/" component={CourseDashboard} exact={true}/>
        <Route path="/add" component={AddCourse} />
        <Route path="/edit/:id" component={EditCourse} />
        <Route path="/addSchool" component={AddSchool} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
