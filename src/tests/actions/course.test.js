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