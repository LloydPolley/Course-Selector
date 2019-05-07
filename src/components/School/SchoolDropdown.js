import React from "react";
import { connect } from "react-redux";

import '../../styles/CourseForm.css'

const SchoolDropdown = props => (
    <select value={props.value} onChange={props.onChange}>
      <option value="no-value" disabled>
        Select school
      </option>
      {props.schools.map(school => {
        return <option>{school}</option>;
      })}
    </select>
);

const mapStateToProps = state => {
  console.log(state.schools, 'schoolList');
  return {
    schools: state.schools
  };
};

export default connect(mapStateToProps)(SchoolDropdown);
