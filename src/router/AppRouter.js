import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CourseDashboard from "../components/CourseDashboard";
import AddCourse from '../components/AddCourse';
import Nav from "../components/Nav";
import EditCourse from '../components/EditCourse';

import '../styles/nav.css';


const AppRouter = () => (
  <BrowserRouter>
    <div>
    <Nav className='nav-container'/>
      <Switch>
        <Route path="/" component={CourseDashboard} exact={true}/>
        <Route path="/add" component={AddCourse} />
        <Route path="/edit/:id" component={EditCourse} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
