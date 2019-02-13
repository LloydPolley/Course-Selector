import { createStore, combineReducers } from "redux";
import coursesReducer from '../reducers/courses';
import filtersReducer from '../reducers/filters';

import { addCourse, removeCourse, editCourse, getVisibleCourses } from '../actions/course';
import { setTextFilter, sortByLanguage, sortBySchool } from '../actions/filters';


const store = createStore(combineReducers({
    courses: coursesReducer,
    filters: filtersReducer
}));

store.subscribe(() => {
    var state = store.getState();
    const visibleState = getVisibleCourses(state.courses, state.filters);
    console.log(visibleState, 'visable state');
})

// const course1 = store.dispatch(addCourse('fr', 'Course 1', 1000, '2 week', 'dfghjk', 'oxford'));
// const course2 = store.dispatch(addCourse('en', 'Course 2', 1000, '2 week', 'dsd', 'cambridge'));
// const course3 = store.dispatch(addCourse('fr', 'Course 3', 200, '2 Week', 'dsd', 'boston'));
// const course5 = store.dispatch(addCourse('es', 'Course 4', 200, '1 Week', 'dsd', 'oxford'));
// const course4 = store.dispatch(addCourse('en', 'Course 5', 200, '3 Week', 'dsd', 'cambridge'));

// store.dispatch(removeCourse({id: course1.course.id}));
// store.dispatch(editCourse(course2.course.id, { coursePrice: 500 }));

// store.dispatch(sortBySchool())
// store.dispatch(sortByLanguage())
// store.dispatch(setTextFilter(''));






export default store;
