import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/CourseItem.css';

const CourseItem = (props) => (
    <div className='courseItem'>
        <Link to={`/edit/${props.course.id}`}><h1>{props.course.courseName}</h1></Link>
        <p>Course Location: {props.course.school}</p>
        <p>Course Language: {props.course.courseLang}</p>
        
        <p>Price: {props.course.coursePrice}</p>
        <p>Course Length:{props.course.courseLength}</p>
        <p>Course Info: {props.course.courseDescription}</p>
    </div>
)

export default CourseItem;