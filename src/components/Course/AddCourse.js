import React from "react";
import CourseForm from "../Course/CourseForm";
import "../../styles/nav.css";
import { connect } from "react-redux";
import { addCourse } from '../../actions/course';

const AddCourse = (props) => {
  return (
    <div className="page-container"> 
      <div className="page-title">
        <h1>Add Course</h1>
      </div>
      <CourseForm 
      submit={(course)=>{
        console.log(course, 'course');
        props.dispatch(addCourse(
          course.courseLang,
          course.courseName,
          course.coursePrice,
          course.courseLength,
          course.courseDescription,
          course.school
        ));
        props.history.push('/');
      }} />
    </div>
  );
};

export default connect()(AddCourse);
