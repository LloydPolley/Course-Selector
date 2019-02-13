import React from "react";
import CourseForm from "./CourseForm";
import '../styles/nav.css';

class EditCourse extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='page-container'>
        <h1>Editing - </h1>
        <CourseForm />
      </div>
    );
  }
}

export default EditCourse;
