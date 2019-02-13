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

const course1 = store.dispatch(addCourse('fr', 'tutorial', 1000, '2weeks', 'dfghjk', 'z'));
const course2 = store.dispatch(addCourse('en', 'quatorial', 1000, '2weeks', 'dsd', 'a'));
const course3 = store.dispatch(addCourse('fr', 'oct', 200, '2weeks', 'dsd', 'g'));
const course5 = store.dispatch(addCourse('es', 'oct', 200, '2weeks', 'dsd', 'w'));
const course4 = store.dispatch(addCourse('en', 'oct', 200, '2weeks', 'dsd', 'q'));

// store.dispatch(removeCourse({id: course1.course.id}));
// store.dispatch(editCourse(course2.course.id, { coursePrice: 500 }));

store.dispatch(sortBySchool())
store.dispatch(sortByLanguage())
// store.dispatch(setTextFilter(''));






export default store;
