import React from 'react';
import { Link } from 'react-router-dom';

const CourseItem = (props) => (
    <div>
        <Link to={`/edit/${props.course.id}`}><h1>{props.course.courseName}</h1></Link>
        <p>{props.course.coursePrice}</p>
        <p>{props.course.courseLength}</p>
        <p>{props.course.courseDescription}</p>
        <p>{props.course.school}</p>
    </div>
)

export default CourseItem;