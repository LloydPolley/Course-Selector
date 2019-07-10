import uuid from "uuid";
import database from "../firebase/firebase";
//Redux way

//component calls action generator
//action generator generates object returning it
//component dispatches object
//redux store updates

//Firebase way

//component calls action generator
//action generator generates FUNCTION returning it
//component dispatches FUNCTION
//function runs

export const addCourse = course => ({
  type: "ADD_COURSE",
  course
});

export const startAddCourse = (expenseData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      courseLang = "en",
      courseName = "",
      coursePrice = "",
      courseLength = "",
      courseDescription = "",
      school = ""
    } = expenseData;
    const course = {
      courseLang,
      courseName,
      coursePrice,
      courseLength,
      courseDescription,
      school
    };
    database
      .ref(`users/${uid}/courses`)
      .push(course)
      .then(ref => {
        dispatch(
          addCourse({
            id: ref.key,
            ...course
          })
        );
      });
  };
};
export const startRemoveCourse = id => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/courses`)
      .child(id)
      .remove()
      .then(ref => {
        dispatch(removeCourse({ id }));
      });
  };
};

export const editCourse = (id, updates) => ({
  type: "EDIT_COURSE",
  id,
  updates
});

export const removeCourse = ({ id }) => ({
  type: "REMOVE_COURSE",
  id
});

export const startEditCourse = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/courses`)
      .child(id)
      .update(updates)
      .then(ref => {
        dispatch(editCourse(id, updates));
      });
  };
};

export const getVisibleCourses = (courses, filters) => {
  return courses
    .filter(course => {
      return course.courseName
        .toLowerCase()
        .includes(filters.text.toLowerCase());
    })
    .sort((a, b) => {
      if (filters.sortBy === "language") {
        return a.courseLang > b.courseLang ? 1 : -1;
      }
      if (filters.sortBy === "school") {
        return a.school > b.school ? 1 : -1;
      }
      if (filters.sortBy === "courseName") {
        return a.courseName > b.courseName ? 1 : -1;
      }
    });
};

export const setCourses = courses => ({
  type: "SET_COURSES",
  courses
});

export const startSetCourses = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/courses`)
      .once("value")
      .then(snapshot => {
        const courses = [];

        snapshot.forEach(childSnapshot => {
          courses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });
        dispatch(setCourses(courses));
      });
  };
};
