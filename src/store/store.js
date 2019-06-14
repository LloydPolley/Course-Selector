import { createStore, combineReducers, applyMiddleware } from "redux";
import coursesReducer from "../reducers/courses";
import filtersReducer from "../reducers/filters";
import schoolsReducer from '../reducers/schools';
import thunk from 'redux-thunk';

import { addCourse, getVisibleCourses } from "../actions/course";
import { addSchool, removeSchool, getSchools } from '../actions/school';
import {sortBySchool} from '../actions/filters';

const store = createStore(
  combineReducers({
    courses: coursesReducer,
    filters: filtersReducer,
    schools: schoolsReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  var state = store.getState();
  const visibleState = getVisibleCourses(state.courses, state.filters);
  console.log("Redux Store", state);
});

// store.dispatch(addCourse({courseLang: "fr", courseName: "tutorial 1", coursePrice: 1000, courseLength: "2 week", courseDescription:"dfghjk", school: "Taunton"}));
// store.dispatch(addCourse({courseLang: "en", courseName: "tutorial 2", coursePrice: 500, courseLength: "4 week", courseDescription:"aaa", school: "Oxford"}));
// store.dispatch(addCourse({courseLang: "de", courseName: "tutorial 3", coursePrice: 465, courseLength: "5 week", courseDescription:"sss", school: "London"}));
// store.dispatch(addCourse({courseLang: "fr", courseName: "tutorial 4", coursePrice: 386, courseLength: "6 week", courseDescription:"ddd", school: "Cambridge"}));
// store.dispatch(addCourse({courseLang: "fr", courseName: "tutorial 15", coursePrice: 673, courseLength: "8 week", courseDescription:"ccc", school: "Oxford"}));
 

// store.dispatch(addSchool('London'));
// store.dispatch(addSchool('Oxford'));
// store.dispatch(addSchool('Taunton'));
// store.dispatch(addSchool('Cambridge'));
// store.dispatch(addSchool('Boston'));

// store.dispatch(sortBySchool());

// store.dispatch(getSchools());

// store.dispatch(removeSchool('London'));

// store.dispatch(removeCourse({id: course1.course.id}));
// store.dispatch(editCourse(course2.course.id, { coursePrice: 500 }));

// store.dispatch(sortBySchool())
// store.dispatch(sortByLanguage())
// store.dispatch(setTextFilter(''));

export default store;
