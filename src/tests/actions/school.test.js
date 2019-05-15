import uuid from "uuid";
import { addSchool, removeSchool, getSchools } from '../../actions/school';


const schools = [{
    id: 1,
    school: 'Cambridge'
},
{
    id: 2,
    school: 'London'
}]

test('should return addSchool object', () => {
    expect(addSchool('Cambridge')).toEqual({
        type: 'ADD_SCHOOL',
        school: 'Cambridge',
        id: expect.any(String)
    })
});


test('should return removeSchool object', () => {
    expect(removeSchool('Cambridge')).toEqual({
        type: 'REMOVE_SCHOOL',
        school: 'Cambridge',
    })
});


test('should return removeSchool object', () => {
    expect(getSchools(schools)).toEqual({
        type: 'GET_SCHOOLS',
        schools
    })
});

