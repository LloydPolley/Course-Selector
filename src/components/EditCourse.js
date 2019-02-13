import React from "react";
import CourseForm from "./CourseForm";
import "../styles/nav.css";
import { connect } from 'react-redux';

const EditCourse = (props, state) => {
  return (
    <div className="page-container">
      <h1>Editing - {props.course.courseName}</h1>
      <CourseForm course={props.course}/>
    </div>
  );
};

const mapStateToProps = (state, props) => {
    console.log(state);
    // console.log(props.match.params.id);
  return {
    course: state.courses.find((course)=>{
        if(course.id === props.match.params.id){
            console.log(course);
            return course
        }
    })
  };
};

export default connect(mapStateToProps)(EditCourse);
