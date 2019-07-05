import React from "react";
import { connect } from "react-redux";

import "../../styles/CourseForm.css";

const SchoolDropdown = props => {
  if(props.schools.length !== 0 ){
    console.log('if', props.value);
    return (
      <select value={props.value} onChange={props.onChange}>
        <option value="no-value">
          Select school
        </option>
        {props.schools.map(school => {
          return <option key={school.id}>{school.school}</option>;
        })}
        {console.log(props)}
      </select>
    );
  } else{
    return (
      <p>No schools found</p>
    )
  }
};

const mapStateToProps = state => {
  return {
    schools: state.schools
  };
};

export default connect(mapStateToProps)(SchoolDropdown);
