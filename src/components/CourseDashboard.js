import React from "react";

import { Link } from "react-router-dom";

import CourseList from './CourseList';

import "../styles/dashboard.css";

const CourseDashboard = () => (
  <div className="page-container">
    <div className="page-title">
      <h1>Course dashboard</h1>
    </div>
    <div className="icons-container">
      <div className="dashboard-icons">
        <Link to="/add">Add Course</Link>
      </div>
      <div className="dashboard-icons">
        <Link to="/add">Add Course</Link>
      </div>
    </div>
    <div className="courseListContainer">
        <CourseList/>
    </div>
  </div>
);

export default CourseDashboard;
