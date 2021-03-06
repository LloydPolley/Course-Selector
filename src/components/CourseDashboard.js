import React from "react";
import CourseList from './Course/CourseList';
import CourseFilters from './Course/CourseFilters';
import "../styles/dashboard.css";


const CourseDashboard = () => (
  <div className="page-container">
    <div className="page-title">
      <h1>Course dashboard</h1>
    </div>
    <CourseFilters/>
    <div className="courseListContainer">
        <CourseList/>
    </div>
  </div>
);

export default CourseDashboard;
