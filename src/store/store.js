import { createStore, combineReducers } from "redux";
import coursesReducer from "../reducers/courses";
import filtersReducer from "../reducers/filters";
import schoolsReducer from '../reducers/schools';

import { addCourse, getVisibleCourses } from "../actions/course";
import { addSchool, removeSchool } from '../actions/school';

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

store.dispatch(
  addCourse("fr", "tutorial 1", 1000, "2 week", "dfghjk", "oxford")
);
store.dispatch(addCourse("en", "octorial 2", 1000, "2 week", "dsd", "Taunton"));
store.dispatch(addCourse("fr", "quatorial 7", 200, "2 Week", "dsd", "Boston"));
store.dispatch(addCourse("es", "Course 4", 200, "1 Week", "dsd", "Oxford"));
store.dispatch(addCourse("en", "tutor 5", 200, "3 Week", "dsd", "Cambridge"));

store.dispatch(addSchool('London'));
store.dispatch(addSchool('Oxford'));
store.dispatch(addSchool('Taunton'));
store.dispatch(addSchool('Cambridge'));
store.dispatch(addSchool('Boston'));

// store.dispatch(removeCourse({id: course1.course.id}));
// store.dispatch(editCourse(course2.course.id, { coursePrice: 500 }));

// store.dispatch(sortBySchool())
// store.dispatch(sortByLanguage())
// store.dispatch(setTextFilter(''));

export default store;
