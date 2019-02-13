import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/nav.css';


const Nav = () => (
    <div className="nav">
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
        <NavLink to="/add" activeClassName="is-active">Add Course</NavLink>
    </div>
)

export default Nav;