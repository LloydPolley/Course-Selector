import React from "react";
import CourseForm from "./CourseForm";
import "../styles/nav.css";

class AddCourse extends React.Component{

  onSubmit = () => {
    //Submit to redux
    console.log('add to redux');
  }
  render(){
    return (
      <div className="page-container">
        <div className="page-title">
          <h1>Add Course</h1>
        </div>
        <CourseForm onSubmit={this.onSubmit}/>
      </div>
    );
  }
}

export default AddCourse;
