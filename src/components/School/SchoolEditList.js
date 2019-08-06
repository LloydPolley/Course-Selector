import React from "react";
import { connect } from "react-redux";
import {
  getSchools,
  removeSchool,
  getVisibleSchools,
  startRemoveSchool
} from "../../actions/school";

const SchoolEditList = props => {
  return (
    <ul className="school-list">
      {props.state.schools.map(school => {
        return (
          <li key={school.id}>
            <p>{school.school}</p>
            <button
              onClick={() => {
                console.log(school.id);
                props.dispatch(startRemoveSchool(school.id));
              }}
            >
              Remove
            </button>
          </li>
        );
      })}
    </ul>
  );
};
const mapStateToProps = state => {
  return {
    state
  };
};
export default connect(mapStateToProps)(SchoolEditList);
