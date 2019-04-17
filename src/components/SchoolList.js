import React from "react";
import { connect } from "react-redux";

import { getVisibleSchools } from "../actions/school";
import '../styles/CourseForm.css'

const SchoolList = props => (
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
  console.log(state);
  return {
    schools: getVisibleSchools(state.schools)
  };
};

export default connect(mapStateToProps)(SchoolList);
