import React from "react";
import { connect } from 'react-redux';

import { getVisibleCourses } from '../../actions/course';
import CourseItem from './CourseItem';


const CourseList = (props) => (
    <div>
        {props.courses.map((course)=>{
            console.log(props.courses);
            console.log(props)
            return <CourseItem key={course.id} course={course}/>
        })}
    </div>
)


const mapStateToProps = (state) => {
    return{
        courses: getVisibleCourses(state.courses, state.filters)
    }
}

export default connect(mapStateToProps)(CourseList);