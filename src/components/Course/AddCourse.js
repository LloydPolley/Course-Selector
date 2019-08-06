import React from "react";
import CourseForm from "../Course/CourseForm";
import "../../styles/nav.css";
import { connect } from "react-redux"; 
import { startAddCourse } from '../../actions/course';

const AddCourse = (props) => {
  return (
    <div className="page-container"> 
      <div className="page-title">
        <h1>Add Course</h1>
      </div>
      <CourseForm 
      submit={(course)=>{
        console.log(course, 'course');
        props.dispatch(startAddCourse({
          courseLang: course.courseLang,
          courseName: course.courseName,
          coursePrice: course.coursePrice,
          courseLength: course.courseLength,
          courseDescription: course.courseDescription,
          courseSchool: course.school
        }));
        props.history.push('/');
      }} />
    </div>
  );
};

export default connect()(AddCourse);
