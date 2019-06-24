import React from 'react';
import { connect } from "react-redux";
import {removeSchool} from '../../actions/school';



const SchoolEditList = (props) => {
    return(
        <ul className="school-list">
            {/* {props.schools.map((school)=>{
                return <li key={school}><p>{school}</p> <button onClick={()=>{
                    props.dispatch(removeSchool(school));
                }}>Remove</button></li>
            })} */}
        </ul>
    )
}

const mapStateToProps = state => {
    return {
        schools: state.schools
    };
};


export default connect(mapStateToProps)(SchoolEditList);