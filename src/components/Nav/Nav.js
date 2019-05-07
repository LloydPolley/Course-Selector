import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/nav.css';


const Nav = () => (
    <div className="nav">
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
        <NavLink to="/add" activeClassName="is-active">Add Course</NavLink>
        <NavLink to="/addSchool" activeClassName="is-active">Add School</NavLink>
        <NavLink to="/preview" activeClassName="is-active">Preview</NavLink>
    </div>
)

export default Nav;