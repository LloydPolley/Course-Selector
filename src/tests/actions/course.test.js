import {addCourse, editCourse, removeCourse, getVisibleCourses } from '../../actions/course';
import uuid from "uuid";


test ('Returns object', ()=>{
    expect(removeCourse({id: 111})).toEqual({
        type: 'REMOVE_COURSE',
        id: 111
    });
});
test ('Returns object undefined', ()=>{
    expect(removeCourse({})).toEqual({
        type: 'REMOVE_COURSE',
        id: undefined
    });
});

//Edit expense
test ('Returns object editted', ()=>{
    expect(editCourse(11, {courseLang: 'ES'})).toEqual({
        type: 'EDIT_COURSE',
        id: 11,
        updates: {
            courseLang: 'ES'
        }
    });
});
test ('Returns object editted', ()=>{
    expect(editCourse(11, {})).toEqual({
        type: 'EDIT_COURSE',
        id: 11,
        updates: {
            
        }
    });
});

//Add expense
test ('Returns object with course information', ()=>{
    const data = {
        courseName: 'one',
        courseLength: '1',
        courseDescription: 'one',
        courseLang: 'en',
        coursePrice: '50',
        school: 'Cambridge'
    }
    expect(addCourse(data)).toEqual({
        type: 'ADD_COURSE',
        course: {
            ...data,
            id: expect.any(String)
        }
    });
});
test ('Returns object with course information', ()=>{
    const data = {}
    expect(addCourse(data)).toEqual({
        type: 'ADD_COURSE',
        course: {
            courseLang: "en",
            courseName: "",
            coursePrice : "",
            courseLength : "",
            courseDescription : "",
            school: '',
            id: expect.any(String)
        }
    });
});

const courses = [
    {
        courseLang: "a",
        courseName: "a",
        coursePrice : "10",
        courseLength : "1",
        courseDescription : "a",
        school: 'c',
        id: 1
    },
    {
        courseLang: "c",
        courseName: "c",
        coursePrice : "10",
        courseLength : "1",
        courseDescription : "c",
        school: 'a',
        id: 3
    },
    {
        courseLang: "b",
        courseName: "b",
        coursePrice : "10",
        courseLength : "1",
        courseDescription : "b",
        school: 'b',
        id: 2
    }
]

//getVisibleCourses

test ('sort courses by School', ()=>{
    const filters = {
        text: '',
        sortBy: 'school'
    }
    expect(getVisibleCourses(courses, filters)).toEqual([courses[1], courses[2], courses[0]]);
});

test ('sort courses by language', ()=>{
    const filters = {
        text: '',
        sortBy: 'language'
    }
    expect(getVisibleCourses(courses, filters)).toEqual([courses[0], courses[2], courses[1]]);
});

test ('sort courses by courseName', ()=>{
    const filters = {
        text: '',
        sortBy: 'courseName'
    }
    expect(getVisibleCourses(courses, filters)).toEqual([courses[0], courses[2], courses[1]]);
});

test ('sort courses by courseName', ()=>{
    const filters = {
        text: 'b',
        sortBy: 'courseName'
    }
    expect(getVisibleCourses(courses, filters)).toEqual([courses[2]]);
});