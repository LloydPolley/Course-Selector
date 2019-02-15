import React from "react";
import { Link } from "react-router-dom";

import "../styles/CourseItem.css";

const CourseItem = props => (
  <div className="courseItem">
    <Link className="courseNameLink" to={`/edit/${props.course.id}`}>
      <h1>{props.course.courseName}</h1>
    </Link>
    <div className="languageDisplay">
      <p>{props.course.courseLang.toUpperCase()}</p>
    </div>
    <div className="courseFlex">
      <div>
        <p>School: {props.course.school}</p>
        <p>Weeks Available: {props.course.courseLength}</p>
        <p>Price per week: {props.course.coursePrice}</p>
      </div>
      <div>
        <p className='bold'>Course Description</p>
        <p>{props.course.courseDescription}</p>
      </div>
    </div>
  </div>
);

export default CourseItem;
