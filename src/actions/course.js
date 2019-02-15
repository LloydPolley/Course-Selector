import uuid from "uuid";


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

export const addCourse = (
  courseLang = "en",
  courseName = "",
  coursePrice = "",
  courseLength = "",
  courseDescription = "",
  school = ''
) => ({
  type: "ADD_COURSE",
  course: {
    id: uuid(),
    courseLang,
    courseName,
    coursePrice,
    courseLength,
    courseDescription,
    school
  }
});

export const editCourse = (id, updates) => ({
    type: 'EDIT_COURSE',
    id,
    updates
});

export const removeCourse = ({id}) => ({
    type: 'REMOVE_COURSE',
    id
});

export const getVisibleCourses = (courses, filters) => {
    return courses.filter((course)=>{
        return course.courseName.toLowerCase().includes(filters.text.toLowerCase());
    }).sort((a,b)=> {
        if(filters.sortBy === 'language'){
            return a.courseLang > b.courseLang ? 1 : -1;
        }
        if(filters.sortBy === 'school'){
            return a.school > b.school ? 1 : -1; 
        }
        if(filters.sortBy === 'courseName'){
            return a.courseName > b.courseName ? 1 : -1; 
        }
    })
}
