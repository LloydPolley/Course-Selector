import uuid from "uuid";


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
            console.log('language order');
            return a.courseLang > b.courseLang ? 1 : -1;
        }
        if(filters.sortBy === 'school'){
            console.log('school order');
            return a.school > b.school ? 1 : -1; 
        }
    })
}
