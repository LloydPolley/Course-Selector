import React from 'react';
import { connect } from "react-redux";
import {getSchools, removeSchool, getVisibleSchools} from '../../actions/school';



const SchoolEditList = (props) => {
    return(
        <ul className="school-list">
            {console.log('schools', props.state.schools)}
            {props.state.schools.map((school)=>{
                // console.log('map ',school);
                return <li key={school.id}><p>{school.school}</p> <button onClick={()=>{
                    props.dispatch(removeSchool(school.id));
                }}
                >Remove</button></li>
            })}
        </ul>
    )
}

const mapStateToProps = state => {
    return {
        state
    };
};


export default connect(mapStateToProps)(SchoolEditList);