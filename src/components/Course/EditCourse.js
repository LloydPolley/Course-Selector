import React from "react";
import CourseForm from "./CourseForm";
import "../../styles/nav.css";
import { connect } from 'react-redux';
import { editCourse } from "../../actions/course";

const EditCourse = (props) => {
  return (
    <div className="page-container">
      <h1>Editing - {props.course.courseName}</h1>
      <CourseForm course={props.course}
      submit={(course)=>{
        console.log(course)
        props.dispatch(editCourse(props.course.id, {
          courseLang: course.courseLang,
          courseName: course.courseName,
          coursePrice: course.coursePrice,
          courseLength: course.courseLength,
          courseDescription: course.courseDescription,
          school: course.school
        }));
        props.history.push('/');
      }} />
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    course: state.courses.find((course)=>{
        if(course.id === props.match.params.id){
            return course
        }
    })
  };
};

export default connect(mapStateToProps)(EditCourse);
