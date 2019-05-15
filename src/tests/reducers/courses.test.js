import coursesReducer from '../../reducers/courses';


const data = [{
    id: "1",
    courseLang: "fr",
    courseName: "tutorial 1",
    coursePrice: 1000,
    courseLength: "2 week",
    courseDescription: "a",
    school: "London"
},{
    id: "2",
    courseLang: "en",
    courseName: "tutorial 2",
    coursePrice: 1,
    courseLength: "5 week",
    courseDescription: "b",
    school: "Oxford"
}]

test('add course reducer', () => {
    const state = coursesReducer(undefined, {
        type: '@@INIT'
    })
    expect(state).toEqual([]);
})

test('remove course reducer', () => {
    const state = coursesReducer(data, {
        type: 'REMOVE_COURSE',
        id : data[0].id
    });
    expect(state).toEqual([data[1]]);
})
test('remove course none', () => {
    const state = coursesReducer(data, {
        type: 'REMOVE_COURSE',
        id : '23'
    });
    expect(state).toEqual([data[0], data[1]]);
})


test('add course reducer', () => {
    const course = {
        id: "3",
        courseLang: "aq",
        courseName: "tutorial 20",
        coursePrice: 1000,
        courseLength: "2 week",
        courseDescription: "c",
        school: "Taunton"
    }
    const state = coursesReducer(data, {
        type: 'ADD_COURSE',
        course: course
    })
    expect(state).toEqual([...data, course]);
})
test('edit course reducer', () => {
    const updates = {
        courseDescription: "updated course",
    }
    const state = coursesReducer(data, {
        type: 'EDIT_COURSE',
        id: data[0].id,
        updates
    })
    expect(state[0].courseDescription).toBe(updates.courseDescription);
})

test('edit course reducer empty', () => {
    const updates = {
        courseDescription: "updated course",
    }
    const state = coursesReducer(data, {
        type: 'EDIT_COURSE',
        id: 'e',
        updates
    })
    expect(state).toEqual(data);
})