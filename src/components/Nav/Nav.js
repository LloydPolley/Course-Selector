import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/nav.css';
import {connect} from 'react-redux';
import {startLogout} from '../../actions/auth';


const Nav = (props) => (
    <div className="nav">
        <NavLink to="/dashboard" activeClassName="is-active" exact={true}>Dashboard</NavLink>
        <NavLink to="/add" activeClassName="is-active">Add Course</NavLink>
        <NavLink to="/addSchool" activeClassName="is-active">Add School</NavLink>
        {/* <NavLink to="/preview" activeClassName="is-active">Preview</NavLink>
        <NavLink to="/account" activeClassName="is-active">Account</NavLink> */}
        <button onClick={() => {
            props.startLogout();
        }}>Logout</button>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Nav);